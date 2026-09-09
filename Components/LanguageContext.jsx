import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { LanguageContext, supportedLanguages, useLanguage } from './language-state';

function getInitialLanguage() {
  const saved = window.localStorage.getItem('kodelume-language');
  if (supportedLanguages.includes(saved)) return saved;
  const browserLanguage = window.navigator.language?.slice(0, 2).toLowerCase();
  return supportedLanguages.includes(browserLanguage) ? browserLanguage : 'fr';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem('kodelume-language', language);
  }, [language]);

  const translate = useCallback((french, english, spanish) => {
    if (language === 'en') return english;
    if (language === 'es') return spanish || english;
    return french;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, translate }), [language, translate]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function LanguageSwitcher({ light = false }) {
  const { language, setLanguage, translate } = useLanguage();
  return (
    <div className={`inline-flex items-center rounded-full border p-0.5 ${light ? 'border-white/20' : 'border-[#081a33]/10 bg-[#f2f0ea]'}`} role="group" aria-label={translate('Choisir la langue', 'Choose language', 'Elegir idioma')}>
      {supportedLanguages.map((item) => (
        <button key={item} type="button" onClick={() => setLanguage(item)} aria-pressed={language === item} className={`rounded-full px-2 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.08em] transition ${language === item ? (light ? 'bg-white text-[#081a33]' : 'bg-[#081a33] text-white') : (light ? 'text-white/55 hover:text-white' : 'text-[#081a33]/45 hover:text-[#081a33]')}`}>
          {item}
        </button>
      ))}
    </div>
  );
}
