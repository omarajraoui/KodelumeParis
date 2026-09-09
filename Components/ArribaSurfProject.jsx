import React from 'react';
import { Link } from 'react-router-dom';
import ArribaSurfShowcase from './ArribaSurfShowcase';
import Seo from './Seo';
import { useLanguage } from './language-state';

const getProductLayers = (tr) => [
  ['01', tr('Raconter', 'Tell the story', 'Contar'), tr('Une direction solaire et éditoriale qui rend immédiatement perceptibles Lombok, le surf et la vie collective.', 'A warm editorial direction that immediately conveys Lombok, surfing and communal life.', 'Una dirección cálida y editorial que transmite Lombok, el surf y la vida en comunidad.'), tr('Narration · vidéo · galerie', 'Story · video · gallery', 'Narrativa · vídeo · galería')],
  ['02', tr('Convertir', 'Convert', 'Convertir'), tr('Un tunnel structuré autour des semaines disponibles, des voyageurs, du type de chambre et du mode de paiement.', 'A funnel structured around dates, guests, room type and payment method.', 'Un embudo estructurado por fechas, viajeros, habitación y forma de pago.'), tr('Disponibilités · acompte · résumé', 'Availability · deposit · summary', 'Disponibilidad · depósito · resumen')],
  ['03', tr('Rassurer', 'Build confidence', 'Dar confianza'), tr('Le programme, la villa, les chambres et les prestations sont accessibles avant toute décision de réservation.', 'The programme, villa, rooms and services are clear before any booking decision.', 'El programa, la villa, las habitaciones y los servicios están claros antes de reservar.'), tr('Planning · offre · informations', 'Schedule · offer · information', 'Programa · oferta · información')],
  ['04', tr('Déployer', 'Launch', 'Lanzar'), tr('Une expérience responsive, multilingue et indexable, conçue pour servir la recherche d’investisseurs puis la vente.', 'A responsive, multilingual and indexable experience built for investor outreach and future sales.', 'Una experiencia responsive, multilingüe e indexable para captar inversores y vender.'), tr('6 langues · SEO · PWA', '6 languages · SEO · PWA', '6 idiomas · SEO · PWA')],
];

function ArrowIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" /></svg>;
}

