import { formatPrice, platforms, whatsappLink } from '../data/platforms.js';

export default function PlatformCatalog() {
  return <section className="platforms" id="plataformas"><div className="container">
    <div className="section-header"><span className="section-tag">Catálogo exclusivo</span><h2>Elige tu acceso premium</h2><p>Todas las plataformas que amas, a precios que tienen sentido.</p></div>
    <div className="platforms-grid">{platforms.map((platform) => {
      const message = `Hola, quiero comprar ${platform.purchaseName || platform.name}. Vi que está disponible desde ${formatPrice(platform.price)}. ¿Me das más información, por favor?`;
      return <article className="platform-card" key={platform.name} style={{ '--card-color': platform.color }}>
        <div className="pc-glow" style={{ background: platform.color }} />
        <div className="pc-top"><div className="pc-logo-wrap"><span className="platform-wordmark" style={{ color: platform.color }}>{platform.shortName || platform.name}</span></div>{platform.popular && <div className="pc-badge">Más popular</div>}</div>
        <h3>{platform.name}</h3><p className="pc-desc">{platform.description}</p>
        <div className="pc-price"><span className="price-label">Desde</span><span className="price-value">{formatPrice(platform.price)}</span><span className="price-period">/ mes</span></div>
        <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="pc-btn">Comprar ahora</a>
      </article>;
    })}</div>
  </div></section>;
}
