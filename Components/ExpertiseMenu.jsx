import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from './language-state';

const getCategories = (tr) => [
  {
    number: '01',
    title: tr('Développement', 'Development', 'Desarrollo'),
    items: [
      [tr('Applications mobiles', 'Mobile applications', 'Aplicaciones móviles'), 'mobile'],
      [tr('Logiciels métier', 'Business software', 'Software empresarial'), 'business'],
      [tr('Sites e-commerce', 'E-commerce websites', 'Sitios e-commerce'), 'ecommerce'],
      [tr('Applications SaaS', 'SaaS applications', 'Aplicaciones SaaS'), 'saas'],
    ],
  },
  {
    number: '02',
    title: tr('Stratégie produit', 'Product strategy', 'Estrategia de producto'),
    items: [
      ['Product Discovery', 'discovery'],
      ['UX Research', 'research'],
      ['UX/UI Design', 'design'],
    ],
  },
  {
    number: '03',
    title: tr('Data & IA', 'Data & AI', 'Datos e IA'),
    items: [
      [tr('IA générative', 'Generative AI', 'IA generativa'), 'ai'],
      ['Computer Vision', 'vision'],
      [tr('Systèmes prédictifs', 'Predictive systems', 'Sistemas predictivos'), 'predictive'],
      ['Data Engineering', 'data'],
    ],
  },
  {
    number: '04',
    title: tr('Conseil & technique', 'Consulting & engineering', 'Consultoría e ingeniería'),
    items: [
      ['Cloud & DevOps', 'cloud'],
      [tr('Transformation digitale', 'Digital transformation', 'Transformación digital'), 'transformation'],
      ['React / React Native', 'react'],
      ['Node.js / TypeScript', 'nodejs'],
      ['Angular, Python, PHP', 'backend'],
    ],
  },
];

function MenuArrow() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function ExpertiseMenu({ isVisible, onClose }) {
  const { translate: tr } = useLanguage();
  const categories = getCategories(tr);
  if (!isVisible) return null;

  return (
    <div className="absolute left-1/2 top-full z-[60] isolate w-[min(calc(100vw-2rem),1180px)] -translate-x-1/2 pt-3">
      <div className="navigation-glass-panel rounded-[22px] px-10 py-8">
        <div className="mb-8 flex items-center justify-between">
          <p className="flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#7a6840]"><span className="h-2 w-2 bg-[#f4be32]" />{tr('Nos expertises', 'Our expertise', 'Nuestra experiencia')}</p>
          <Link to="/expertise" onClick={onClose} className="text-sm font-extrabold text-[#081a33] underline decoration-[#f4be32] decoration-2 underline-offset-4">
            {tr('Tout découvrir', 'Explore all', 'Ver todo')}
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-10">
          {categories.map((category) => (
            <div key={category.number}>
              <div className="flex items-baseline gap-3 border-b border-[#081a33]/10 pb-4">
                <span className="text-xs font-extrabold text-[#a27610]">{category.number}</span>
                <h2 className="font-heading text-lg font-extrabold tracking-[-0.025em]">{category.title}</h2>
              </div>
              <ul className="mt-4 space-y-1">
                {category.items.map(([label, anchor]) => (
                  <li key={anchor}>
                    <Link
                      to={`/expertise#${anchor}`}
                      onClick={onClose}
                      className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-semibold text-[#4f5e6e] transition hover:bg-[#efede6] hover:text-[#081a33]"
                    >
                      {label}
                      <span className="translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"><MenuArrow /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpertiseMenu;
