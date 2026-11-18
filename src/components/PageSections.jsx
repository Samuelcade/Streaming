import { useEffect, useState } from 'react';

const benefits = [
  ['⚡', 'Activación rápida', 'Tu acceso listo en minutos desde que confirmas. Sin esperas innecesarias.'],
  ['🔐', 'Cuentas seguras', 'Accesos verificados y seguros. Protección total de tus datos personales.'],
  ['🛟', 'Soporte 24/7', 'Atención directa por WhatsApp. Siempre disponibles para ayudarte.'],
  ['📱', 'Multi-dispositivo', 'Accede desde tu celular, TV, laptop o tablet sin restricciones.'],
  ['♻️', 'Renovación sencilla', 'Un mensaje y tu acceso continúa. Sin trámites ni complicaciones.'],
  ['💎', 'Precio exclusivo', 'Acceso premium a una fracción del precio oficial. Calidad real.'],
];

function Logo() { return <div className="logo"><span className="logo-icon">◈</span><span className="logo-text">Kivoo<span className="logo-accent"> Streaming</span></span></div>; }

export function Header({ contact }) {
  const [scrolled, setScrolled] = useState(window.scrollY > 60);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <><a href={contact} target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Contactar por WhatsApp"><span>WhatsApp</span></a>
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar"><div className="nav-inner"><Logo /><div className="nav-links"><a href="#plataformas">Plataformas</a><a href="#beneficios">Beneficios</a><a href="#confianza">Clientes</a></div><a href={contact} target="_blank" rel="noopener noreferrer" className="nav-cta">Solicitar acceso</a></div></nav></>;
}

export function Benefits() {
  return <section className="benefits" id="beneficios"><div className="container"><div className="section-header"><span className="section-tag">¿Por qué elegirnos?</span><h2>Todo lo que necesitas,<br />sin complicaciones</h2></div><div className="benefits-grid">{benefits.map(([icon, title, text]) => <div className="benefit-card" key={title}><div className="benefit-icon">{icon}</div><h4>{title}</h4><p>{text}</p></div>)}</div></div></section>;
}

export function Trust() {
  const stats = [['1000', '+', 'Clientes activos'], ['11', '', 'Plataformas disponibles'], ['5', '★', 'Valoración promedio'], ['3', 'min', 'Tiempo de activación']];
  return <section className="trust" id="confianza"><div className="trust-bg-glow" /><div className="container"><div className="trust-inner">{stats.map(([number, suffix, label]) => <div className="trust-stat" key={label}><span className="stat-num">{number}</span><span className="stat-plus">{suffix}</span><span className="stat-label">{label}</span></div>)}</div></div></section>;
}

export function Footer({ contact }) {
  return <><section className="cta-final"><div className="cta-glow-1" /><div className="cta-glow-2" /><div className="container"><div className="cta-inner"><span className="section-tag">Acceso limitado disponible</span><h2>Empieza hoy mismo</h2><p>Miles de personas ya disfrutan de sus plataformas favoritas a precios inteligentes. Tu turno es ahora.</p><a href={contact} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">Solicitar acceso ahora</a><p className="cta-note">Respuesta en minutos · Sin compromisos · 100% confiable</p></div></div></section>
    <footer className="footer"><div className="container"><div className="footer-inner"><Logo /><p className="footer-copy">© 2025 Kivoo Streaming. Todos los derechos reservados.</p><a href={contact} target="_blank" rel="noopener noreferrer" className="footer-wa">WhatsApp</a></div></div></footer></>;
}
