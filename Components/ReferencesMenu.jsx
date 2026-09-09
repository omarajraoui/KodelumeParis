import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './language-state';

const getProjects = (tr) => [
  ['Maison Benjelloun', 'maison-benjelloun', 'Shopify Headless · Three.js'],
  ['Arriba Surf Camp', 'arriba-surf-camp', tr('Réservation · Multilingue', 'Booking · Multilingual', 'Reservas · Multilingüe')],
  ['E-commerce Dashboard', 'ecommerce-dashboard', tr('Plateforme métier', 'Business platform', 'Plataforma empresarial')],
  ['Fleet Mobile App', 'fleet-app', tr('Application mobile', 'Mobile application', 'Aplicación móvil')],
  ['GPT Quotation Bot', 'gpt-bot', tr('IA générative', 'Generative AI', 'IA generativa')],
  ['SaaS CRM Tool', 'crm-saas', tr('Produit SaaS', 'SaaS product', 'Producto SaaS')],
];

function MenuArrow() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ReferencesMenu({ isVisible, onClose }) {
  const { translate: tr } = useLanguage();
  const projects = getProjects(tr);
  if (!isVisible) return null;

  return (
    <div className="absolute left-1/2 top-full w-[min(calc(100vw-2rem),1060px)] -translate-x-1/2 pt-3 text-[#081a33]">
      <div className="grid grid-cols-[0.62fr_1.38fr] gap-9 rounded-[22px] border border-[#081a33]/10 bg-[#faf9f5]/97 p-7 shadow-[0_28px_64px_rgba(8,26,51,0.14)] backdrop-blur-2xl">
        <div className="flex flex-col justify-between rounded-[16px] bg-[#081a33] p-7 text-white">
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-white/50"><span className="h-2 w-2 bg-[#f4be32]" />{tr('Références', 'Work', 'Proyectos')}</p>
          <div className="mt-16">
            <p className="font-heading text-3xl font-extrabold leading-tight tracking-[-0.04em]">{tr('Voir le produit.', 'See the product.', 'Ver el producto.')}<br />{tr('Comprendre l’impact.', 'Understand the impact.', 'Entender el impacto.')}</p>
            <Link to="/references" onClick={onClose} className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold">
              {tr('Tous les projets', 'All projects', 'Todos los proyectos')} <MenuArrow />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {projects.map(([title, slug, category], index) => (
            <Link
              key={slug}
              to={`/projects/${slug}`}
              onClick={onClose}
              className={`group flex items-center justify-between border-[#081a33]/10 py-5 transition hover:bg-[#f0eee8] ${index % 2 === 0 ? 'border-r pr-8' : 'pl-8'} ${index < 4 ? 'border-b' : ''}`}
            >
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-[#7a6840]">{category}</span>
                <span className="mt-1 block font-heading text-lg font-extrabold">{title}</span>
              </span>
              <span className="translate-x-1 opacity-30 transition group-hover:translate-x-0 group-hover:opacity-100"><MenuArrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReferencesMenu;
