import React from 'react';
import { Link } from 'react-router-dom';
import MaisonBenjellounShowcase from './MaisonBenjellounShowcase';
import Seo from './Seo';
import { useLanguage } from './language-state';

const services = [
  {
    number: '01', id: 'web', aliases: ['business', 'ecommerce', 'saas', 'react', 'nodejs', 'backend'], label: 'Web & plateformes',
    title: 'Des produits web qui font avancer l’activité.',
    description: 'Site à fort enjeu, plateforme métier, SaaS ou e-commerce headless : l’interface est dessinée autour des décisions et des actions qui comptent vraiment.',
    situations: ['Un site qui ne transforme pas assez', 'Des opérations réparties entre plusieurs outils', 'Un produit devenu difficile à faire évoluer'],
    deliverables: ['Cadrage fonctionnel', 'UX/UI sur mesure', 'Développement et mise en ligne'],
  },
  {
    number: '02', id: 'mobile', aliases: [], label: 'Applications mobiles',
    title: 'Le bon outil, directement sur le terrain.',
    description: 'Des applications iOS, Android et PWA rapides à comprendre, fiables dans l’usage quotidien et connectées au reste de votre système.',
    situations: ['Des équipes mobiles encore dépendantes du papier', 'Un service client à rendre plus accessible', 'Un parcours web mal adapté au terrain'],
    deliverables: ['Parcours et prototype', 'Application cross-platform', 'Publication et suivi'],
  },
  {
    number: '03', id: 'ai', aliases: ['vision', 'predictive', 'data', 'automation'], label: 'IA & automatisation',
    title: 'Moins de tâches répétées. Plus de temps utile.',
    description: 'L’IA intervient seulement lorsqu’elle améliore un processus identifiable : retrouver une information, traiter un document, assister une décision ou automatiser une suite d’actions.',
    situations: ['Des données difficiles à exploiter', 'Des tâches manuelles qui prennent chaque semaine', 'Une information métier dispersée'],
    deliverables: ['Étude de faisabilité', 'Prototype sur vos données', 'Déploiement sécurisé'],
  },
  {
    number: '04', id: 'discovery', aliases: ['research', 'design', 'cloud', 'transformation', 'audit', 'architecture'], label: 'Cadrage & produit',
    title: 'Décider quoi construire avant de le construire.',
    description: 'Un travail court pour clarifier le problème, confronter les hypothèses aux usages et transformer une idée encore floue en feuille de route exploitable.',
    situations: ['Une idée forte sans périmètre précis', 'Un budget à concentrer sur les bonnes priorités', 'Une refonte ou une reprise à sécuriser'],
    deliverables: ['Audit et recommandations', 'Prototype testable', 'Roadmap priorisée'],
  },
];

const processSteps = [
  ['01', 'Observer', 'Le contexte, les utilisateurs, les contraintes et le résultat attendu.'],
  ['02', 'Trancher', 'Un périmètre priorisé, une direction claire et des arbitrages assumés.'],
  ['03', 'Fabriquer', 'Des cycles courts, des démonstrations régulières et un produit testable.'],
  ['04', 'Mettre en service', 'Déploiement, documentation, mesure et prochaines améliorations.'],
];

const faqs = [
  ['Faut-il déjà avoir un cahier des charges ?', 'Non. Le cadrage sert précisément à transformer un besoin, un problème ou une idée en périmètre concret.'],
  ['Combien de temps faut-il pour lancer un produit ?', 'Cela dépend du périmètre et du niveau d’incertitude. Après le cadrage, vous recevez un plan découpé en étapes et en livrables identifiables.'],
  ['Pouvez-vous reprendre un produit existant ?', 'Oui. Un audit du produit, du code et des usages permet d’identifier ce qui doit être conservé, corrigé ou reconstruit.'],
  ['Avec qui vais-je travailler ?', 'KODELUME reste votre interlocuteur direct du cadrage à la livraison. Les décisions et l’avancement sont partagés sans intermédiaire.'],
];

