/* =============================================
   StreamVault — Main Script
   ============================================= */

/* ------- Navbar scroll effect ------- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ------- Scroll Reveal ------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

/* ------- Animated counters ------- */
function animateCounter(el) {
  const target = parseInt(el.getAttribute('data-target'));
  const duration = 1800;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);
    el.textContent = current;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
      entry.target.classList.add('counted');
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-num[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ------- Platform cards dynamic glow color ------- */
document.querySelectorAll('.platform-card').forEach(card => {
  const color = card.getAttribute('data-color');
  if (color) {
    card.style.setProperty('--card-color', color);
    const glow = card.querySelector('.pc-glow');
    if (glow) glow.style.background = color;
  }
});

/* ------- Particle Canvas ------- */
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
let animFrame;

function resize() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.radius = Math.random() * 1.5 + 0.5;
    this.alpha = Math.random() * 0.5 + 0.1;
    this.color = Math.random() > 0.5
      ? `rgba(124, 107, 255, ${this.alpha})`
      : `rgba(167, 139, 250, ${this.alpha * 0.7})`;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function initParticles() {
  resize();
  particles = [];
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 12000), 80);
  for (let i = 0; i < count; i++) particles.push(new Particle());
}

function drawConnections() {
  const maxDist = 130;
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < maxDist) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        const alpha = (1 - dist / maxDist) * 0.08;
        ctx.strokeStyle = `rgba(124, 107, 255, ${alpha})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  animFrame = requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener('resize', () => {
  cancelAnimationFrame(animFrame);
  initParticles();
  animate();
});

/* ------- Parallax effect on hero glow orbs ------- */
const glows = document.querySelectorAll('.hero-glow');
window.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  glows.forEach((g, i) => {
    const factor = (i + 1) * 8;
    g.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
  });
});

/* ------- Hero cards tilt on hover ------- */
document.querySelectorAll('.hero-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(400px) rotateX(${-y * 0.08}deg) rotateY(${x * 0.08}deg) translateY(-8px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ------- Platform card 3D tilt ------- */
document.querySelectorAll('.platform-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    const tiltX = -(y / rect.height) * 10;
    const tiltY = (x / rect.width) * 10;
    card.style.transform = `translateY(-8px) perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.5s cubic-bezier(.22,1,.36,1)';
  });
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'transform 0.1s ease, border-color 0.4s ease, box-shadow 0.4s ease';
  });
});

/* ------- Button click ripple ------- */
document.querySelectorAll('.btn-primary, .pc-btn, .nav-cta').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255,255,255,0.2);
      top: ${e.clientY - rect.top - size / 2}px;
      left: ${e.clientX - rect.left - size / 2}px;
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out forwards;
      pointer-events: none;
    `;
    if (getComputedStyle(this).position === 'static') {
      this.style.position = 'relative';
    }
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
  });
});

/* Add ripple animation */
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes rippleEffect {
    to { transform: scale(1); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

/* ------- Smooth scroll for anchor links ------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ------- Hero entrance animation ------- */
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 200 + i * 150);
  });
});

/* ------- Botón WhatsApp dinámico ------- */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pc-btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      const producto = this.dataset.producto || 'la plataforma';
      const precio = this.dataset.precio || '';
      const telefono = '573015518564';

      const mensaje = `Hola, quiero comprar ${producto}. Vi que está disponible desde ${precio}. ¿Me das más información, por favor?`;
      const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;

      window.location.href = url;
    });
  });
});

