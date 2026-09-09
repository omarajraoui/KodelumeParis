import React from 'react';
import { Link } from 'react-router-dom';
import KodelumeLogo from './KodelumeLogo';
import { LanguageSwitcher } from './LanguageContext';
import { useLanguage } from './language-state';

function Footer() {
  const { translate: tr } = useLanguage();
  return (
    <footer className="bg-[#f3f1eb] text-[#081a33]">
      <div className="mx-auto max-w-[1440px] px-6 py-9 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-7 border-b border-[#071a3b]/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <KodelumeLogo className="h-20 w-24" />
            <p className="mt-3 max-w-md text-xs leading-5 text-[#274363]/55">
              {tr('Produits web, applications mobiles et intelligence artificielle conçus avec exigence.', 'Web products, mobile applications and artificial intelligence built with care.', 'Productos web, aplicaciones móviles e inteligencia artificial desarrollados con rigor.')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold text-[#274363]/65">
            <Link to="/">{tr('Accueil', 'Home', 'Inicio')}</Link>
            <Link to="/expertise">{tr('Expertise', 'Expertise', 'Experiencia')}</Link>
            <Link to="/references">{tr('Références', 'Work', 'Proyectos')}</Link>
            <a href="mailto:contact@kodelume.com" className="text-[#8a6818]">Contact</a>
            <LanguageSwitcher />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-[10px] font-medium tracking-[.02em] text-[#274363]/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 KODELUME · Paris</p>
          <div className="flex gap-5">
            <Link to="/mentions-legales">{tr('Mentions légales', 'Legal notice', 'Aviso legal')}</Link>
            <Link to="/politique-confidentialite">{tr('Confidentialité', 'Privacy', 'Privacidad')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
