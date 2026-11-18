import { useEffect, useRef } from 'react';
import { platforms } from '../data/platforms.js';

export default function Hero({ contact }) {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let particles = [];
    let frame;
    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      particles = Array.from({ length: Math.min(Math.floor(canvas.width * canvas.height / 12000), 80) }, () => ({
        x: Math.random() * canvas.width, y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 0.5,
      }));
    }
    function draw() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.x = (particle.x + particle.vx + canvas.width) % canvas.width;
        particle.y = (particle.y + particle.vy + canvas.height) % canvas.height;
        context.beginPath(); context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = 'rgba(124, 107, 255, 0.4)'; context.fill();
        particles.slice(index + 1).forEach((other) => {
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);
          if (distance < 130) {
            context.beginPath(); context.moveTo(particle.x, particle.y); context.lineTo(other.x, other.y);
            context.strokeStyle = `rgba(124, 107, 255, ${(1 - distance / 130) * 0.08})`; context.stroke();
          }
        });
      });
      frame = requestAnimationFrame(draw);
    }
    resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('resize', resize); };
  }, []);

  return <section className="hero" id="hero">
    <canvas ref={canvasRef} id="particleCanvas" aria-hidden="true" />
    <div className="hero-glow glow-1" /><div className="hero-glow glow-2" /><div className="hero-glow glow-3" />
    <div className="hero-content">
      <div className="hero-badge"><span className="badge-dot" />Más de 1,000 accesos activos</div>
      <h1 className="hero-title">Accede a tus<br />plataformas favoritas<br /><span className="title-gradient">sin pagar de más</span></h1>
      <p className="hero-sub">Streaming premium a precios inteligentes — activación inmediata, soporte real.</p>
      <div className="hero-actions"><a href={contact} target="_blank" rel="noopener noreferrer" className="btn-primary">Solicitar acceso por WhatsApp</a><a href="#plataformas" className="btn-ghost">Ver plataformas →</a></div>
      <div className="hero-cards">{platforms.map((platform, index) => <div className={`hero-card card-${index + 1} glass-card`} key={platform.name}><div className={`hc-logo ${platform.logo}`} /><span>{platform.shortName || (platform.name === 'Prime Video' ? 'Prime' : platform.name)}</span></div>)}</div>
    </div>
  </section>;
}
