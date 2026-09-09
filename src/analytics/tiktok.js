const PIXEL_ID = import.meta.env.VITE_TIKTOK_PIXEL_ID;
const CONSENT_KEY = 'kodelume-marketing-consent';

export function hasTikTokPixel() {
  return Boolean(PIXEL_ID);
}

export function getMarketingConsent() {
  return window.localStorage.getItem(CONSENT_KEY);
}

export function setMarketingConsent(value) {
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new Event('kodelume-consent-updated'));
}

export function loadTikTokPixel() {
  if (!PIXEL_ID || getMarketingConsent() !== 'granted' || window.ttq?.__kodelumeLoaded) return;

  const ttq = window.ttq = window.ttq || [];
  ttq.methods = ['page', 'track', 'identify', 'instances', 'debug', 'on', 'off', 'once', 'ready', 'alias', 'group', 'enableCookie', 'disableCookie'];
  ttq.setAndDefer = (target, method) => {
    target[method] = (...args) => target.push([method, ...args]);
  };
  ttq.methods.forEach((method) => ttq.setAndDefer(ttq, method));
  ttq.instance = (id) => {
    const instance = ttq._i[id] || [];
    ttq.methods.forEach((method) => ttq.setAndDefer(instance, method));
    return instance;
  };
  ttq.load = (id) => {
    const source = 'https://analytics.tiktok.com/i18n/pixel/events.js';
    ttq._i = ttq._i || {};
    ttq._i[id] = [];
    ttq._i[id]._u = source;
    ttq._t = ttq._t || {};
    ttq._t[id] = Date.now();
    ttq._o = ttq._o || {};
    ttq._o[id] = {};
    const script = document.createElement('script');
    script.async = true;
    script.src = `${source}?sdkid=${id}&lib=ttq`;
    document.head.appendChild(script);
  };
  ttq.__kodelumeLoaded = true;
  ttq.load(PIXEL_ID);
}

export function trackTikTokEvent(eventName, properties = {}) {
  if (!PIXEL_ID || getMarketingConsent() !== 'granted') return;
  loadTikTokPixel();
  window.ttq.track(eventName, properties);
}

export function trackTikTokPageView() {
  if (!PIXEL_ID || getMarketingConsent() !== 'granted') return;
  loadTikTokPixel();
  window.ttq.page();
}