const serviceCopy = {
  en: [
    ['Web & platforms', 'Web products that move the business forward.', 'High-stakes websites, business platforms, SaaS or headless commerce, shaped around the decisions and actions that matter.', ['A website that does not convert enough', 'Operations scattered across several tools', 'A product that is difficult to evolve'], ['Functional scope', 'Custom UX/UI', 'Development and launch']],
    ['Mobile applications', 'The right tool, right where work happens.', 'iOS, Android and PWA applications that are easy to understand, reliable every day and connected to the rest of your system.', ['Mobile teams still relying on paper', 'A customer service that should be more accessible', 'A web journey poorly suited to field use'], ['Journey and prototype', 'Cross-platform application', 'Publishing and monitoring']],
    ['AI & automation', 'Less repetitive work. More useful time.', 'AI is used only when it improves a clear process: finding information, handling documents, supporting decisions or automating a workflow.', ['Data that is difficult to use', 'Manual tasks repeated every week', 'Business knowledge scattered across systems'], ['Feasibility study', 'Prototype on your data', 'Secure deployment']],
    ['Product strategy', 'Decide what to build before building it.', 'A focused engagement to clarify the problem, test assumptions against real use and turn a vague idea into an actionable roadmap.', ['A strong idea without a clear scope', 'A budget that must focus on priorities', 'A redesign or takeover that needs de-risking'], ['Audit and recommendations', 'Testable prototype', 'Prioritised roadmap']],
  ],
  es: [
    ['Web y plataformas', 'Productos web que hacen avanzar el negocio.', 'Sitios estratégicos, plataformas, SaaS o comercio headless, centrados en las decisiones y acciones importantes.', ['Un sitio que no convierte lo suficiente', 'Operaciones repartidas entre varias herramientas', 'Un producto difícil de evolucionar'], ['Definición funcional', 'UX/UI a medida', 'Desarrollo y lanzamiento']],
    ['Aplicaciones móviles', 'La herramienta adecuada, allí donde se trabaja.', 'Aplicaciones iOS, Android y PWA fáciles de entender, fiables y conectadas al resto de tu sistema.', ['Equipos móviles que aún dependen del papel', 'Un servicio al cliente que debe ser más accesible', 'Un recorrido web poco adaptado al terreno'], ['Recorrido y prototipo', 'Aplicación multiplataforma', 'Publicación y seguimiento']],
    ['IA y automatización', 'Menos tareas repetitivas. Más tiempo útil.', 'La IA interviene solo cuando mejora un proceso claro: buscar información, procesar documentos, apoyar decisiones o automatizar acciones.', ['Datos difíciles de explotar', 'Tareas manuales repetidas cada semana', 'Conocimiento de negocio disperso'], ['Estudio de viabilidad', 'Prototipo con tus datos', 'Despliegue seguro']],
    ['Estrategia de producto', 'Decidir qué construir antes de construirlo.', 'Un trabajo enfocado para aclarar el problema, validar hipótesis y convertir una idea imprecisa en una hoja de ruta accionable.', ['Una idea fuerte sin alcance preciso', 'Un presupuesto que exige prioridades', 'Un rediseño que necesita reducir riesgos'], ['Auditoría y recomendaciones', 'Prototipo testeable', 'Hoja de ruta priorizada']],
  ],
};

const processCopy = {
  en: [['01', 'Observe', 'Context, users, constraints and expected outcome.'], ['02', 'Decide', 'A prioritised scope, clear direction and explicit trade-offs.'], ['03', 'Build', 'Short cycles, regular demos and a testable product.'], ['04', 'Launch', 'Deployment, documentation, measurement and next improvements.']],
  es: [['01', 'Observar', 'Contexto, usuarios, restricciones y resultado esperado.'], ['02', 'Decidir', 'Un alcance priorizado, dirección clara y decisiones explícitas.'], ['03', 'Construir', 'Ciclos cortos, demos regulares y un producto testeable.'], ['04', 'Lanzar', 'Despliegue, documentación, medición y mejoras futuras.']],
};

