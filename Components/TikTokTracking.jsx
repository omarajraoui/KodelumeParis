import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getMarketingConsent, hasTikTokPixel, setMarketingConsent, trackTikTokPageView } from '../src/analytics/tiktok';

function TikTokTracking() {
  const { pathname } = useLocation();
  const [consent, setConsent] = useState(() => getMarketingConsent());

  useEffect(() => {
    if (consent === 'granted') trackTikTokPageView();
  }, [consent, pathname]);

  useEffect(() => {
    const updateConsent = () => setConsent(getMarketingConsent());
    window.addEventListener('kodelume-consent-updated', updateConsent);
    return () => window.removeEventListener('kodelume-consent-updated', updateConsent);
  }, []);

  if (!hasTikTokPixel() || consent) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-3xl rounded-xl border border-black/15 bg-[#fffefa] p-5 text-[#171714] shadow-[0_18px_55px_rgba(0,0,0,.16)]" aria-label="Préférences de confidentialité">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl text-xs font-medium leading-5 text-black/65">KODELUME utilise, avec votre accord, un traceur TikTok pour mesurer l’efficacité des campagnes publicitaires. Vous pouvez accepter ou refuser sans conséquence sur la navigation.</p>
        <div className="flex shrink-0 gap-2">
          <button type="button" onClick={() => setMarketingConsent('denied')} className="rounded-lg border border-black/20 px-4 py-2.5 text-xs font-extrabold">Refuser</button>
          <button type="button" onClick={() => setMarketingConsent('granted')} className="rounded-lg bg-[#081a33] px-4 py-2.5 text-xs font-extrabold text-white hover:bg-[#f4be32] hover:text-[#081a33]">Accepter</button>
        </div>
      </div>
    </aside>
  );
}

export default TikTokTracking;
