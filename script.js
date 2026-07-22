// live clock
function tick() {
  const el = document.getElementById('clock');
  if (el) el.textContent = new Date().toLocaleTimeString('de-DE');
}
tick();
setInterval(tick, 1000);

// --- typewriter effect for terminal / code lines ---
function typeLine(el) {
  return new Promise((resolve) => {
    const target = el.scrollWidth;
    const len = (el.textContent || '').length || 1;
    const duration = Math.min(Math.max(len * 0.028, 0.15), 1.6);
    el.classList.add('typing-now');
    el.style.transition = `width ${duration}s steps(${len})`;
    requestAnimationFrame(() => {
      el.style.width = target + 'px';
    });
    setTimeout(() => {
      el.classList.remove('typing-now');
      el.classList.add('typing-done');
      resolve();
    }, duration * 1000 + 30);
  });
}

async function typeContainer(container) {
  const lines = Array.from(container.children);
  for (const line of lines) {
    await typeLine(line);
  }
  // leave a soft blinking cursor on the last line to feel "alive"
  const last = lines[lines.length - 1];
  if (last) last.classList.add('typing-now');
}

const typeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      typeContainer(entry.target);
      typeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.type-lines').forEach((el) => typeObserver.observe(el));

// --- fade+slide reveal for blocks, staggered grids, progress rows ---
const revealEls = document.querySelectorAll('.reveal, .stagger, .progress-row');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach((el) => io.observe(el));

// --- text-scramble "decode" effect on big keyword headlines ---
// classic hacker-terminal technique: characters cycle through random glyphs
// before locking into place, left-to-right, like a decryption readout.
const SCRAMBLE_CHARS = '!<>-_\\/[]{}—=+*^?#$%01アイウエオカケクコ';

class TextScramble {
  constructor(el) {
    this.el = el;
    this.frame = 0;
    this.frameRequest = null;
    this.resolve = null;
    this.update = this.update.bind(this);
  }
  setText(newText) {
    const oldText = this.el.textContent;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => { this.resolve = resolve; });
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || '';
      const to = newText[i] || '';
      const start = Math.floor(i * 2.2) + Math.floor(Math.random() * 6);
      const end = start + 6 + Math.floor(Math.random() * 10);
      this.queue.push({ from, to, start, end, char: null });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.el.classList.add('scrambling-parent');
    this.update();
    return promise;
  }
  update() {
    let output = '';
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      const q = this.queue[i];
      if (this.frame >= q.end) {
        complete++;
        output += q.to;
      } else if (this.frame >= q.start) {
        if (!q.char || Math.random() < 0.3) {
          q.char = SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
        output += `<span class="scramble-char">${q.char}</span>`;
      } else {
        output += q.from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.el.classList.remove('scrambling-parent');
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }
}

function scrambleTargetsOf(el) {
  const spans = Array.from(el.querySelectorAll(':scope > span'));
  return spans.length ? spans : [el];
}

const glitchObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const targets = scrambleTargetsOf(el);
      targets.forEach((target, i) => {
        const original = target.textContent;
        setTimeout(() => {
          const fx = new TextScramble(target);
          fx.setText(original).then(() => {
            el.classList.add('glitch-settle');
            target.addEventListener('animationend', () => el.classList.remove('glitch-settle'), { once: true });
          });
        }, 150 + i * 120);
      });
      glitchObserver.unobserve(el);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.glitch').forEach((el) => glitchObserver.observe(el));

// --- matrix-style falling character rain, very low opacity backdrop ---
(function initMatrixRain() {
  const canvas = document.getElementById('matrixRain');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const glyphs = '01アイウエオカキクケコサシスセソタチツテト';
  let columns, drops, fontSize = 16;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    columns = Math.floor(canvas.width / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.random() * -40);
  }
  resize();
  window.addEventListener('resize', resize);

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = fontSize + 'px "Share Tech Mono", monospace';
    for (let i = 0; i < columns; i++) {
      const char = glyphs[Math.floor(Math.random() * glyphs.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillStyle = 'rgba(59, 130, 246, 0.55)';
      ctx.fillText(char, x, y);
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.55;
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

// --- growing colored timeline line, synced to scroll + active section color/glow ---
const timelineLine = document.querySelector('.timeline-line');
const timelineProgress = document.getElementById('timelineProgress');
const blocks = Array.from(document.querySelectorAll('.block'));
const colorMap = { blue: '#3b82f6', red: '#ef4444', green: '#22c55e', amber: '#f5a524' };

function updateTimeline() {
  if (!timelineLine || !timelineProgress) return;
  const lineRect = timelineLine.getBoundingClientRect();
  const lineTop = lineRect.top + window.scrollY;
  const lineHeight = timelineLine.offsetHeight;
  const scrollPos = window.scrollY + window.innerHeight * 0.4;
  let height = scrollPos - lineTop;
  height = Math.max(0, Math.min(lineHeight, height));
  timelineProgress.style.height = height + 'px';

  let activeColor = 'blue';
  let activeBlock = null;
  const viewportCenter = window.scrollY + window.innerHeight * 0.4;
  for (const block of blocks) {
    const top = block.offsetTop;
    if (viewportCenter >= top) {
      activeColor = block.dataset.markerColor || 'blue';
      activeBlock = block;
    }
  }
  timelineProgress.style.background = colorMap[activeColor] || colorMap.blue;
  blocks.forEach((b) => b.classList.toggle('active', b === activeBlock));
}
document.addEventListener('scroll', updateTimeline, { passive: true });
window.addEventListener('resize', updateTimeline);
updateTimeline();

// cookie modal
const pill = document.getElementById('cookiePill');
const modal = document.getElementById('cookieModal');
const consentKey = 'cookie-consent';

function openModal() { modal.classList.add('open'); }
function closeModal() { modal.classList.remove('open'); }

pill?.addEventListener('click', openModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

document.getElementById('cookieAll')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: true, marketing: true }));
  closeModal();
});
document.getElementById('cookieNecessary')?.addEventListener('click', () => {
  localStorage.setItem(consentKey, JSON.stringify({ analytics: false, marketing: false }));
  closeModal();
});

if (!localStorage.getItem(consentKey)) {
  setTimeout(openModal, 800);
}