const faqCopy = {
  en: [['Do I need a specification first?', 'No. Discovery turns a need, problem or idea into a concrete scope.'], ['How long does a product take to launch?', 'It depends on scope and uncertainty. After discovery, you receive a staged plan with clear deliverables.'], ['Can you take over an existing product?', 'Yes. A product, code and usage audit identifies what to keep, fix or rebuild.'], ['Who will I work with?', 'KODELUME remains your direct contact from discovery to delivery, without intermediaries.']],
  es: [['¿Necesito un pliego de requisitos?', 'No. La definición convierte una necesidad, problema o idea en un alcance concreto.'], ['¿Cuánto tarda el lanzamiento?', 'Depende del alcance y la incertidumbre. Después de la definición, recibes un plan por etapas y entregables claros.'], ['¿Puedes retomar un producto existente?', 'Sí. Una auditoría permite decidir qué conservar, corregir o reconstruir.'], ['¿Con quién trabajaré?', 'KODELUME es tu contacto directo desde la definición hasta la entrega, sin intermediarios.']],
};

function ArrowIcon() {
  return <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" /></svg>;
}

function ServiceVisual({ type }) {
  const maps = {
    web: {
      code: 'ARCH / 01', title: 'Product architecture', note: 'Interface → services → data',
      nodes: [[18, 25, 'UI'], [52, 25, 'API'], [84, 25, 'DATA'], [52, 73, 'OPS']],
      paths: ['M25 25H45', 'M59 25H77', 'M52 32V66', 'M22 31C24 62 35 73 45 73'],
    },
    mobile: {
      code: 'SYNC / 02', title: 'Mobile system', note: 'Terrain ↔ synchronisation',
      nodes: [[18, 20, 'IOS'], [18, 76, 'AND'], [52, 48, 'SYNC'], [84, 20, 'API'], [84, 76, 'CACHE']],
      paths: ['M25 20C38 20 39 39 45 45', 'M25 76C38 76 39 57 45 51', 'M59 45C65 39 66 20 77 20', 'M59 51C65 57 66 76 77 76'],
    },
    ai: {
      code: 'RAG / 03', title: 'Intelligence layer', note: 'Sources → décision → action',
      nodes: [[16, 27, 'SRC'], [45, 27, 'RAG'], [74, 27, 'LLM'], [74, 73, 'ACT'], [27, 73, 'EVAL']],
      paths: ['M23 27H38', 'M52 27H67', 'M74 34V66', 'M67 73H34', 'M27 66C27 51 34 43 45 34'],
    },
    discovery: {
      code: 'MAP / 04', title: 'Decision model', note: 'Risque réduit avant le code',
      nodes: [[18, 25, 'USE'], [50, 25, 'RISK'], [82, 25, 'TEST'], [50, 73, 'SCOPE']],
      paths: ['M25 25H43', 'M57 25H75', 'M82 32C81 58 67 73 57 73', 'M43 73C31 72 20 57 18 32'],
    },
  };
  const map = maps[type] || maps.discovery;

  return (
    <div className="capability-map mt-10" role="img" aria-label={`${map.title}. ${map.note}`}>
      <div className="capability-map__head"><span>{map.code}</span><i aria-hidden="true" /></div>
      <strong>{map.title}</strong>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {map.paths.map((path) => <path key={path} className="capability-map__path" d={path} />)}
        {map.nodes.map(([x, y, label]) => (
          <g key={label} className="capability-map__node" transform={`translate(${x} ${y})`}>
            <rect x="-7" y="-7" width="14" height="14" />
            <text x="0" y="1.8" textAnchor="middle">{label}</text>
          </g>
        ))}
      </svg>
      <p>{map.note}</p>
    </div>
  );
}

