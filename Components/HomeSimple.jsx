import React from 'react';
import { Link } from 'react-router-dom';
import skyHero from '../src/assets/kodelume-sky-hero.jpg';
import KodelumeLogo from './KodelumeLogo';
import Seo from './Seo';
import MaisonBenjellounShowcase from './MaisonBenjellounShowcase';
import DeliverySystem from './DeliverySystem';
import { useLanguage } from './language-state';

const getServices = (tr) => [
  ['01', tr('Produits web', 'Web products', 'Productos web'), tr('Sites, plateformes métier et SaaS rapides, accessibles et pensés pour convertir.', 'Fast, accessible websites, business platforms and SaaS products designed to convert.', 'Sitios, plataformas empresariales y productos SaaS rápidos, accesibles y orientados a convertir.'), ['React', 'Node.js', 'E-commerce']],
  ['02', tr('Intelligence artificielle', 'Artificial intelligence', 'Inteligencia artificial'), tr('Assistants et automatisations connectés à vos outils, données et processus.', 'Assistants and automations connected to your tools, data and workflows.', 'Asistentes y automatizaciones conectados a tus herramientas, datos y procesos.'), [tr('IA générative', 'Generative AI', 'IA generativa'), 'RAG', tr('Automatisation', 'Automation', 'Automatización')]],
  ['03', tr('Applications mobiles', 'Mobile applications', 'Aplicaciones móviles'), tr('Expériences iOS et Android fluides, robustes et simples à utiliser.', 'Fluid, robust and intuitive iOS and Android experiences.', 'Experiencias iOS y Android fluidas, robustas y fáciles de usar.'), ['React Native', 'Flutter', 'PWA']],
];

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function Home() {
  const { translate: tr } = useLanguage();
  const services = getServices(tr);
  return (
    <div className="home-page page-enter bg-white text-[#071a3b]">
      <Seo
        title={tr('KODELUME — Développement web, applications mobiles et IA', 'KODELUME — Web development, mobile applications and AI', 'KODELUME — Desarrollo web, aplicaciones móviles e IA')}
        description={tr('KODELUME conçoit et développe des sites web, plateformes métier, applications mobiles et automatisations IA sur mesure pour les entreprises.', 'KODELUME designs and builds custom websites, business platforms, mobile applications and AI automations.', 'KODELUME diseña y desarrolla sitios web, plataformas empresariales, aplicaciones móviles y automatizaciones de IA a medida.')}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'KODELUME',
          url: 'https://kodelume.com',
          logo: 'https://kodelume.com/kodelume-mark.png',
          email: 'contact@kodelume.com',
          description: 'Studio indépendant de conception et développement de produits web, mobiles et IA sur mesure.',
          areaServed: 'France',
        }}
      />
      <section
        className="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${skyHero})` }}
      >
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/5 to-white" />
          <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col items-center px-5 pb-14 pt-32 text-center sm:px-10 sm:pt-44 lg:px-16">
            <p className="flex items-center gap-3 border-b border-[#071a3b]/20 pb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#071a3b]/60"><span className="h-2.5 w-2.5 bg-[#ffd21c]" aria-hidden="true" />{tr('Studio produit indépendant', 'Independent product studio', 'Estudio de producto independiente')}</p>

            <h1 className="mt-8 max-w-5xl font-heading text-[clamp(2.65rem,12.5vw,6.8rem)] font-extrabold leading-[0.96] tracking-[-0.06em] text-[#06142f] sm:mt-9">
              {tr("L’innovation", 'Digital', 'Innovación')} <span className="inline-flex translate-y-2 px-1 sm:translate-y-3"><KodelumeLogo variant="lamp" decorative className="h-12 w-12 drop-shadow-[0_8px_16px_rgba(23,107,255,0.14)] sm:h-[4.5rem] sm:w-[4.5rem]" /></span> {tr('digitale', 'innovation', 'digital')}<br className="hidden sm:block" /> {tr('pour chaque ambition.', 'for every ambition.', 'para cada ambición.')}
            </h1>

            <p className="mt-7 max-w-2xl text-base font-medium leading-7 text-[#274363]/70 sm:text-lg">
              {tr('KODELUME imagine, conçoit et développe des produits web, mobiles et IA qui transforment vraiment votre activité.', 'KODELUME imagines, designs and builds web, mobile and AI products that genuinely transform your business.', 'KODELUME imagina, diseña y desarrolla productos web, móviles y de IA que transforman realmente tu negocio.')}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <Link to="/reserver-un-appel" className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#081a33] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(8,26,51,0.16)] transition hover:-translate-y-1 hover:bg-[#f4be32] hover:text-[#081a33]">
                {tr('Réserver un appel de 30 min', 'Book a 30-min call', 'Reservar una llamada de 30 min')} <ArrowIcon />
              </Link>
              <Link to="/references" className="inline-flex items-center justify-center rounded-lg border border-[#081a33]/10 bg-[#faf9f5]/72 px-6 py-3.5 text-sm font-extrabold shadow-[0_8px_20px_rgba(8,26,51,0.06)] backdrop-blur-xl transition hover:bg-[#faf9f5]">
                {tr('Voir nos réalisations', 'See our work', 'Ver nuestros proyectos')}
              </Link>
            </div>

            <div className="mt-14">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#274363]/45">{tr('Une vision, trois expertises', 'One vision, three areas of expertise', 'Una visión, tres especialidades')}</p>
              <div className="mt-5 flex flex-col items-center gap-2.5 text-sm font-extrabold text-[#071a3b]/65 sm:flex-row sm:gap-x-12 sm:text-base">
                <span>{tr('Produits web', 'Web products', 'Productos web')}</span><span>{tr('Intelligence artificielle', 'Artificial intelligence', 'Inteligencia artificial')}</span><span>{tr('Applications mobiles', 'Mobile applications', 'Aplicaciones móviles')}</span>
              </div>
            </div>

            <div className="mt-16 grid w-full max-w-6xl gap-6 border-t border-[#071a3b]/20 pt-6 text-left lg:grid-cols-[0.34fr_0.66fr]">
              <div className="flex flex-col justify-between gap-8 py-2">
                <div><p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#176bff]">{tr('Projet sélectionné', 'Selected project', 'Proyecto seleccionado')} / 01</p><h2 className="mt-4 font-heading text-4xl font-extrabold leading-[.9] tracking-[-.055em]">Maison<br />Benjelloun</h2></div>
                <div><p className="max-w-xs text-sm font-medium leading-6 text-[#274363]/65">{tr('Galerie digitale immersive, Three.js et commerce Shopify Headless.', 'Immersive digital gallery, Three.js and Shopify Headless commerce.', 'Galería digital inmersiva, Three.js y comercio Shopify Headless.')}</p><Link to="/projects/maison-benjelloun" className="mt-5 inline-flex items-center gap-3 text-xs font-extrabold text-[#176bff]">{tr('Découvrir le projet', 'Explore the project', 'Descubrir el proyecto')} <ArrowIcon /></Link></div>
              </div>
              <MaisonBenjellounShowcase compact />
            </div>
        </div>
      </section>

      <section className="py-24 sm:py-32" id="expertise-preview">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#176bff]">01 / {tr('Nos expertises', 'Our expertise', 'Nuestra experiencia')}</p>
            <h2 className="mt-7 font-heading text-4xl font-extrabold leading-tight tracking-[-0.045em] sm:text-6xl">{tr("De l’idée au produit,", 'From idea to product,', 'De la idea al producto,')}<br />{tr('sans perdre le cap.', 'without losing direction.', 'sin perder el rumbo.')}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#274363]/60">{tr('Stratégie, design et technologie réunis sous une même direction pour avancer avec clarté et cohérence.', 'Strategy, design and technology under one direction to move forward with clarity and consistency.', 'Estrategia, diseño y tecnología bajo una misma dirección para avanzar con claridad y coherencia.')}</p>
          </div>

          <div className="mt-16 grid border-t border-[#071a3b]/20 lg:grid-cols-3">
            {services.map(([number, title, description, tags]) => (
              <article key={number} className="group border-b border-[#071a3b]/15 p-7 transition-colors duration-300 hover:bg-[#f2f0ea] lg:border-r lg:last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-[#176bff]/45">{number}</span>
                  <span className="text-[#176bff] transition-transform duration-300 group-hover:translate-x-1"><ArrowIcon /></span>
                </div>
                <h3 className="mt-12 font-heading text-2xl font-extrabold tracking-tight">{title}</h3>
                <p className="mt-4 min-h-20 leading-7 text-[#274363]/60">{description}</p>
                <p className="mt-6 border-t border-[#071a3b]/10 pt-4 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#274363]/50">{tags.join(' / ')}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f1eb] py-20 sm:py-32">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-10 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[0.68fr_1.32fr] lg:items-start lg:gap-16">
          <div className="text-center lg:sticky lg:top-36 lg:text-left">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#176bff]">02 / {tr('La méthode', 'Method', 'Método')}</p>
            <h2 className="mt-7 font-heading text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-6xl">{tr('Un système de delivery,', 'A delivery system,', 'Un sistema de entrega,')}<br /><span className="text-[#176bff]">{tr('pas une boîte noire.', 'not a black box.', 'no una caja negra.')}</span></h2>
            <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-[#274363]/60 sm:text-lg sm:leading-8 lg:mx-0">{tr('Chaque étape produit une décision, un livrable et un signal de validation. Vous savez ce qui avance, pourquoi, et ce qui vient ensuite.', 'Every stage produces a decision, a deliverable and a validation signal. You know what is moving forward, why, and what comes next.', 'Cada etapa produce una decisión, un entregable y una señal de validación. Sabes qué avanza, por qué y qué viene después.')}</p>
          </div>
          <DeliverySystem />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#081a33] px-6 py-24 text-white sm:px-10 sm:py-32">
        <div className="relative mx-auto max-w-[1280px] text-center">
          <div className="relative mx-auto max-w-4xl">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">03 / {tr('Votre prochain projet', 'Your next project', 'Tu próximo proyecto')}</p>
            <h2 className="mt-7 font-heading text-4xl font-extrabold leading-[1] tracking-[-0.05em] sm:text-7xl">{tr('Un projet à cadrer ? Parlons-en simplement.', 'A project to scope? Let’s talk it through.', '¿Un proyecto por definir? Hablemos.')}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">{tr('Un échange de 30 minutes suffit pour clarifier votre besoin et identifier la meilleure prochaine étape.', 'A 30-minute conversation is enough to clarify your needs and identify the best next step.', 'Una conversación de 30 minutos basta para aclarar tus necesidades e identificar el mejor siguiente paso.')}</p>
            <a href="mailto:contact@kodelume.com" className="mt-9 inline-flex items-center gap-3 rounded-lg bg-white px-7 py-4 text-sm font-extrabold text-[#071a3b] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd21c]">contact@kodelume.com <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
