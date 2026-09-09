import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ExpertiseMenu from './ExpertiseMenu';
import ReferencesMenu from './ReferencesMenu';
import KodelumeLogo from './KodelumeLogo';
import { LanguageSwitcher } from './LanguageContext';
import { useLanguage } from './language-state';

function Brand() {
  return (
    <KodelumeLogo className="h-11 w-14 sm:h-12 sm:w-16" />
  );
}

function Chevron({ open }) {
  return (
    <svg aria-hidden="true" className={`h-4 w-4 transition ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
    </svg>
  );
}

function Navbar() {
  const { translate: tr } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMenu, setDesktopMenu] = useState(null);
  const [mobileSection, setMobileSection] = useState(null);
  const desktopCloseTimer = useRef(null);
  const { pathname } = useLocation();

  const cancelDesktopClose = () => {
    if (desktopCloseTimer.current) {
      window.clearTimeout(desktopCloseTimer.current);
      desktopCloseTimer.current = null;
    }
  };

  const openDesktopMenu = (menu) => {
    cancelDesktopClose();
    setDesktopMenu(menu);
  };

  const scheduleDesktopClose = () => {
    cancelDesktopClose();
    desktopCloseTimer.current = window.setTimeout(() => {
      setDesktopMenu(null);
      desktopCloseTimer.current = null;
    }, 220);
  };

  useEffect(() => () => {
    if (desktopCloseTimer.current) window.clearTimeout(desktopCloseTimer.current);
  }, []);

  const closeMenus = () => {
    cancelDesktopClose();
    setMobileOpen(false);
    setDesktopMenu(null);
    setMobileSection(null);
  };

  const toggleMobileSection = (section) => {
    setMobileSection((current) => (current === section ? null : section));
  };

  return (
    <header className={`${pathname === '/' ? 'fixed' : 'sticky'} left-0 right-0 top-0 z-50 px-3 py-3 text-[#081a33]`}>
      <nav className="navigation-glass relative mx-auto flex h-[72px] max-w-[1040px] items-center justify-between rounded-[20px] px-4 sm:px-6" aria-label="Navigation principale">
        <Link to="/" onClick={closeMenus} aria-label="Kodelume — Accueil">
          <Brand />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          <Link
            to="/"
            onClick={closeMenus}
            className={`rounded-lg px-4 py-2.5 text-xs font-bold transition ${pathname === '/' ? 'bg-[#eceae3] text-[#081a33]' : 'hover:bg-[#f0eee8]'}`}
          >
            {tr('Accueil', 'Home', 'Inicio')}
          </Link>

          <div className="flex h-full items-center" onMouseEnter={() => openDesktopMenu('expertise')} onMouseLeave={scheduleDesktopClose} onFocusCapture={() => openDesktopMenu('expertise')} onBlurCapture={scheduleDesktopClose}>
            <Link
              to="/expertise"
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition ${pathname === '/expertise' || desktopMenu === 'expertise' ? 'bg-[#eceae3] text-[#081a33]' : 'hover:bg-[#f0eee8]'}`}
            >
              {tr('Expertise', 'Expertise', 'Experiencia')} <Chevron open={desktopMenu === 'expertise'} />
            </Link>
            <ExpertiseMenu isVisible={desktopMenu === 'expertise'} onClose={closeMenus} />
          </div>

          <div className="flex h-full items-center" onMouseEnter={() => openDesktopMenu('references')} onMouseLeave={scheduleDesktopClose} onFocusCapture={() => openDesktopMenu('references')} onBlurCapture={scheduleDesktopClose}>
            <Link
              to="/references"
              className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-bold transition ${pathname === '/references' || desktopMenu === 'references' ? 'bg-[#eceae3] text-[#081a33]' : 'hover:bg-[#f0eee8]'}`}
            >
              {tr('Références', 'Work', 'Proyectos')} <Chevron open={desktopMenu === 'references'} />
            </Link>
            <ReferencesMenu isVisible={desktopMenu === 'references'} onClose={closeMenus} />
          </div>
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link to="/reserver-un-appel" onClick={closeMenus} className="inline-flex items-center rounded-lg bg-[#081a33] px-5 py-3 text-xs font-extrabold text-white shadow-[0_8px_18px_rgba(8,26,51,0.16)] transition hover:-translate-y-0.5 hover:bg-[#f4be32] hover:text-[#081a33]">
            {tr('Réserver un appel', 'Book a call', 'Reservar una llamada')}
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-[#081a33]/10 bg-[#f0eee8] text-[#081a33] lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="relative h-4 w-5">
            <span className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`absolute bottom-1 left-0 h-0.5 w-5 bg-current transition ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </nav>

      <div id="mobile-navigation" className={`mx-auto mt-2 max-w-[1040px] rounded-[20px] border border-white/70 bg-[#faf9f5]/95 shadow-[0_14px_36px_rgba(8,26,51,0.12)] backdrop-blur-2xl lg:hidden ${mobileOpen ? 'block' : 'hidden'}`}>
        <div className="px-6 py-6">
          <div className="flex items-center justify-between border-b border-[#081a33]/10 py-3"><span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#071a3b]/40">{tr('Langue', 'Language', 'Idioma')}</span><LanguageSwitcher /></div>
          <Link to="/" onClick={closeMenus} className="block border-b border-[#081a33]/10 py-4 text-lg font-extrabold">{tr('Accueil', 'Home', 'Inicio')}</Link>

          <button type="button" onClick={() => toggleMobileSection('expertise')} className="flex w-full items-center justify-between border-b border-[#081a33]/10 py-4 text-left text-lg font-extrabold">
            {tr('Expertise', 'Expertise', 'Experiencia')} <Chevron open={mobileSection === 'expertise'} />
          </button>
          {mobileSection === 'expertise' ? (
            <div className="grid grid-cols-2 gap-2 border-b border-[#081a33]/10 py-4 text-sm font-semibold text-[#274363]/65">
              {[
                tr('Applications mobiles', 'Mobile applications', 'Aplicaciones móviles'),
                tr('Logiciels métier', 'Business software', 'Software empresarial'),
                'E-commerce', 'SaaS', 'UX/UI Design',
                tr('IA générative', 'Generative AI', 'IA generativa'),
              ].map((item) => (
                <Link key={item} to="/expertise" onClick={closeMenus} className="rounded-lg bg-[#efede6] px-3 py-3">{item}</Link>
              ))}
            </div>
          ) : null}

          <button type="button" onClick={() => toggleMobileSection('references')} className="flex w-full items-center justify-between border-b border-[#081a33]/10 py-4 text-left text-lg font-extrabold">
            {tr('Références', 'Work', 'Proyectos')} <Chevron open={mobileSection === 'references'} />
          </button>
          {mobileSection === 'references' ? (
            <div className="grid grid-cols-2 gap-2 border-b border-[#081a33]/10 py-4 text-sm font-semibold text-[#274363]/65">
              {[
                ['Maison Benjelloun', '/projects/maison-benjelloun'],
                ['Arriba Surf Camp', '/projects/arriba-surf-camp'],
                ['Sol Research Companion', '/projects/sol'],
                ['ORA', '/projects/ora'],
              ].map(([item, destination]) => (
                <Link key={item} to={destination} onClick={closeMenus} className="rounded-lg bg-[#efede6] px-3 py-3">{item}</Link>
              ))}
            </div>
          ) : null}

          <Link to="/reserver-un-appel" onClick={closeMenus} className="mt-6 block rounded-lg bg-[#081a33] px-5 py-3.5 text-center text-sm font-extrabold text-white">{tr('Réserver un appel', 'Book a call', 'Reservar una llamada')}</Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
