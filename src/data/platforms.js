export const platforms = [
  { name: 'Netflix', logo: 'netflix', color: '#E50914', price: 13000, description: 'Series, películas y documentales en calidad 4K.', combo: true, popular: true },
  { name: 'Disney+', logo: 'disney', color: '#113CCF', price: 10000, description: 'Marvel, Star Wars, Pixar y contenido original exclusivo.', combo: true },
  { name: 'HBO Max', logo: 'hbo', color: '#9B59B6', price: 9000, description: 'Estrenos exclusivos, series de culto y cine independiente.', combo: true },
  { name: 'Spotify', logo: 'spotify', color: '#1DB954', price: 10000, description: 'Música sin límites, podcasts y sin anuncios en todos tus dispositivos.', combo: true },
  { name: 'Prime Video', logo: 'prime', color: '#00A8E1', price: 9000, description: 'Producciones Amazon Originals y contenido de estreno global.', combo: true },
  { name: 'Apple TV+', logo: 'apple', color: '#ffffff', price: 9000, description: 'Originals premiados y producciones de alta calidad Apple.' },
  { name: 'YouTube Premium', logo: 'youtube', color: '#FF0000', price: 10000, description: 'Disfruta videos sin anuncios, reproducción en segundo plano y acceso premium.', combo: true, shortName: 'YouTube' },
  { name: 'Crunchyroll', logo: 'crunchyroll', color: '#F47521', price: 9000, comboPrice: 8000, description: 'Mira anime sin límites, estrenos simultáneos y contenido exclusivo en alta calidad.', combo: true },
  { name: 'ViX Premium', logo: 'vix', color: '#FFD100', price: 9000, description: 'Series, novelas, películas y deportes en español con acceso premium y exclusivo.', shortName: 'ViX' },
  { name: 'Plex', logo: 'plex', color: '#E5A00D', price: 9000, description: 'Organiza y disfruta películas, series y canales en una sola plataforma moderna.' },
  { name: 'IPTV', logo: 'iptv', color: '#00E0FF', price: 10000, description: 'Accede a canales en vivo, deportes, películas y entretenimiento desde un solo lugar.', combo: true },
];

export const formatPrice = (price) => `$${price.toLocaleString('es-CO')}`;
export const whatsappLink = (message) => `https://wa.me/573249475086?text=${encodeURIComponent(message)}`;