function BlueprintFigure() {
  return (
    <div className="relative min-h-[360px] overflow-hidden border border-[#071a3b]/15 bg-white/55 text-[#071a3b] sm:min-h-[430px]">
      <p className="absolute left-7 top-5 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#071a3b]/45 sm:left-10">Plan 01 — parcours de réalisation</p>
      <svg className="absolute inset-x-5 top-14 h-[calc(100%-5rem)] w-[calc(100%-2.5rem)] sm:inset-x-8 sm:w-[calc(100%-4rem)]" viewBox="0 0 720 420" role="img" aria-label="Processus KODELUME : besoin, étude et UML, design, développement, tests puis mise en ligne">
        <title>Du besoin à la mise en ligne</title>
        <path className="blueprint-process-line" d="M72 103H210V206H350V103H490V206H638" fill="none" stroke="rgba(7,26,59,.32)" strokeWidth="1.5" />
        {[
          [72, 103, '01', 'BESOIN', 'Objectifs'], [210, 206, '02', 'ÉTUDE + UML', 'Flux & règles'],
          [350, 103, '03', 'DESIGN', 'Parcours & UI'], [490, 206, '04', 'DÉVELOPPEMENT', 'Produit réel'],
          [638, 206, '05', 'TESTS', 'Qualité'], [638, 325, '06', 'MISE EN LIGNE', 'Mesure & suivi'],
        ].map(([x, y, number, title, note]) => (
          <g key={number} transform={`translate(${x} ${y})`}>
            <rect x="-61" y="-36" width="122" height="72" rx="3" fill="rgba(255,255,255,.72)" stroke="rgba(7,26,59,.32)" />
            <rect className="process-node-pulse" x="-61" y="-36" width="8" height="8" fill="#ffd21c" />
            <text x="-46" y="-13" fill="rgba(7,26,59,.4)" fontSize="9" fontWeight="700" letterSpacing="1.5">{number}</text>
            <text x="-46" y="7" fill="#071a3b" fontSize={title.length > 12 ? 10 : 12} fontWeight="800">{title}</text>
            <text x="-46" y="24" fill="rgba(7,26,59,.52)" fontSize="9">{note}</text>
          </g>
        ))}
        <path className="blueprint-process-line" d="M638 242V289" fill="none" stroke="rgba(7,26,59,.32)" strokeWidth="1.5" />
      </svg>
      <p className="absolute bottom-4 right-7 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#071a3b]/45 sm:right-10">Méthode KODELUME / v1</p>
    </div>
  );
}

