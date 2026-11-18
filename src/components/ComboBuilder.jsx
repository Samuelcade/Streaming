import { useState } from 'react';
import { formatPrice, platforms, whatsappLink } from '../data/platforms.js';

export default function ComboBuilder() {
  const [selected, setSelected] = useState([]);
  const options = platforms.filter((platform) => platform.combo);
  const chosen = options.filter((platform) => selected.includes(platform.name));
  const subtotal = chosen.reduce((sum, platform) => sum + (platform.comboPrice ?? platform.price), 0);
  const discount = chosen.length >= 4 ? 0.15 : chosen.length === 3 ? 0.10 : chosen.length === 2 ? 0.05 : 0;
  const total = Math.round(subtotal * (1 - discount));
  const message = `Hola, quiero armar este combo:\n\n${chosen.map((platform) => platform.name).join('\n')}\n\nTotal del combo: ${formatPrice(total)}`;

  function toggle(name) {
    setSelected((current) => current.includes(name) ? current.filter((item) => item !== name) : [...current, name]);
  }

  return <section className="combo-section" id="combo"><div className="container">
    <div className="section-header"><span className="section-tag">Personaliza tu acceso</span><h2>Arma tu combo</h2><p>Selecciona tus plataformas favoritas y obtén mejor precio por combo.</p></div>
    <div className="combo-box glass-card">
      <div className="combo-grid">{options.map((platform) => <label className="combo-option" key={platform.name}>
        <input type="checkbox" checked={selected.includes(platform.name)} onChange={() => toggle(platform.name)} />
        <div className="combo-platform"><div className={`combo-logo ${platform.logo}`} aria-hidden="true" /><span>{platform.shortName || platform.name}</span></div>
      </label>)}</div>
      <div className="combo-summary">
        <div className="combo-summary-card"><p><strong>Plataformas seleccionadas</strong></p><div id="combo-list" aria-live="polite">{chosen.length ? chosen.map((platform) => <div key={platform.name}>• {platform.name}</div>) : 'No has seleccionado plataformas todavía.'}</div></div>
        <div className="combo-pricing"><h3>Total del combo</h3><h2 id="combo-total" aria-live="polite">{formatPrice(total)}</h2><p className="combo-hint">Entre más plataformas selecciones mayor descuento obtienes.</p></div>
        {chosen.length ? <a id="combo-whatsapp" href={whatsappLink(message)} className="btn-primary" target="_blank" rel="noopener noreferrer">Pedir combo por WhatsApp</a> : <span id="combo-whatsapp" className="btn-primary combo-btn-disabled" aria-disabled="true">Pedir combo por WhatsApp</span>}
      </div>
    </div>
  </div></section>;
}
