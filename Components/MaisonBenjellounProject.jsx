import React from 'react';
import { Link } from 'react-router-dom';
import MaisonBenjellounShowcase from './MaisonBenjellounShowcase';
import Seo from './Seo';
import { useLanguage } from './language-state';

const getProjectDetails = (tr) => [[tr('Rôle', 'Role', 'Rol'), tr('Conception & développement', 'Design & development', 'Diseño y desarrollo')], [tr('Commerce', 'Commerce', 'Comercio'), 'Shopify Headless'], [tr('Technologies', 'Technologies', 'Tecnologías'), 'Three.js · WebGL · React'], [tr('Administration', 'Management', 'Administración'), tr('Pensée pour le mobile', 'Mobile-first', 'Pensada para móvil')]];

const getCraftItems = (tr) => [
  ['01', tr('Direction digitale', 'Digital direction', 'Dirección digital'), tr('Un langage éditorial sobre qui laisse les portraits, les couleurs et la matière occuper toute la scène.', 'A restrained editorial language that lets portraits, colour and texture own the stage.', 'Un lenguaje editorial sobrio que da protagonismo a retratos, color y materia.')],
  ['02', tr('Narration au scroll', 'Scroll narrative', 'Narrativa al scroll'), tr('Une visite progressive pensée comme une exposition : entrée, manifeste, œuvres choisies et archives.', 'A progressive visit shaped like an exhibition: entrance, manifesto, selected works and archive.', 'Una visita progresiva como exposición: entrada, manifiesto, obras seleccionadas y archivo.')],
  ['03', 'Commerce headless', tr("Shopify pilote le catalogue et la boutique tandis que l’expérience front-end reste totalement sur mesure.", 'Shopify runs the catalogue and store while the front-end remains entirely custom.', 'Shopify gestiona el catálogo y la tienda, con un front-end totalmente a medida.')],
  ['04', tr('Profondeur 3D', '3D depth', 'Profundidad 3D'), tr("Des mouvements Three.js et WebGL qui donnent du relief à l’expérience sans prendre le dessus sur les œuvres.", 'Three.js and WebGL motion adds depth without overpowering the artwork.', 'El movimiento Three.js y WebGL aporta profundidad sin eclipsar las obras.')],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ShopifyMark() {
  return <a className="shopify-lockup" href="https://www.shopify.com/" target="_blank" rel="noreferrer" aria-label="Shopify"><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg" alt="Shopify" loading="lazy" decoding="async" /></a>;
}

function CraftVisual({ number }) {
  const visuals = {
    '01': <><rect x="10" y="10" width="78" height="50" rx="3" /><path d="M18 20h62M18 31h26M18 40h38M18 49h18" /><circle cx="97" cy="23" r="8" /><path d="m93 23 3 3 5-6" /></>,
    '02': <><path d="M10 50c14-25 26 17 40-7s25 15 43-20" /><circle cx="10" cy="50" r="4" /><circle cx="50" cy="43" r="4" /><circle cx="93" cy="23" r="4" /><path d="M10 65h84" /></>,
    '03': <><path d="M12 55V18h72v37Z" /><path d="M12 27h72M22 22h2M29 22h2M40 39h15M40 46h25" /><path d="m65 38 7 7-7 7" /></>,
    '04': <><circle cx="47" cy="39" r="25" /><path d="M47 14v50M22 39h50M30 22c10 8 24 8 34 0M30 56c10-8 24-8 34 0" /><circle cx="47" cy="39" r="4" /></>,
  };
  return <div className="craft-visual" aria-hidden="true"><svg viewBox="0 0 110 72">{visuals[number]}</svg><span>{number}</span></div>;
}

function MaisonBenjellounProject() {
  const { translate: tr } = useLanguage();
  const projectDetails = getProjectDetails(tr);
  const craftItems = getCraftItems(tr);
  return (
    <div className="case-study-page page-enter bg-[#eee9df] text-[#11110f]">
      <Seo title={tr('Maison Benjelloun : galerie 3D et Shopify Headless — KODELUME', 'Maison Benjelloun: 3D gallery and Headless Shopify — KODELUME', 'Maison Benjelloun: galería 3D y Shopify Headless — KODELUME')} description={tr('Étude de cas Maison Benjelloun : une galerie digitale immersive développée avec Three.js et WebGL, connectée à Shopify Headless pour une gestion mobile.', 'Maison Benjelloun case study: an immersive Three.js and WebGL gallery connected to headless Shopify for mobile management.', 'Caso Maison Benjelloun: galería inmersiva con Three.js y WebGL conectada a Shopify Headless.')} path="/projects/maison-benjelloun" type="article" schema={{ '@context': 'https://schema.org', '@type': 'CreativeWork', name: 'Maison Benjelloun — immersive digital gallery', creator: { '@type': 'Organization', name: 'KODELUME' }, url: 'https://kodelume.com/projects/maison-benjelloun', about: ['Three.js', 'WebGL', 'Shopify Headless', 'E-commerce'] }} />

      <section className="px-5 pb-20 pt-12 sm:px-10 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
            <Link to="/references" className="transition hover:text-black">← {tr('Retour aux références', 'Back to work', 'Volver a proyectos')}</Link>
            <span>{tr('Étude de cas', 'Case study', 'Caso de éxito')} / 2026</span>
          </div>

          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#2447d8]">Art · Shopify Headless · {tr('Expérience 3D','3D experience','Experiencia 3D')}</p>
              <h1 className="mt-6 font-heading text-[clamp(3.15rem,14vw,8.5rem)] font-black leading-[0.82] tracking-[-0.068em] lg:leading-[0.77]">
                Maison<br />Benjelloun
              </h1>
              <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-7 text-black/58 sm:text-xl sm:leading-8 lg:mx-0">
                {tr("Une maison d’art parisienne transformée en galerie digitale vivante, où le mouvement, la profondeur et la couleur prolongent l’émotion des portraits.", 'A Parisian art house transformed into a living digital gallery, where motion, depth and colour extend the emotion of each portrait.', 'Una casa de arte parisina transformada en galería digital viva, donde movimiento, profundidad y color prolongan la emoción de cada retrato.')}
              </p>
              <a
                href="https://www.maisonbenjelloun.fr/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#11110f] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-1 hover:bg-[#2447d8]"
              >
                {tr('Visiter le site', 'Visit website', 'Visitar sitio')} <ArrowIcon />
              </a>
            </div>
            <MaisonBenjellounShowcase compact />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f6f2e9] px-5 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projectDetails.map(([label, value]) => (
            <div key={label}>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">{label}</p>
              <p className="mt-2 text-sm font-extrabold">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-10 sm:py-24 lg:px-16">
        <div className="shopify-case mx-auto grid max-w-[1440px] overflow-hidden rounded-2xl lg:grid-cols-[0.55fr_1.45fr]">
          <div className="shopify-case__brand">
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">{tr('Le besoin client', 'Client need', 'Necesidad del cliente')}</span>
            <ShopifyMark />
            <small>{tr('COMMERCE HEADLESS','HEADLESS COMMERCE','COMERCIO HEADLESS')}</small>
          </div>
          <div className="shopify-case__copy p-7 sm:p-10 lg:p-14">
            <h2 className="max-w-4xl font-heading text-3xl font-black leading-[1.04] tracking-[-0.045em] sm:text-5xl">
              {tr('Gérer toute la boutique et ajouter de nouvelles œuvres directement depuis son téléphone.', 'Manage the entire store and add new artwork directly from a phone.', 'Gestionar toda la tienda y añadir nuevas obras directamente desde el móvil.')}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-black/55 sm:text-lg sm:leading-8">
              {tr('Shopify est utilisé comme back-office headless : le client retrouve une administration familière et mobile pour les produits, les prix, les stocks et les commandes, pendant que le site conserve une direction artistique et une expérience 3D entièrement personnalisées.', 'Shopify acts as the headless back office: the client gets familiar mobile management for products, pricing, stock and orders while the public site keeps its custom art direction and 3D experience.', 'Shopify funciona como back-office headless: el cliente gestiona productos, precios, stock y pedidos desde el móvil, mientras el sitio mantiene una dirección artística y experiencia 3D a medida.')}
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">{tr('Le défi', 'The challenge', 'El reto')}</p>
              <h2 className="mt-5 max-w-lg font-heading text-4xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">{tr('Faire ressentir la matière à travers un écran.', 'Make texture tangible through a screen.', 'Hacer sentir la materia a través de una pantalla.')}</h2>
            </div>
            <div className="grid border-t border-black/15 sm:grid-cols-2">
              {craftItems.map(([number, title, description]) => (
                <article key={number} className="flex min-h-72 flex-col justify-between border-b border-black/15 p-6 sm:border-r sm:even:border-r-0">
                  <span className="font-mono text-[10px] font-bold text-black/30">{number}</span>
                  <div>
                    <CraftVisual number={number} />
                    <h3 className="font-heading text-2xl font-black tracking-[-0.035em]">{title}</h3>
                    <p className="mt-4 text-sm font-medium leading-6 text-black/55">{description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#11110f] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div>
            <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#f0bc2e]">Three.js / WebGL</p>
            <h2 className="mt-7 font-heading text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">{tr('La 3D au service du regard.', '3D in service of the artwork.', 'El 3D al servicio de la mirada.')}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/55">
              {tr("La profondeur accompagne la navigation, révèle les œuvres par plans successifs et crée une sensation d’espace. L’interaction reste fluide, lisible et centrée sur l’art.", 'Depth guides navigation, reveals work in layers and creates a sense of space. Interaction remains fluid, legible and centred on the art.', 'La profundidad guía la navegación, revela las obras por capas y crea sensación de espacio. La interacción sigue fluida y centrada en el arte.')}
            </p>
          </div>
          <MaisonBenjellounShowcase />
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/35">{tr('Votre prochain projet', 'Your next project', 'Tu próximo proyecto')}</p>
          <h2 className="mt-5 font-heading text-5xl font-black leading-[0.9] tracking-[-0.06em] sm:text-7xl">{tr('Créer une expérience qui reste en mémoire.', 'Create an experience people remember.', 'Crear una experiencia memorable.')}</h2>
          <Link to="/reserver-un-appel" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#2447d8] px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#11110f]">
            {tr('Parler de votre projet', 'Discuss your project', 'Hablar de tu proyecto')} <ArrowIcon />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default MaisonBenjellounProject;
