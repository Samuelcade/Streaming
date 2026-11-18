import ComboBuilder from './components/ComboBuilder.jsx';
import Hero from './components/Hero.jsx';
import { Benefits, Footer, Header, Trust } from './components/PageSections.jsx';
import PlatformCatalog from './components/PlatformCatalog.jsx';
import { whatsappLink } from './data/platforms.js';

export default function App() {
  const contact = whatsappLink('Hola, quiero solicitar acceso');
  return <><Header contact={contact} /><main><Hero contact={contact} /><PlatformCatalog /><ComboBuilder /><Benefits /><Trust /></main><Footer contact={contact} /></>;
}
