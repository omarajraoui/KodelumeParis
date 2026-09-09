import React from 'react';
import { Helmet } from 'react-helmet';

const SITE_URL = 'https://kodelume.com';
const DEFAULT_IMAGE = `${SITE_URL}/kodelume-cover.jpg`;

function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, type = 'website', robots = 'index,follow', schema }) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const absoluteImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet htmlAttributes={{ lang: 'fr' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:locale" content="fr_FR" />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KODELUME" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content="KODELUME — conception et développement de produits digitaux" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {schema ? <script type="application/ld+json">{JSON.stringify(schema)}</script> : null}
    </Helmet>
  );
}

export default Seo;
