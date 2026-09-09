import React from 'react';
import { Link } from 'react-router-dom';
import MaisonBenjellounShowcase from './MaisonBenjellounShowcase';
import ArribaSurfShowcase from './ArribaSurfShowcase';
import Seo from './Seo';
import { useLanguage } from './language-state';

const getStrengths = (tr) => [
  [tr('Direction artistique', 'Art direction', 'Dirección artística'), tr('Un portfolio éditorial qui laisse toute la place aux œuvres et à leur matière.', 'An editorial portfolio that gives the artwork and its texture centre stage.', 'Un portfolio editorial que da todo el protagonismo a las obras y su materia.')],
  [tr('Immersion 3D', '3D immersion', 'Inmersión 3D'), tr('Une profondeur interactive pensée avec Three.js et WebGL, directement inspirée de la galerie.', 'Interactive depth built with Three.js and WebGL, inspired by the physical gallery.', 'Una profundidad interactiva creada con Three.js y WebGL e inspirada en la galería.')],
  ['Shopify Headless', tr('Une boutique administrable depuis un téléphone pour ajouter les produits et gérer les commandes simplement.', 'A store manageable from a phone, making products and orders simple to run.', 'Una tienda gestionable desde el móvil para añadir productos y administrar pedidos.')],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function StrengthVisual({ index }) {
  if (index === 0) {
    return <div className="relative mt-12 h-24 overflow-hidden border-y border-[#071a3b]/15"><span className="absolute -bottom-4 left-0 font-heading text-8xl font-black tracking-[-.1em] text-[#176bff] transition-transform duration-500 ease-out group-hover:translate-x-3">Aa</span><span className="absolute right-0 top-3 h-3 w-3 bg-[#ffd21c]" /></div>;
  }
  if (index === 1) {
    return <div className="relative mt-12 h-24 overflow-hidden border-y border-[#071a3b]/15"><span className="absolute left-2 top-1/2 h-16 w-16 -translate-y-1/2 rounded-full border border-[#176bff] transition-transform duration-500 ease-out group-hover:scale-125" /><span className="absolute left-10 top-1/2 h-12 w-12 -translate-y-1/2 rounded-full bg-[#176bff] mix-blend-multiply" /><span className="absolute left-[4.5rem] top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#ffd21c] mix-blend-multiply" /></div>;
  }
  return <div className="relative mt-12 flex h-24 items-end gap-2 overflow-hidden border-y border-[#071a3b]/15 px-2 pb-3"><span className="h-10 flex-1 bg-[#071a3b] transition-[height] duration-500 ease-out group-hover:h-16" /><span className="h-16 flex-1 bg-[#176bff] transition-[height] duration-500 ease-out group-hover:h-12" /><span className="h-7 flex-1 bg-[#ffd21c] transition-[height] duration-500 ease-out group-hover:h-20" /></div>;
}

function References() {
  const { translate: tr } = useLanguage();
  const strengths = getStrengths(tr);
  return (
    <div className="references-page page-enter min-h-screen bg-white text-[#071a3b]">
      <Seo title={tr('Références et projets digitaux — KODELUME', 'Digital work and case studies — KODELUME', 'Proyectos digitales y casos de éxito — KODELUME')} description={tr('Découvrez les produits conçus par KODELUME, dont Maison Benjelloun : une galerie immersive développée avec Three.js, WebGL et Shopify Headless.', 'Explore digital products built by KODELUME, including Maison Benjelloun, an immersive Three.js and Shopify Headless gallery.', 'Descubre productos creados por KODELUME, incluida Maison Benjelloun, una galería inmersiva con Three.js y Shopify Headless.')} path="/references" />

      <section className="overflow-hidden px-5 pb-20 pt-14 sm:px-10 sm:pb-28 sm:pt-20 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="flex items-center justify-center gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6818] lg:justify-start"><span className="h-2.5 w-2.5 bg-[#f4be32]" aria-hidden="true" />{tr('Portfolio / Projet sélectionné', 'Portfolio / Selected work', 'Portfolio / Proyecto seleccionado')}</p>
              <h1 className="mt-7 max-w-3xl font-heading text-[clamp(3.15rem,14vw,8rem)] font-extrabold leading-[0.86] tracking-[-0.065em] lg:leading-[0.82]">
                {tr('Des produits', 'Digital products', 'Productos')}<br /><span className="text-[#8a6818]">{tr('à explorer.', 'worth exploring.', 'para explorar.')}</span>
              </h1>
            </div>
            <p className="mx-auto max-w-xl pb-2 text-center text-base font-medium leading-7 text-[#274363]/60 sm:text-xl sm:leading-8 lg:mx-0 lg:text-left">
              {tr('Design, technologie et interaction réunis pour créer des expériences numériques qui donnent envie de rester, regarder et comprendre.', 'Design, technology and interaction come together in digital experiences people want to explore and understand.', 'Diseño, tecnología e interacción se unen en experiencias digitales que invitan a explorar y comprender.')}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 px-3 pb-24 sm:space-y-12 sm:px-5 sm:pb-32">
        <article className="mx-auto max-w-[1440px] overflow-hidden rounded-xl bg-[#eee9df] p-3 sm:p-5 lg:p-8">
          <MaisonBenjellounShowcase />

          <div className="grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-16">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">01 / Art contemporain / Paris</p>
              <h2 className="mt-5 font-heading text-5xl font-black leading-[0.88] tracking-[-0.06em] text-[#11110f] sm:text-7xl">Maison<br />Benjelloun</h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-base font-medium leading-7 text-black/58 sm:text-lg">
                {tr('Une galerie digitale immersive dédiée au portrait contemporain. L’expérience associe une mise en espace 3D développée avec Three.js à Shopify en headless, pour permettre au client de gérer sa boutique et d’ajouter ses produits depuis son téléphone.', 'An immersive digital gallery for contemporary portraiture. A custom Three.js space meets headless Shopify, so the client can manage products and orders directly from a phone.', 'Una galería digital inmersiva dedicada al retrato contemporáneo. Un espacio 3D con Three.js se conecta a Shopify headless para gestionar productos y pedidos desde el móvil.')}
              </p>
              <p className="border-y border-black/10 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-black/50">Three.js / WebGL / Shopify Headless / React / UX/UI</p>
              <div className="flex flex-col items-start gap-3 sm:flex-row">
                <Link to="/projects/maison-benjelloun" className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#11110f] px-6 py-4 text-xs font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#2447d8]">
                  {tr("Voir l’étude de cas", 'View case study', 'Ver caso de éxito')} <ArrowIcon />
                </Link>
                <a href="https://www.maisonbenjelloun.fr/" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-lg border border-black/15 px-6 py-4 text-xs font-extrabold text-black transition hover:bg-white/60">
                  {tr('Visiter le site', 'Visit website', 'Visitar sitio')} <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </article>

        <article className="mx-auto max-w-[1440px] overflow-hidden bg-[#17140f] p-3 text-white sm:p-5 lg:p-8">
          <ArribaSurfShowcase />
          <div className="grid gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-16">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8a1d]">02 / Travel tech / Lombok</p>
              <h2 className="mt-5 font-heading text-5xl font-black leading-[0.88] tracking-[-0.06em] sm:text-7xl">Arriba<br />Surf Camp</h2>
            </div>
            <div className="flex flex-col justify-between gap-8">
              <p className="text-base font-medium leading-7 text-white/58 sm:text-lg">{tr('Une plateforme multilingue qui transforme une vision de surf camp en produit démontrable : narration de marque, programme du séjour et parcours de réservation complet pour préparer la recherche d’investisseurs puis l’ouverture commerciale.', 'A multilingual platform turning a surf-camp vision into a demonstrable product: brand story, trip programme and complete booking flow for investor outreach and commercial launch.', 'Una plataforma multilingüe que convierte la visión de un surf camp en un producto demostrable: marca, programa y reserva completa para inversores y lanzamiento comercial.')}</p>
              <p className="border-y border-white/10 py-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-white/45">React / Motion / i18n / Booking UX / SEO / PWA</p>
              <div className="flex flex-col items-start gap-3 sm:flex-row">
                <Link to="/projects/arriba-surf-camp" className="inline-flex items-center justify-center gap-3 bg-[#ff8a1d] px-6 py-4 text-xs font-extrabold text-[#17140f] transition hover:-translate-y-1 hover:bg-white">{tr("Voir l’étude de cas", 'View case study', 'Ver caso de éxito')} <ArrowIcon /></Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="bg-[#f3f1eb] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="max-w-3xl">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#176bff]">{tr('Ce projet en un regard', 'Project at a glance', 'El proyecto de un vistazo')}</p>
            <h2 className="mt-6 font-heading text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">{tr('Une galerie pensée comme une expérience.', 'A gallery designed as an experience.', 'Una galería concebida como experiencia.')}</h2>
          </div>
          <div className="mt-14 grid border-t border-[#071a3b]/20 lg:grid-cols-3">
            {strengths.map(([title, description], index) => (
              <article key={title} className="group border-b border-[#071a3b]/20 py-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0">
                <span className="font-mono text-[10px] font-bold text-[#176bff]">0{index + 1}</span>
                <h3 className="mt-12 font-heading text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-4 text-sm font-medium leading-6 text-[#274363]/60">{description}</p>
                <StrengthVisual index={index} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white via-[#faf9f5] to-[#f3f1eb] px-5 pb-36 pt-24 text-center sm:px-10 sm:pb-44 sm:pt-32 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#176bff]">{tr('Prochaine réalisation', 'Next project', 'Próximo proyecto')}</p>
          <h2 className="mt-6 font-heading text-5xl font-extrabold leading-[0.94] tracking-[-0.055em] sm:text-7xl">{tr('Votre projet mérite sa propre scène.', 'Your project deserves its own stage.', 'Tu proyecto merece su propio escenario.')}</h2>
          <Link to="/reserver-un-appel" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#081a33] px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#f4be32] hover:text-[#081a33]">
            {tr('Démarrer un projet', 'Start a project', 'Iniciar un proyecto')} <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default References;
