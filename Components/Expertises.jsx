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
  if (type === 'ai') return <div className="service-v2 service-v2--ai" role="img" aria-label="Workflow IA automatisé"><svg viewBox="0 0 260 170"><path d="M41 44H91M117 44h45M188 44c25 0 25 42 2 42h-15M150 86h-38M87 86H54M112 86c26 0 24 43 49 43h16"/><g transform="translate(16 27)"><rect width="50" height="34" rx="8"/><text x="25" y="21">INPUT</text></g><g transform="translate(91 27)" className="is-active"><rect width="50" height="34" rx="8"/><text x="25" y="21">RAG</text></g><g transform="translate(162 27)"><rect width="50" height="34" rx="8"/><text x="25" y="21">MODEL</text></g><g transform="translate(150 69)"><rect width="50" height="34" rx="8"/><text x="25" y="21">CHECK</text></g><g transform="translate(62 69)"><rect width="50" height="34" rx="8"/><text x="25" y="21">RULES</text></g><g transform="translate(177 112)" className="is-output"><rect width="60" height="34" rx="8"/><text x="30" y="21">ACTION</text></g></svg><div><span>WORKFLOW / ACTIVE</span><i/><b>6 modules · 1 validation</b></div></div>;
  if (type === 'mobile') return <div className="service-v2 service-v2--mobile" role="img" aria-label="Application mobile synchronisée"><div className="service-mobile__phone"><i/><span>FIELD APP</span><b>12</b><small>actions synced</small><em><u/><u/><u/></em></div><div className="service-mobile__sync"><span>→</span><i>SYNC</i><span>←</span></div><div className="service-mobile__stack"><b>API</b><b>OFFLINE</b><b>NOTIFY</b></div></div>;
  if (type === 'web') return <div className="service-v2 service-v2--web" role="img" aria-label="Architecture d’une plateforme web"><div className="service-web__bar"><i/><i/><i/><span>product.kodelume</span></div><div className="service-web__body"><aside><b/><b/><b/><b/></aside><main><div><span>ACTIVE USERS</span><strong>2,408</strong><em>+18%</em></div><svg viewBox="0 0 170 55"><path d="M2 45 30 34 53 39 82 18 106 25 135 9 168 14"/></svg><footer><i/><i/><i/></footer></main></div></div>;
  return <div className="service-v2 service-v2--scope" role="img" aria-label="Matrice de cadrage produit"><div className="service-scope__axis"><span>IMPACT</span><span>EFFORT →</span></div><div className="service-scope__grid"><i className="one">01</i><i className="two">02</i><i className="three">03</i><i className="four">04</i></div><b>PRIORITY / 01</b></div>;
}