function ProductScreens({ tr }) {
  const dates = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return (
    <section className="bg-[#f4f5f7] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e85524]">{tr('Le produit, en situation', 'The product in use', 'El producto en uso')}</p>
          <h2 className="mt-5 font-heading text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">{tr('Du récit à la réservation.', 'From story to booking.', 'De la historia a la reserva.')}</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.12fr_.88fr]">
          <article className="overflow-hidden border border-black/10 bg-white shadow-[0_24px_70px_rgba(28,32,40,.08)]">
            <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 font-mono text-[9px] font-bold uppercase tracking-[.14em] text-black/40"><span>01 / Booking flow</span><span>{tr('Interface réelle', 'Real interface', 'Interfaz real')}</span></div>
            <div className="p-5 sm:p-8">
              <h3 className="text-center font-heading text-2xl font-black sm:text-4xl">{tr('Réservez votre aventure Arriba', 'Book your Arriba adventure', 'Reserva tu aventura Arriba')}</h3>
              <p className="mt-2 text-center text-sm text-black/50">{tr('7 jours inoubliables tout compris dès 500 €', '7 unforgettable all-inclusive days from €500', '7 días inolvidables todo incluido desde 500 €')}</p>
              <div className="mt-8 grid gap-5 md:grid-cols-[1fr_.58fr]">
                <div className="rounded-xl border border-black/10 p-5">
                  <strong className="text-sm">1. {tr('Choisissez vos dates', 'Choose your dates', 'Elige tus fechas')}</strong>
                  <div className="mt-5 overflow-hidden rounded-lg border border-black/15">
                    <div className="grid grid-cols-2 border-b border-black/10 bg-[#f7f7f6] px-3 py-2 text-center text-xs font-black"><span>September 2026</span><span>October 2026</span></div>
                    <div className="grid grid-cols-7 gap-y-3 px-3 py-3 text-center text-[10px] text-black/55">{dates.concat(['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']).map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}{Array.from({ length: 28 }, (_, index) => <span key={index} className={index % 7 === 0 ? 'font-black text-black' : 'text-black/25'}>{index + 1}</span>)}</div>
                  </div>
                </div>
                <div className="rounded-xl border border-black/10 p-5">
                  <strong className="text-sm">{tr('Résumé', 'Summary', 'Resumen')}</strong>
                  <dl className="mt-5 space-y-3 rounded-lg border border-black/10 p-4 text-[11px] text-black/55"><div className="flex justify-between"><dt>{tr('Dates', 'Dates', 'Fechas')}</dt><dd>--- → ---</dd></div><div className="flex justify-between"><dt>{tr('Participants', 'Guests', 'Participantes')}</dt><dd>1</dd></div><div className="flex justify-between"><dt>{tr('Chambre', 'Room', 'Habitación')}</dt><dd>{tr('Mixte', 'Mixed', 'Mixta')}</dd></div><div className="flex justify-between border-t border-black/10 pt-3 font-black text-black"><dt>Total</dt><dd>---</dd></div></dl>
                  <div className="mt-5 rounded-lg bg-[#d1d5dc] px-4 py-3 text-center text-xs font-black text-white">{tr('Confirmer la réservation', 'Confirm booking', 'Confirmar reserva')}</div>
                </div>
              </div>
            </div>
          </article>

          <article className="group relative min-h-[520px] overflow-hidden bg-[#283b24] text-white shadow-[0_24px_70px_rgba(28,32,40,.12)]">
            <img src="https://heroic-moxie-677368.netlify.app/assets/villa-Y5TV4JLP.jpg" alt={tr('Villa Arriba à Lombok', 'Arriba villa in Lombok', 'Villa Arriba en Lombok')} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-black/42" />
            <div className="relative flex min-h-[520px] flex-col items-center justify-center p-8 text-center">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-white/65">02 / Immersive storytelling</span>
              <h3 className="mt-6 font-heading text-5xl font-black leading-[.85] tracking-[-.06em] text-[#ff991e] sm:text-7xl">LE SURF CAMP</h3>
              <p className="mt-6 max-w-xl text-lg font-medium">{tr("28 voyageurs, une villa à Lombok, 7 jours d'immersion totale", '28 travellers, one Lombok villa, 7 days of total immersion', '28 viajeros, una villa en Lombok, 7 días de inmersión total')}</p>
              <p className="mt-4 max-w-lg text-sm leading-6 text-white/70">{tr('Chambres partagées, piscine privée et espaces communs ouverts.', 'Shared rooms, private pool and open communal spaces.', 'Habitaciones compartidas, piscina privada y espacios comunes abiertos.')}</p>
              <span className="mt-12 border-b border-white/55 pb-1 text-[10px] font-bold uppercase tracking-[.18em]">{tr('Découvrir', 'Discover', 'Descubrir')}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ArribaSurfProject() {
  const { translate: tr } = useLanguage();
  const productLayers = getProductLayers(tr);
  return (
    <div className="arriba-project page-enter text-[#17140f]">
      <Seo title={tr('Arriba Surf Camp : plateforme de réservation multilingue — KODELUME', 'Arriba Surf Camp: multilingual booking platform — KODELUME', 'Arriba Surf Camp: plataforma de reservas multilingüe — KODELUME')} description={tr('Étude de cas Arriba Surf Camp : expérience digitale multilingue, présentation du séjour à Lombok et parcours de réservation complet.', 'Arriba Surf Camp case study: multilingual experience and complete booking journey for a stay in Lombok.', 'Caso Arriba Surf Camp: experiencia multilingüe y reserva completa para una estancia en Lombok.')} path="/projects/arriba-surf-camp" type="article" />

      <section className="px-5 pb-20 pt-12 sm:px-10 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-10 flex items-center justify-between gap-4 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/45">
            <Link to="/references">← {tr('Retour aux références', 'Back to work', 'Volver a proyectos')}</Link><span>{tr('Étude de cas', 'Case study', 'Caso de éxito')} / 2026</span>
          </div>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#e85524]">Travel · Booking · {tr('Produit multilingue', 'Multilingual product', 'Producto multilingüe')}</p>
              <h1 className="mt-6 font-heading text-[clamp(3.2rem,14vw,8.5rem)] font-black leading-[0.8] tracking-[-0.075em]">Arriba<br />Surf Camp</h1>
              <p className="mx-auto mt-8 max-w-xl text-base font-medium leading-7 text-black/58 sm:text-xl sm:leading-8 lg:mx-0">{tr('Transformer une vision de surf camp à Lombok en une expérience digitale capable de convaincre des investisseurs et de guider de futurs voyageurs jusqu’à la réservation.', 'Turning a Lombok surf-camp vision into a digital experience that convinces investors and guides future guests through booking.', 'Convertir una visión de surf camp en Lombok en una experiencia digital para convencer a inversores y guiar a los viajeros hasta la reserva.')}</p>
              <p className="mx-auto mt-8 max-w-max border-l-2 border-[#e85524] pl-4 text-left font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-black/45 lg:mx-0">{tr('Prototype privé', 'Private prototype', 'Prototipo privado')}<br /><span className="text-black/75">{tr('Design & développement produit', 'Product design & development', 'Diseño y desarrollo de producto')}</span></p>
            </div>
            <ArribaSurfShowcase compact />
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#fff8e8] px-5 py-8 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[[tr('Produit', 'Product', 'Producto'), tr('Plateforme de réservation', 'Booking platform', 'Plataforma de reservas')], [tr('Expérience', 'Experience', 'Experiencia'), tr('7 jours à Lombok', '7 days in Lombok', '7 días en Lombok')], [tr('International', 'International', 'Internacional'), tr('6 langues', '6 languages', '6 idiomas')], [tr('Stack observée', 'Observed stack', 'Stack observada'), 'React · Motion · i18n']].map(([label, value]) => <div key={label}><p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-black/35">{label}</p><p className="mt-2 text-sm font-extrabold">{value}</p></div>)}
        </div>
      </section>

      <ProductScreens tr={tr} />

      <section className="px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid gap-8 border-b border-black/15 pb-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#e85524]">{tr("Architecture de l’expérience", 'Experience architecture', 'Arquitectura de experiencia')}</p><h2 className="mt-5 font-heading text-4xl font-black leading-[.95] tracking-[-.055em] sm:text-6xl">{tr('Du désir de partir à la réservation.', 'From wanderlust to booking.', 'Del deseo de viajar a la reserva.')}</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-black/55">{tr("Le site ne se limite pas à présenter une destination : il organise progressivement l’information, la confiance et la décision commerciale.", 'The site does more than present a destination: it progressively structures information, trust and the purchase decision.', 'El sitio no se limita a presentar un destino: organiza la información, la confianza y la decisión de compra.')}</p>
          </div>
          <div className="arriba-product-layers">
            {productLayers.map(([number, title, description, output]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div><strong>{output}</strong></article>)}
          </div>
        </div>
      </section>

      <section className="bg-[#17140f] px-5 py-20 text-white sm:px-10 sm:py-28 lg:px-16">
        <div className="mx-auto grid max-w-[1320px] gap-14 lg:grid-cols-[.68fr_1.32fr] lg:items-center">
          <div><p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#ff8a1d]">{tr('Le cœur du produit', 'Product core', 'Núcleo del producto')}</p><h2 className="mt-6 font-heading text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-7xl">{tr('Une réservation sans rupture.', 'A seamless booking flow.', 'Una reserva sin fricción.')}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/55">{tr('Sélection de semaine, participants, chambres, informations voyageurs, paiement et récapitulatif : le parcours transforme une offre complexe en décisions successives et lisibles.', 'Dates, guests, rooms, traveller details, payment and summary turn a complex offer into a clear sequence of decisions.', 'Fechas, viajeros, habitaciones, datos, pago y resumen convierten una oferta compleja en decisiones claras.')}</p></div>
          <div className="arriba-booking-flow" aria-label="Parcours de réservation Arriba Surf Camp">
            {[tr('Semaine', 'Dates', 'Fechas'), tr('Voyageurs', 'Guests', 'Viajeros'), tr('Chambre', 'Room', 'Habitación'), tr('Paiement', 'Payment', 'Pago'), tr('Confirmation', 'Confirmation', 'Confirmación')].map((step, index) => <div key={step}><span>0{index + 1}</span><i aria-hidden="true" /><strong>{step}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 text-center sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-4xl"><p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-black/35">{tr('Votre prochain produit', 'Your next product', 'Tu próximo producto')}</p><h2 className="mt-5 font-heading text-5xl font-black leading-[.9] tracking-[-.06em] sm:text-7xl">{tr("Faire ressentir l’expérience avant même le départ.", 'Make people feel the experience before they leave.', 'Haz sentir la experiencia antes de partir.')}</h2><Link to="/reserver-un-appel" className="mt-9 inline-flex items-center gap-3 bg-[#e85524] px-7 py-4 text-sm font-extrabold text-white transition hover:-translate-y-1 hover:bg-[#17140f]">{tr('Parler de votre projet', 'Discuss your project', 'Hablar de tu proyecto')} <ArrowIcon /></Link></div>
      </section>
    </div>
  );
}

export default ArribaSurfProject;
