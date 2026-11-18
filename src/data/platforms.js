export const platforms = [
  { name: 'Netflix', logo: 'netflix', color: '#E50914', price: 13000, description: 'Series, películas y documentales en calidad 4K.', combo: true, popular: true },
  { name: 'Disney+', logo: 'disney', color: '#113CCF', price: 10000, description: 'Marvel, Star Wars, Pixar y contenido original exclusivo.', combo: true },
  { name: 'HBO Max', logo: 'hbo', color: '#9B59B6', price: 9000, description: 'Estrenos exclusivos, series de culto y cine independiente.', combo: true },
  { name: 'Prime Video', logo: 'prime', color: '#00A8E1', price: 9000, description: 'Producciones Amazon Originals y contenido de estreno global.', combo: true },
  { name: 'Apple TV+', logo: 'apple', color: '#ffffff', price: 9000, description: 'Originals premiados y producciones de alta calidad Apple.' },
  { name: 'Crunchyroll', logo: 'crunchyroll', color: '#F47521', price: 9000, comboPrice: 8000, description: 'Mira anime sin límites, estrenos simultáneos y contenido exclusivo en alta calidad.', combo: true },
  { name: 'ViX Premium', logo: 'vix', color: '#FFD100', price: 9000, description: 'Series, novelas, películas y deportes en español con acceso premium y exclusivo.', shortName: 'ViX' },
  { name: 'Plex', logo: 'plex', color: '#E5A00D', price: 9000, description: 'Organiza y disfruta películas, series y canales en una sola plataforma moderna.' },
  { name: 'ChatGPT Plus', logo: 'chatgpt', color: '#10A37F', price: 18000, description: 'Acceso a ChatGPT Plus para 1 dispositivo.', combo: true, purchaseName: 'ChatGPT Plus para 1 dispositivo' },
];

export const formatPrice = (price) => `$${price.toLocaleString('es-CO')}`;
export const whatsappLink = (message) => `https://wa.me/573249475086?text=${encodeURIComponent(message)}`;