function Expertise() {
  const { language, translate: tr } = useLanguage();
  const displayedServices = serviceCopy[language]
    ? services.map((service, index) => ({ ...service, label: serviceCopy[language][index][0], title: serviceCopy[language][index][1], description: serviceCopy[language][index][2], situations: serviceCopy[language][index][3], deliverables: serviceCopy[language][index][4] }))
    : services;
  const displayedProcess = processCopy[language] || processSteps;
  const displayedFaqs = faqCopy[language] || faqs;
  return (
    <div className="expertise-page page-enter min-h-screen bg-[#f7f9fc] text-[#071a3b]">
      <Seo title={tr('Développement web, mobile et IA sur mesure — KODELUME', 'Custom web, mobile and AI development — KODELUME', 'Desarrollo web, móvil e IA a medida — KODELUME')} description={tr('KODELUME conçoit et développe des plateformes web, applications mobiles, e-commerce headless et automatisations IA adaptées aux enjeux métier.', 'KODELUME designs and builds web platforms, mobile apps, headless commerce and practical AI automation.', 'KODELUME diseña plataformas web, apps móviles, comercio headless y automatizaciones de IA.')} path="/expertise" schema={{ '@context': 'https://schema.org', '@type': 'Service', name: tr('Conception et développement de produits digitaux sur mesure', 'Custom digital product design and development', 'Diseño y desarrollo de productos digitales a medida'), provider: { '@type': 'Organization', name: 'KODELUME', url: 'https://kodelume.com' }, areaServed: ['France', 'Europe'], serviceType: ['Web development', 'Mobile applications', 'Headless commerce', 'Artificial intelligence', 'Product design'] }} />

      <section className="border-b border-[#081a33]/10 bg-[#f3f1eb] px-5 pb-20 pt-16 sm:px-10 sm:pb-28 sm:pt-24 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between border-b border-[#071a3b]/15 pb-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#071a3b]/45"><span>KODELUME / Expertises</span><span>Conception — Développement — Livraison</span></div>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="text-center lg:text-left">
              <p className="flex items-center justify-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#8a6818] lg:justify-start"><span className="h-2.5 w-2.5 bg-[#f4be32]" aria-hidden="true" />{tr('Produits digitaux sur mesure', 'Custom digital products', 'Productos digitales a medida')}</p>
              <h1 className="mt-7 max-w-5xl font-heading text-[clamp(3rem,13vw,8rem)] font-extrabold leading-[0.88] tracking-[-0.065em] lg:leading-[0.84]">{tr('Concevoir juste.', 'Design with purpose.', 'Diseñar con sentido.')}<br /><span className="text-[#8a6818]">{tr('Construire solide.', 'Build for the long run.', 'Construir para durar.')}</span></h1>
              <p className="mx-auto mt-8 max-w-2xl text-base font-medium leading-7 text-[#274363]/70 sm:text-xl sm:leading-8 lg:mx-0">{tr('KODELUME transforme un problème métier en produit web, mobile ou IA clair, utile et maintenable — avec un interlocuteur direct du premier croquis à la mise en ligne.', 'KODELUME turns a business problem into a clear, useful and maintainable web, mobile or AI product—with one direct contact from first sketch to launch.', 'KODELUME convierte un problema de negocio en un producto web, móvil o IA claro, útil y mantenible, con un contacto directo de principio a fin.')}</p>
              <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <Link to="/reserver-un-appel" className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#071a3b] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#176bff]">{tr('Exposer votre besoin', 'Discuss your needs', 'Cuéntanos tu necesidad')} <ArrowIcon /></Link>
                <Link to="/projects/maison-benjelloun" className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#071a3b]/20 px-7 py-4 text-sm font-extrabold transition hover:border-[#176bff] hover:text-[#176bff]">{tr('Voir un projet livré', 'View delivered work', 'Ver un proyecto realizado')} <ArrowIcon /></Link>
              </div>
            </div>
            <BlueprintFigure />
          </div>
        </div>
      </section>

      <section className="border-b border-[#071a3b]/10 bg-white px-5 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-4">
          {['Interlocuteur direct', 'Cadrage avant le code', 'Cycles courts et visibles', 'Livraison documentée'].map((item, index) => <div key={item} className="flex items-center gap-3 text-xs font-extrabold text-[#274363]/70"><span className="font-mono text-[#176bff]">0{index + 1}</span>{item}</div>)}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 border-b border-[#071a3b]/20 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#176bff]">{tr('Index des savoir-faire', 'Capabilities index', 'Índice de capacidades')}</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">{tr('Partir du problème, pas de la tendance.', 'Start with the problem, not the trend.', 'Partir del problema, no de la tendencia.')}</h2></div>
            <p className="max-w-xl text-lg leading-8 text-[#274363]/65">{tr('La technologie arrive après le besoin. Chaque intervention est reliée à une situation concrète et à des livrables que vous pouvez utiliser.', 'Technology comes after the need. Every engagement connects to a concrete situation and usable deliverables.', 'La tecnología viene después de la necesidad. Cada intervención se vincula a una situación concreta y entregables útiles.')}</p>
          </div>
          <div>
            {displayedServices.map((service) => (
              <article key={service.id} id={service.id} className="group relative scroll-mt-36 border-b border-[#071a3b]/20 py-12 sm:py-16">
                {service.aliases.map((alias) => <span key={alias} id={alias} className="absolute top-0 scroll-mt-36" aria-hidden="true" />)}
                <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr_1fr] lg:gap-12">
                  <div className="text-center lg:text-left"><p className="font-mono text-xs font-bold text-[#176bff]">{service.number}</p><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#274363]/50">{service.label}</p><div className="flex justify-center lg:block"><ServiceVisual type={service.id} /></div></div>
                  <div><h3 className="font-heading text-3xl font-extrabold leading-[1] tracking-[-0.045em] sm:text-5xl">{service.title}</h3><p className="mt-6 text-base font-medium leading-7 text-[#274363]/65">{service.description}</p></div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div><p className="border-b border-[#071a3b]/15 pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#176bff]">Situations typiques</p><ul className="mt-4 space-y-4 text-sm font-semibold leading-6 text-[#274363]/70">{service.situations.map((item) => <li key={item} className="flex gap-3"><span className="text-[#176bff]">→</span>{item}</li>)}</ul></div>
                    <div><p className="border-b border-[#071a3b]/15 pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#176bff]">Ce qui est livré</p><ul className="mt-4 space-y-4 text-sm font-semibold leading-6 text-[#274363]/70">{service.deliverables.map((item) => <li key={item} className="flex gap-3"><span className="text-[#176bff]">+</span>{item}</li>)}</ul></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#071a3b] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1440px]">
          <div className="mb-12 flex items-center justify-between border-b border-white/20 pb-4 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-white/45"><span>{tr('Projet livré', 'Delivered work', 'Proyecto realizado')} / 01</span><span>Three.js + Shopify Headless</span></div>
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
            <div><p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#ffd21c]">{tr('La preuve par le produit', 'Proof through product', 'La prueba en el producto')}</p><h2 className="mt-6 font-heading text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl">Maison<br />Benjelloun.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-white/60">{tr("Une galerie immersive développée avec Three.js et reliée à Shopify en headless. Le client ajoute ses œuvres et pilote sa boutique depuis son téléphone, tandis que l’expérience publique reste entièrement sur mesure.", 'An immersive Three.js gallery connected to headless Shopify. The client adds artwork and runs the store from a phone while the public experience remains fully custom.', 'Una galería inmersiva con Three.js conectada a Shopify headless. El cliente gestiona obras y tienda desde el móvil, con una experiencia pública a medida.')}</p><Link to="/projects/maison-benjelloun" className="mt-8 inline-flex items-center gap-3 rounded-lg bg-white px-6 py-4 text-sm font-extrabold text-[#071a3b] transition hover:bg-[#ffd21c]">{tr("Lire l’étude de cas", 'Read the case study', 'Leer el caso de éxito')} <ArrowIcon /></Link></div>
            <MaisonBenjellounShowcase compact />
          </div>
        </div>
      </section>

      <section className="bg-[#081a33] px-5 py-24 text-white sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">{tr('Méthode de travail', 'Working method', 'Método de trabajo')}</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">{tr('Voir clair à chaque étape.', 'Clarity at every step.', 'Claridad en cada etapa.')}</h2><p className="mt-6 max-w-lg text-lg leading-8 text-white/65">{tr("Un processus lisible pour tester tôt, éviter l’effet tunnel et concentrer le budget sur ce qui compte.", 'A clear process to test early, avoid the tunnel effect and focus budget where it matters.', 'Un proceso claro para probar pronto, evitar el efecto túnel y concentrar el presupuesto en lo importante.')}</p></div>
          <div className="border-t border-white/30">{displayedProcess.map(([number, title, description]) => <div key={number} className="grid gap-3 border-b border-white/30 py-6 sm:grid-cols-[3rem_0.7fr_1.3fr] sm:items-center sm:py-8"><span className="font-mono text-xs font-bold text-[#ffd21c]">{number}</span><h3 className="font-heading text-xl font-extrabold">{title}</h3><p className="text-sm font-medium leading-6 text-white/65">{description}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1000px]">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#176bff]">{tr('Questions fréquentes', 'Frequently asked questions', 'Preguntas frecuentes')}</p><h2 className="mt-5 font-heading text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">{tr('Avant de commencer.', 'Before we begin.', 'Antes de empezar.')}</h2>
          <div className="mt-14 border-t border-[#071a3b]/20">{displayedFaqs.map(([question, answer], index) => <details key={question} className="group border-b border-[#071a3b]/20 py-6"><summary className="grid cursor-pointer list-none grid-cols-[2rem_1fr_auto] items-center gap-3 font-heading text-lg font-extrabold marker:content-none sm:text-xl"><span className="font-mono text-[10px] text-[#176bff]">0{index + 1}</span>{question}<span className="text-2xl font-light text-[#176bff] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pl-11 pr-10 pt-4 text-sm font-medium leading-7 text-[#274363]/65 sm:text-base">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#ffd21c] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">{tr('Prochaine étape', 'Next step', 'Siguiente paso')}</p><h2 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[0.94] tracking-[-0.055em] text-[#071a3b] sm:text-6xl">{tr('Parlons du problème avant de parler technologie.', "Let's discuss the problem before the technology.", 'Hablemos del problema antes que de la tecnología.')}</h2></div>
          <div><p className="text-base font-medium leading-7 text-black/60">{tr('30 minutes pour clarifier votre besoin et identifier une prochaine étape réaliste.', '30 minutes to clarify your needs and identify a realistic next step.', '30 minutos para aclarar tus necesidades e identificar el siguiente paso.')}</p><Link to="/reserver-un-appel" className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#071a3b] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#176bff]">{tr('Réserver un appel', 'Book a call', 'Reservar una llamada')} <ArrowIcon /></Link></div>
        </div>
      </section>
    </div>
  );
}

export default Expertise;
