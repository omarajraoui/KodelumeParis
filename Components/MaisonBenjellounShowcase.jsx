import React, { useRef } from 'react';

const artworks = {
  blue: { small: '/maison-benjelloun/artwork-001-640.jpg', large: '/maison-benjelloun/artwork-001-1200.jpg' },
  yellow: { small: '/maison-benjelloun/artwork-003-640.jpg', large: '/maison-benjelloun/artwork-003-1200.jpg' },
  pink: { small: '/maison-benjelloun/artwork-005-640.jpg', large: '/maison-benjelloun/artwork-005-1200.jpg' },
};

function MaisonBenjellounShowcase({ compact = false }) {
  const sceneRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch' || !sceneRef.current) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    sceneRef.current.style.setProperty('--scene-rx', `${y * -8}deg`);
    sceneRef.current.style.setProperty('--scene-ry', `${x * 11}deg`);
  };

  const resetScene = () => {
    if (!sceneRef.current) return;
    sceneRef.current.style.setProperty('--scene-rx', '0deg');
    sceneRef.current.style.setProperty('--scene-ry', '0deg');
  };

  return (
    <div
      className={`maison-showcase relative w-full overflow-hidden rounded-xl bg-[#161615] [perspective:1600px] ${compact ? 'h-[430px] sm:h-[520px]' : 'h-[520px] sm:h-[660px]'}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetScene}
    >
      <div className="absolute left-0 top-0 h-full w-[42%] bg-[#2447d8]/28" />
      <div className="absolute bottom-0 right-0 h-[38%] w-[34%] bg-[#dd729a]/22" />

      <div ref={sceneRef} className="maison-showcase-scene absolute inset-6 sm:inset-10">
        <div className="absolute inset-x-[5%] inset-y-[7%] overflow-hidden rounded-lg border border-white/15 bg-[#eee9df] shadow-[0_32px_70px_rgba(0,0,0,0.38)] [transform:translateZ(0)]">
          <div className="flex h-11 items-center justify-between border-b border-black/10 px-4 font-mono text-[8px] uppercase tracking-[0.18em] text-black/55 sm:px-6 sm:text-[9px]">
            <span>Maison Benjelloun</span>
            <span>Paris / France</span>
            <span>Menu</span>
          </div>

          <div className="relative grid h-[calc(100%-2.75rem)] grid-cols-[0.72fr_1.28fr] overflow-hidden">
            <div className="relative z-10 flex flex-col justify-between p-5 sm:p-8">
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/45 sm:text-[9px]">Portrait contemporain</span>
              <h3 className="font-heading text-[clamp(2rem,5vw,5.6rem)] font-black leading-[0.78] tracking-[-0.08em] text-[#10100f]">
                Maison<br />Benjelloun
              </h3>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/45 sm:text-[9px]">Défiler pour explorer</span>
            </div>
            <div className="relative m-3 ml-0 overflow-hidden rounded-md sm:m-5 sm:ml-0">
              <img
                src={artworks.blue.small}
                srcSet={`${artworks.blue.small} 640w, ${artworks.blue.large} 1200w`}
                sizes={compact ? '(max-width: 640px) 55vw, 520px' : '(max-width: 640px) 55vw, 720px'}
                alt="Portrait contemporain bleu de Maison Benjelloun"
                className="h-full w-full object-cover"
                loading={compact ? 'lazy' : 'eager'}
                fetchPriority={compact ? 'low' : 'high'}
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <span className="absolute bottom-4 right-4 font-mono text-[8px] uppercase tracking-[0.18em] text-white sm:bottom-6 sm:right-6 sm:text-[9px]">Œuvre 001</span>
            </div>
          </div>
        </div>

        <div className="absolute -right-2 top-[17%] w-[25%] overflow-hidden rounded-md border border-white/25 bg-[#f0bc2e] p-2 shadow-xl [transform:translateZ(95px)_rotateY(-7deg)] sm:-right-4 sm:p-3">
          <div className="relative aspect-[0.74] overflow-hidden rounded-sm">
            <img src={artworks.yellow.small} srcSet={`${artworks.yellow.small} 640w, ${artworks.yellow.large} 1200w`} sizes="(max-width: 640px) 24vw, 300px" alt="Portrait sur fond jaune" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
          <p className="px-1 pb-1 pt-2 font-mono text-[7px] uppercase tracking-[0.16em] text-black/65 sm:text-[9px]">Étude chromatique / 03</p>
        </div>

        <div className="absolute -bottom-1 left-[10%] w-[20%] overflow-hidden rounded-md border border-white/25 bg-[#d8849d] p-2 shadow-xl [transform:translateZ(120px)_rotateY(8deg)_rotateX(3deg)] sm:-bottom-3 sm:p-3">
          <div className="relative aspect-[0.72] overflow-hidden rounded-sm">
            <img src={artworks.pink.small} srcSet={`${artworks.pink.small} 640w, ${artworks.pink.large} 1200w`} sizes="(max-width: 640px) 20vw, 240px" alt="Portrait sur fond rose" className="h-full w-full object-cover" loading="lazy" decoding="async" />
          </div>
        </div>

        <div className="absolute left-0 top-[13%] border-l-2 border-[#f0bc2e] bg-black/70 px-3 py-2 font-mono text-[7px] uppercase tracking-[0.2em] text-white backdrop-blur-xl [transform:translateZ(135px)] sm:px-4 sm:text-[9px]">
          Three.js / WebGL
        </div>
      </div>

      <p className="absolute bottom-4 right-6 hidden font-mono text-[8px] uppercase tracking-[0.2em] text-white/35 sm:block">Bougez le curseur pour explorer</p>
    </div>
  );
}

export default MaisonBenjellounShowcase;
