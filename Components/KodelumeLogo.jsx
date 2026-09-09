import React, { useId } from 'react';
import kodelumeSource from '../src/assets/kodelumeWhite-512.png';

const logoViews = {
  full: '70 115 884 760',
  lamp: '230 125 564 580',
};

function KodelumeLogo({ className = '', decorative = false, variant = 'full' }) {
  const filterId = `kodelume-alpha-${useId().replaceAll(':', '')}`;
  const label = variant === 'lamp' ? 'Symbole Kodelume' : 'KODELUME';

  return (
    <svg
      className={className}
      viewBox={logoViews[variant] ?? logoViews.full}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? 'true' : undefined}
      aria-label={decorative ? undefined : label}
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <filter id={filterId} colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                   -1 -1 -1 0 3"
          />
        </filter>
      </defs>
      <image
        href={kodelumeSource}
        width="1024"
        height="1024"
        filter={`url(#${filterId})`}
      />
    </svg>
  );
}

export default KodelumeLogo;