function BlueprintFigure({ tr }) {
  return (
    <div className="expertise-system expertise-system--v2" role="img" aria-label={tr('Du besoin au produit en production', 'From business need to live product', 'De la necesidad al producto en producción')}>
      <div className="expertise-system__head"><span>PRODUCT DELIVERY / LIVE MAP</span><i /> <b>4 STAGES</b></div>
      <div className="expertise-system__canvas">
        <svg viewBox="0 0 640 360" aria-hidden="true"><path d="M65 180H175C215 180 211 92 255 92H380C428 92 417 258 468 258H575" /><path d="M255 92c0 84 5 88-51 88M380 92c0 85 8 166 88 166"/><circle cx="65" cy="180" r="5" /><circle cx="255" cy="92" r="5" /><circle cx="468" cy="258" r="5" /><circle cx="575" cy="258" r="5" /></svg>
        <div className="expertise-system__card expertise-system__card--one"><span>01</span><strong>{tr('Cadrage', 'Scope', 'Definición')}</strong><small>{tr('Besoin · usages · risque', 'Need · users · risk', 'Necesidad · usos · riesgo')}</small></div>
        <div className="expertise-system__card expertise-system__card--two"><span>02</span><strong>{tr('Prototype', 'Prototype', 'Prototipo')}</strong><small>UX · UI · VALIDATION</small></div>
        <div className="expertise-system__card expertise-system__card--three"><span>03</span><strong>{tr('Produit', 'Product', 'Producto')}</strong><small>CODE · DATA · QA</small></div>
        <div className="expertise-system__result"><span>04</span><strong>LIVE</strong><i /></div><div className="expertise-system__signal"><i/><span>DECISION LOG</span><b>12</b></div>
      </div>
      <div className="expertise-system__foot"><span>{tr('Décisions visibles', 'Visible decisions', 'Decisiones visibles')}</span><span>{tr('Validation continue', 'Continuous validation', 'Validación continua')}</span></div>
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
                <Link to="/reserver-un-appel" className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#081a33] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-[#f4be32] hover:text-[#081a33]">{tr('Exposer votre besoin', 'Discuss your needs', 'Cuéntanos tu necesidad')} <ArrowIcon /></Link>
                <Link to="/projects/maison-benjelloun" className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#081a33]/20 px-7 py-4 text-sm font-extrabold transition hover:border-[#a27610] hover:text-[#8a6818]">{tr('Voir un projet livré', 'View delivered work', 'Ver un proyecto realizado')} <ArrowIcon /></Link>
              </div>
            </div>
            <BlueprintFigure tr={tr} />
          </div>
        </div>
      </section>

      <section className="border-b border-[#071a3b]/10 bg-white px-5 py-7 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] grid-cols-2 gap-x-8 gap-y-5 lg:grid-cols-4">
          {['Interlocuteur direct', 'Cadrage avant le code', 'Cycles courts et visibles', 'Livraison documentée'].map((item, index) => <div key={item} className="flex items-center gap-3 text-xs font-extrabold text-[#274363]/70"><span className="font-mono text-[#a27610]">0{index + 1}</span>{item}</div>)}
        </div>
      </section>

      <section className="px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="mx-auto max-w-[1280px]">
          <div className="grid gap-8 border-b border-[#071a3b]/20 pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6818]">{tr('Index des savoir-faire', 'Capabilities index', 'Índice de capacidades')}</p><h2 className="mt-5 font-heading text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">{tr('Partir du problème, pas de la tendance.', 'Start with the problem, not the trend.', 'Partir del problema, no de la tendencia.')}</h2></div>
            <p className="max-w-xl text-lg leading-8 text-[#274363]/65">{tr('La technologie arrive après le besoin. Chaque intervention est reliée à une situation concrète et à des livrables que vous pouvez utiliser.', 'Technology comes after the need. Every engagement connects to a concrete situation and usable deliverables.', 'La tecnología viene después de la necesidad. Cada intervención se vincula a una situación concreta y entregables útiles.')}</p>
          </div>
          <div>
            {displayedServices.map((service) => (
              <article key={service.id} id={service.id} className="group relative scroll-mt-36 border-b border-[#071a3b]/20 py-12 sm:py-16">
                {service.aliases.map((alias) => <span key={alias} id={alias} className="absolute top-0 scroll-mt-36" aria-hidden="true" />)}
                <div className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr_1fr] lg:gap-12">
                  <div className="text-center lg:text-left"><p className="font-mono text-xs font-bold text-[#a27610]">{service.number}</p><p className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#274363]/50">{service.label}</p><div className="flex justify-center lg:block"><ServiceVisual type={service.id} /></div></div>
                  <div><h3 className="font-heading text-3xl font-extrabold leading-[1] tracking-[-0.045em] sm:text-5xl">{service.title}</h3><p className="mt-6 text-base font-medium leading-7 text-[#274363]/65">{service.description}</p></div>
                  <div className="grid gap-8 sm:grid-cols-2">
                    <div><p className="border-b border-[#071a3b]/15 pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a6818]">{tr('Situations typiques', 'Typical situations', 'Situaciones típicas')}</p><ul className="mt-4 space-y-4 text-sm font-semibold leading-6 text-[#274363]/70">{service.situations.map((item) => <li key={item} className="flex gap-3"><span className="text-[#a27610]">→</span>{item}</li>)}</ul></div>
                    <div><p className="border-b border-[#071a3b]/15 pb-3 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#8a6818]">{tr('Ce qui est livré', 'Deliverables', 'Entregables')}</p><ul className="mt-4 space-y-4 text-sm font-semibold leading-6 text-[#274363]/70">{service.deliverables.map((item) => <li key={item} className="flex gap-3"><span className="text-[#a27610]">+</span>{item}</li>)}</ul></div>
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
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a6818]">{tr('Questions fréquentes', 'Frequently asked questions', 'Preguntas frecuentes')}</p><h2 className="mt-5 font-heading text-4xl font-extrabold tracking-[-0.05em] sm:text-6xl">{tr('Avant de commencer.', 'Before we begin.', 'Antes de empezar.')}</h2>
          <div className="mt-14 border-t border-[#071a3b]/20">{displayedFaqs.map(([question, answer], index) => <details key={question} className="group border-b border-[#071a3b]/20 py-6"><summary className="grid cursor-pointer list-none grid-cols-[2rem_1fr_auto] items-center gap-3 font-heading text-lg font-extrabold marker:content-none sm:text-xl"><span className="font-mono text-[10px] text-[#a27610]">0{index + 1}</span>{question}<span className="text-2xl font-light text-[#081a33] transition group-open:rotate-45">+</span></summary><p className="max-w-3xl pl-11 pr-10 pt-4 text-sm font-medium leading-7 text-[#274363]/65 sm:text-base">{answer}</p></details>)}</div>
        </div>
      </section>

      <section className="bg-[#ffd21c] px-5 py-20 sm:px-10 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-[1280px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div><p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/45">{tr('Prochaine étape', 'Next step', 'Siguiente paso')}</p><h2 className="mt-5 max-w-4xl font-heading text-4xl font-extrabold leading-[0.94] tracking-[-0.055em] text-[#071a3b] sm:text-6xl">{tr('Parlons du problème avant de parler technologie.', "Let's discuss the problem before the technology.", 'Hablemos del problema antes que de la tecnología.')}</h2></div>
          <div><p className="text-base font-medium leading-7 text-black/60">{tr('30 minutes pour clarifier votre besoin et identifier une prochaine étape réaliste.', '30 minutes to clarify your needs and identify a realistic next step.', '30 minutos para aclarar tus necesidades e identificar el siguiente paso.')}</p><Link to="/reserver-un-appel" className="mt-7 inline-flex items-center gap-3 rounded-lg bg-[#081a33] px-7 py-4 text-sm font-extrabold text-white transition hover:bg-white hover:text-[#081a33]">{tr('Réserver un appel', 'Book a call', 'Reservar una llamada')} <ArrowIcon /></Link></div>
        </div>
      </section>
    </div>
  );
}

export default Expertise;
