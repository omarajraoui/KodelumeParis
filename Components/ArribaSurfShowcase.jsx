import React from 'react';
import { useLanguage } from './language-state';

function ArribaSurfShowcase({ compact = false }) {
  const { translate: tr } = useLanguage();

  return (
    <figure className={`arriba-browser ${compact ? 'arriba-browser--compact' : ''}`}>
      <header className="arriba-browser__site-nav" aria-label={tr('Aperçu de la navigation Arriba', 'Arriba navigation preview', 'Vista de la navegación Arriba')}>
        <nav className="arriba-browser__site-nav-left"><span>Home</span><span>Arriba Experience <b>⌄</b></span></nav>
        <img src="/arriba/logo.png" alt="Arriba Surf Camp" />
        <nav className="arriba-browser__site-nav-right">
          <span>Surf Camp <b>⌄</b></span>
          <span className="arriba-browser__languages"><i>ESP</i><i className="is-active">ENG</i><i>FR</i><i>NL</i><i>ID</i></span>
          <span className="arriba-browser__book">Book Now</span>
        </nav>
      </header>

      <div className="arriba-browser__viewport">
        <img
          src="/arriba/homepage-1200.jpg"
          alt={tr("Page d'accueil Arriba Surf Camp avec fond vidéo océan, titre orange et module de réservation", 'Arriba Surf Camp homepage with ocean video, orange headline and booking module', 'Página de Arriba Surf Camp con vídeo del océano, titular naranja y módulo de reservas')}
          loading={compact ? 'lazy' : 'eager'}
          decoding="async"
        />
        <figcaption><span>{tr('Interface réelle', 'Real interface', 'Interfaz real')}</span>{tr('Hero vidéo · Réservation immédiate', 'Video hero · Direct booking', 'Vídeo hero · Reserva directa')}</figcaption>
      </div>

      <footer className="arriba-browser__footer">
        <span>Booking UX</span><span>Travel product</span><span>{tr('6 langues', '6 languages', '6 idiomas')}</span><span>{tr('Prototype investisseur', 'Investor prototype', 'Prototipo para inversores')}</span>
      </footer>
    </figure>
  );
}

export default ArribaSurfShowcase;
