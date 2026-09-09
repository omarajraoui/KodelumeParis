import React from 'react';
import Seo from './Seo';
import { useLanguage } from './language-state';

const missingLegalIdentity = '[À COMPLÉTER : nom légal, statut juridique, adresse et identifiant SIREN/SIRET]';
const missingHost = '[À COMPLÉTER : nom, adresse et coordonnées de l’hébergeur de production]';
const missingRetention = '[À COMPLÉTER : durée de conservation validée par le responsable du traitement]';

function LegalLayout({ eyebrow, title, introduction, children }) {
  return (
    <div className="page-enter min-h-screen bg-[#faf9f5] px-5 pb-24 pt-16 text-[#081a33] sm:px-10 sm:pb-32 sm:pt-24 lg:px-16">
      <div className="mx-auto max-w-[1120px]">
        <header className="grid gap-8 border-b border-[#081a33]/15 pb-12 lg:grid-cols-[.55fr_1.45fr] lg:items-end">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[.2em] text-[#8a6818]">{eyebrow}</p>
          <div><h1 className="font-heading text-5xl font-extrabold leading-[.9] tracking-[-.055em] sm:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-base leading-7 text-[#4f5e6e]">{introduction}</p></div>
        </header>
        <div className="ml-auto mt-6 max-w-[820px] divide-y divide-[#081a33]/12">{children}</div>
      </div>
    </div>
  );
}

function LegalSection({ number, title, children }) {
  return <section className="grid gap-4 py-9 sm:grid-cols-[3rem_1fr]"><span className="font-mono text-[10px] font-bold text-[#a27610]">{number}</span><div><h2 className="font-heading text-xl font-extrabold">{title}</h2><div className="mt-4 space-y-3 text-sm leading-7 text-[#4f5e6e]">{children}</div></div></section>;
}

export function LegalNoticePage() {
  const { translate: tr } = useLanguage();
  return (
    <>
      <Seo title={tr('Mentions légales — KODELUME', 'Legal notice — KODELUME', 'Aviso legal — KODELUME')} description={tr('Informations légales relatives au site KODELUME.', 'Legal information for the KODELUME website.', 'Información legal del sitio web KODELUME.')} path="/mentions-legales" />
      <LegalLayout eyebrow={tr('Informations / 01', 'Information / 01', 'Información / 01')} title={tr('Mentions légales.', 'Legal notice.', 'Aviso legal.')} introduction={tr('Les informations relatives à l’édition, à la publication et à l’utilisation du site KODELUME.', 'Information about the publication and use of the KODELUME website.', 'Información sobre la edición y el uso del sitio web KODELUME.')}>
        <LegalSection number="01" title={tr('Éditeur du site', 'Website publisher', 'Editor del sitio')}><p>KODELUME · Paris · <a className="font-semibold text-[#081a33] underline decoration-[#f4be32] underline-offset-4" href="mailto:contact@kodelume.com">contact@kodelume.com</a></p><p className="rounded-lg border border-[#a27610]/20 bg-[#f4be32]/12 p-3 font-mono text-[10px] text-[#6f561b]">{missingLegalIdentity}</p></LegalSection>
        <LegalSection number="02" title={tr('Responsable de publication', 'Publication director', 'Responsable de publicación')}><p>{tr('Le responsable de publication est le représentant légal de KODELUME.', 'The publication director is KODELUME’s legal representative.', 'El responsable de publicación es el representante legal de KODELUME.')}</p></LegalSection>
        <LegalSection number="03" title={tr('Hébergement', 'Hosting', 'Alojamiento')}><p className="rounded-lg border border-[#a27610]/20 bg-[#f4be32]/12 p-3 font-mono text-[10px] text-[#6f561b]">{missingHost}</p></LegalSection>
        <LegalSection number="04" title={tr('Propriété intellectuelle', 'Intellectual property', 'Propiedad intelectual')}><p>{tr('Les textes, éléments graphiques, interfaces, marques et contenus présentés sur ce site sont protégés. Toute reproduction ou adaptation non autorisée est interdite, sous réserve des droits appartenant aux clients et partenaires présentés.', 'Texts, graphics, interfaces, trademarks and content on this website are protected. Unauthorised reproduction or adaptation is prohibited, subject to the rights of featured clients and partners.', 'Los textos, gráficos, interfaces, marcas y contenidos están protegidos. Queda prohibida su reproducción o adaptación no autorizada, respetando los derechos de clientes y colaboradores.')}</p></LegalSection>
        <LegalSection number="05" title={tr('Responsabilité', 'Liability', 'Responsabilidad')}><p>{tr('KODELUME veille à l’exactitude des informations publiées mais ne garantit pas l’absence permanente d’erreurs ou d’interruptions. Les liens externes relèvent de la responsabilité de leurs éditeurs.', 'KODELUME takes care over published information but cannot guarantee the permanent absence of errors or interruptions. External websites remain under their publishers’ responsibility.', 'KODELUME cuida la información publicada, pero no garantiza la ausencia permanente de errores o interrupciones. Los sitios externos son responsabilidad de sus editores.')}</p></LegalSection>
        <LegalSection number="06" title={tr('Contact', 'Contact', 'Contacto')}><p>{tr('Pour toute question relative au site ou à son contenu :', 'For questions about this website or its content:', 'Para cualquier consulta sobre este sitio o su contenido:')} <a className="font-semibold text-[#081a33]" href="mailto:contact@kodelume.com">contact@kodelume.com</a>.</p></LegalSection>
      </LegalLayout>
    </>
  );
}

export function PrivacyPage() {
  const { translate: tr } = useLanguage();
  return (
    <>
      <Seo title={tr('Politique de confidentialité — KODELUME', 'Privacy policy — KODELUME', 'Política de privacidad — KODELUME')} description={tr('Données, traceurs et droits des visiteurs du site KODELUME.', 'Data, tracking and visitor rights on the KODELUME website.', 'Datos, seguimiento y derechos de los visitantes de KODELUME.')} path="/politique-confidentialite" />
      <LegalLayout eyebrow={tr('Confidentialité / 02', 'Privacy / 02', 'Privacidad / 02')} title={tr('Vos données, sans zone grise.', 'Your data, clearly explained.', 'Tus datos, sin zonas grises.')} introduction={tr('Cette page décrit uniquement les traitements effectivement présents dans le site actuel.', 'This page describes only the processing present in the current website.', 'Esta página describe únicamente los tratamientos presentes en el sitio actual.')}>
        <LegalSection number="01" title={tr('Données collectées', 'Data collected', 'Datos recopilados')}><p>{tr('Le formulaire de réservation peut recueillir votre nom, adresse e-mail, téléphone facultatif, description du projet, date et créneau souhaités.', 'The booking form may collect your name, email address, optional phone number, project description, requested date and time.', 'El formulario de reserva puede recopilar nombre, correo, teléfono opcional, descripción del proyecto, fecha y hora solicitadas.')}</p></LegalSection>
        <LegalSection number="02" title={tr('Finalités', 'Purposes', 'Finalidades')}><p>{tr('Ces informations servent uniquement à répondre à votre demande, préparer l’échange et assurer le suivi de la relation commerciale.', 'This information is used only to answer your request, prepare the call and follow up the business relationship.', 'Esta información se usa únicamente para responder, preparar la llamada y realizar el seguimiento comercial.')}</p></LegalSection>
        <LegalSection number="03" title={tr('Services destinataires', 'Service providers', 'Proveedores')}><p>{tr('Les demandes sont transmises à KODELUME par FormSubmit. Les données nécessaires à cet envoi sont donc traitées par ce service tiers selon ses propres conditions.', 'Requests are transmitted to KODELUME through FormSubmit. Data required for delivery is therefore processed by this third-party service under its own terms.', 'Las solicitudes se envían a KODELUME mediante FormSubmit. Los datos necesarios son tratados por este tercero según sus propias condiciones.')}</p></LegalSection>
        <LegalSection number="04" title={tr('Mesure publicitaire TikTok', 'TikTok advertising measurement', 'Medición publicitaria de TikTok')}><p>{tr('Le pixel TikTok n’est chargé que si un identifiant de pixel est configuré et après votre consentement explicite. Vous pouvez refuser sans limiter la navigation.', 'The TikTok pixel loads only when a pixel identifier is configured and after your explicit consent. Refusal does not restrict browsing.', 'El píxel de TikTok solo se carga si está configurado y tras tu consentimiento explícito. Rechazarlo no limita la navegación.')}</p></LegalSection>
        <LegalSection number="05" title={tr('Stockage local', 'Local storage', 'Almacenamiento local')}><p>{tr('Le navigateur conserve votre langue préférée. Si le pixel TikTok est activé, il conserve également votre choix de consentement. Ces préférences ne sont pas utilisées pour créer un compte.', 'The browser stores your preferred language. If TikTok tracking is enabled, it also stores your consent choice. These preferences are not used to create an account.', 'El navegador guarda tu idioma y, si TikTok está habilitado, tu elección de consentimiento. No se usan para crear una cuenta.')}</p></LegalSection>
        <LegalSection number="06" title={tr('Conservation', 'Retention', 'Conservación')}><p className="rounded-lg border border-[#a27610]/20 bg-[#f4be32]/12 p-3 font-mono text-[10px] text-[#6f561b]">{missingRetention}</p></LegalSection>
        <LegalSection number="07" title={tr('Vos droits', 'Your rights', 'Tus derechos')}><p>{tr('Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que vous opposer à leur traitement, en écrivant à', 'You may request access, correction or deletion of your data, or object to its processing, by writing to', 'Puedes solicitar acceso, rectificación o supresión de tus datos, u oponerte a su tratamiento, escribiendo a')} <a className="font-semibold text-[#081a33]" href="mailto:contact@kodelume.com">contact@kodelume.com</a>.</p></LegalSection>
      </LegalLayout>
    </>
  );
}
