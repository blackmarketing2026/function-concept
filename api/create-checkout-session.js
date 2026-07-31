export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { STRIPE_SECRET_KEY, STRIPE_PRICE_ID, STRIPE_PUBLISHABLE_KEY } = process.env;

  if (!STRIPE_SECRET_KEY || !STRIPE_PRICE_ID || !STRIPE_PUBLISHABLE_KEY) {
    console.error('Stripe env var missing: STRIPE_SECRET_KEY / STRIPE_PRICE_ID / STRIPE_PUBLISHABLE_KEY');
    return res.status(500).json({ error: 'Serverkonfiguration fehlt.' });
  }

  const origin = req.headers.origin || 'https://function-concept.com';

  const body = new URLSearchParams({
    mode: 'subscription',
    ui_mode: 'embedded',
    return_url: `${origin}/google-ads-kampagne-danke?session_id={CHECKOUT_SESSION_ID}`,
    locale: 'de',
    billing_address_collection: 'required',
    'phone_number_collection[enabled]': 'true',
    'tax_id_collection[enabled]': 'true',
    'line_items[0][quantity]': '1',
    'line_items[0][price]': STRIPE_PRICE_ID,
    'custom_fields[0][key]': 'projektname',
    'custom_fields[0][label][type]': 'custom',
    'custom_fields[0][label][custom]': 'Projektname für das Google-Ad-Paket',
    'custom_fields[0][type]': 'text',
    'custom_fields[0][text][maximum_length]': '140',
  });

  try {
    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });

    const data = await stripeRes.json();

    if (!stripeRes.ok) {
      console.error('Stripe API error:', stripeRes.status, data);
      return res.status(502).json({ error: 'Bestellung konnte nicht gestartet werden.' });
    }

    return res.status(200).json({ clientSecret: data.client_secret, publishableKey: STRIPE_PUBLISHABLE_KEY });
  } catch (err) {
    console.error('Stripe checkout session fetch error:', err);
    return res.status(500).json({ error: 'Bestellung konnte nicht gestartet werden.' });
  }
}
