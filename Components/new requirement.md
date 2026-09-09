# 🚀 KODELUME WEBSITE SPEC — REACT + WORDPRESS HEADLESS

**Slogan**: *Igniting Digital Brilliance*

**Stack**:  
- Frontend: React + Tailwind CSS  
- Backend: WordPress (headless, REST API)  
- CMS API: `https://kodelume.com/wp-json/wp/v2/pages/?slug={slug}`

---

## 🎨 BRAND DESIGN SYSTEM

**Colors (Tailwind tokens)**:
- Primary Yellow: `#facc15` (`kodelume-yellow`)
- Blue: `#2563eb` (`kodelume-blue`)
- Pink Accent: `#ec4899`
- Background: `#f8fafc` (`kodelume-white`)
- Text Dark: `#1e293b`
- Text Gray: `#475569`

**Fonts**:
- Heading: `Poppins`, fallback `sans-serif`
- Body: `Inter`, fallback `sans-serif`

Extend Tailwind config:

```js
fontFamily: {
  heading: ['Poppins', 'sans-serif'],
  body: ['Inter', 'sans-serif'],
},
colors: {
  kodelume: {
    blue: '#2563eb',
    pink: '#ec4899',
    yellow: '#facc15',
    white: '#f8fafc',
    dark: '#1e293b',
    gray: '#475569',
  },
},
🧱 PAGE ROUTES
Page	Path	Type
Home	/	Static ✅
Expertise	/expertise	Static
References	/references	Static
Project Page	/projects/:slug	Dynamic
Contact	#contact section	Anchor

🧠 NAVBAR REQUIREMENTS
Main Links
Accueil → /

Expertise → Dropdown menu

Références → Dropdown menu with 6 projects

Contact → Button href="#contact"

🧩 Expertise Dropdown
Group into 4 columns inside a mega-menu:

Développement

Applications mobiles

Logiciels métier

Sites e-commerce

Applications SaaS

Stratégie produit

Product Discovery

UX Research

UX/UI Design

Data & IA

IA Générative

Computer Vision

Systèmes prédictifs

Data Engineering

Conseil & Technique

Cloud & DevOps

Transformation digitale

React / React Native

Node.js / TypeScript

Angular, Python, PHP

Flutter, .NET, natif

Dropdown opens on hover (desktop), accordion (mobile).
Each item may link to /expertise#section.

📁 References Dropdown
Show 6 project titles with 2-column grid layout.
Each item links to /projects/{slug}

Example:

HR AI Assistant → /projects/hr-ai-assistant

E-commerce Dashboard → /projects/ecommerce-dashboard

Fleet Mobile App → /projects/fleet-app

GPT Quotation Bot → /projects/gpt-bot

SaaS CRM Tool → /projects/crm-saas

Finance Predictive AI → /projects/finance-predictive

📄 Expertise Page /expertise
Backend Setup:

Create WP page slug expertise

Add HTML content: 3 sections (dev, IA, design)

Frontend:

Fetch page via Axios

Display:

Page title (text-5xl font-bold text-kodelume-blue)

Render page.content.rendered with dangerouslySetInnerHTML

Section backgrounds: white/light, spacing py-16 px-6

📄 References Page /references
Backend Setup:

WP page slug: references

Add 6–8 project blocks (title + content)

Frontend:

Fetch page

Display grid layout of cards:

Title (text-xl font-bold text-kodelume-blue)

Description (text-gray-600)

Optional: image or preview

Card styles:
bg-white p-6 rounded-xl shadow hover:shadow-lg transition transform hover:scale-105

🧾 Project Detail Page /projects/:slug
Dynamic route

Fetch data from /pages/?slug={slug}

Display:

Title

Body content

Optional image

Back button

🧩 Components to Build
Navbar.jsx – Folding menus

ExpertiseMenu.jsx – 4-column mega menu

ReferencesMenu.jsx – 2-column project links

ProjectPage.jsx – Dynamic project page

CardProject.jsx – Reusable case card

Layout.jsx – Page wrapper

Loader.jsx – Centered spinner for loading states

✅ Checklist
 Tailwind config with colors/fonts

 Create Expertise WP page + content

 Create References WP page + content

 Build /expertise rendering logic

 Build /references grid

 Create /projects/:slug dynamic page

 Build Navbar with dropdowns

 Apply brand styling globally

 Add animation (scroll, hover, CTA)

 Deploy to Vercel / Netlify

End of Spec

yaml
Copier
Modifier

---
