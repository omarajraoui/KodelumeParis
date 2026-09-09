import React, { useEffect, useMemo, useState } from 'react';
import Seo from './Seo';
import { trackTikTokEvent } from '../src/analytics/tiktok';
import { useLanguage } from './language-state';

const timeSlots = ['09:30', '11:00', '14:00', '16:30'];

function getAvailableDates(locale) {
  const dates = [];
  const cursor = new Date();
  cursor.setHours(12, 0, 0, 0);
  cursor.setDate(cursor.getDate() + 1);

  while (dates.length < 10) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      dates.push({
        iso: cursor.toISOString().slice(0, 10),
        weekday: new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(cursor).replace('.', ''),
        day: new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(cursor),
        month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(cursor).replace('.', ''),
        full: new Intl.DateTimeFormat(locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(cursor),
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return dates;
}

function ClockIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path strokeLinecap="round" d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

function FieldError({ id, message }) {
  if (!message) return null;
  return <span id={id} role="alert" className="mt-2 block text-[11px] font-semibold text-[#b42318]">{message}</span>;
}

function BookingPage() {
  const { language, translate: tr } = useLanguage();
  const locale = language === 'fr' ? 'fr-FR' : language === 'es' ? 'es-ES' : 'en-GB';
  const availableDates = useMemo(() => getAvailableDates(locale), [locale]);
  const [selectedDate, setSelectedDate] = useState(availableDates[0]);
  const [selectedTime, setSelectedTime] = useState(timeSlots[0]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setSelectedDate((current) => availableDates.find((date) => date.iso === current?.iso) || availableDates[0]);
  }, [availableDates]);

  const clearError = (field) => {
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('Nom') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('Téléphone') || '').trim();
    const project = String(data.get('Projet') || '').trim();
    const nextErrors = {};

    if (!/^[\p{L}][\p{L}\p{M}'’ -]{1,79}$/u.test(name)) {
      nextErrors.Nom = tr('Indiquez un nom valide contenant au moins 2 lettres.', 'Enter a valid name with at least 2 letters.', 'Indica un nombre válido de al menos 2 letras.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      nextErrors.email = tr('Saisissez une adresse e-mail valide, par exemple nom@entreprise.fr.', 'Enter a valid email address, for example name@company.com.', 'Introduce un correo válido, por ejemplo nombre@empresa.com.');
    }
    if (phone) {
      const digitCount = phone.replace(/\D/g, '').length;
      if (!/^\+?[0-9 ().-]+$/.test(phone) || digitCount < 8 || digitCount > 15) {
        nextErrors['Téléphone'] = tr('Utilisez un numéro valide de 8 à 15 chiffres.', 'Use a valid phone number with 8 to 15 digits.', 'Usa un número válido de 8 a 15 dígitos.');
      }
    }
    if (project.length < 20) {
      nextErrors.Projet = tr('Ajoutez au moins 20 caractères pour donner un premier contexte.', 'Add at least 20 characters to provide some context.', 'Añade al menos 20 caracteres para dar contexto.');
    } else if (project.length > 1500) {
      nextErrors.Projet = tr('Le message ne peut pas dépasser 1 500 caractères.', 'The message cannot exceed 1,500 characters.', 'El mensaje no puede superar los 1.500 caracteres.');
    }

    if (Object.keys(nextErrors).length > 0) {
      event.preventDefault();
      setErrors(nextErrors);
      const firstInvalidField = form.elements.namedItem(Object.keys(nextErrors)[0]);
      firstInvalidField?.focus();
      return;
    }

    trackTikTokEvent('Lead', { content_name: 'booking_request' });
  };

  return (
    <div className="booking-page page-enter min-h-screen bg-[#ebe8df] px-4 py-8 text-[#171714] sm:px-8 sm:py-14 lg:px-12">
      <Seo
        title={tr('Réserver un appel de 30 minutes — KODELUME', 'Book a 30-minute call — KODELUME', 'Reserva una llamada de 30 minutos — KODELUME')}
        description={tr('Choisissez un créneau de 30 minutes pour présenter votre projet web, mobile ou IA à KODELUME et clarifier la prochaine étape.', 'Choose a 30-minute slot to discuss your web, mobile or AI project with KODELUME.', 'Elige una cita de 30 minutos para presentar tu proyecto web, móvil o IA a KODELUME.')}
        path="/reserver-un-appel"
        robots="noindex,follow"
      />

      <div className="mx-auto grid max-w-[1180px] overflow-hidden rounded-2xl border border-black/10 bg-[#f8f6f0] shadow-[0_20px_60px_rgba(32,30,24,0.07)] lg:min-h-[760px] lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="flex flex-col justify-between border-b border-black/10 bg-[#f2efe6] p-7 text-center sm:p-10 lg:border-b-0 lg:border-r lg:p-12 lg:text-left">
          <div>
            <p className="flex items-center justify-center gap-3 text-[10px] font-extrabold uppercase tracking-[0.24em] text-black/50 lg:justify-start">
              <span aria-hidden="true" className="h-2.5 w-2.5 bg-[#ffd21c]" />
              {tr('Premier échange', 'First conversation', 'Primera conversación')}
            </p>
            <h1 className="mt-8 font-heading text-4xl font-extrabold leading-[0.94] tracking-[-0.05em] sm:mt-10 sm:text-6xl">{tr('Parlons de votre projet.', "Let's discuss your project.", 'Hablemos de tu proyecto.')}</h1>
            <p className="mx-auto mt-6 max-w-sm text-base font-medium leading-7 text-black/55 lg:mx-0">
              {tr('Un échange simple et concret pour comprendre votre besoin, clarifier les priorités et identifier la meilleure prochaine étape.', 'A focused conversation to understand your needs, clarify priorities and identify the right next step.', 'Una conversación concreta para entender tus necesidades, aclarar prioridades e identificar el siguiente paso.')}
            </p>
          </div>

          <div className="mt-12 space-y-4 border-t border-black/15 pt-7 text-sm font-semibold text-black/55 sm:mt-16">
            <p className="flex items-center justify-center gap-3 lg:justify-start"><ClockIcon /> 30 minutes</p>
            <p>{tr('Visioconférence', 'Video call', 'Videollamada')} · Europe/Paris</p>
            <p>{tr('Sans engagement', 'No commitment', 'Sin compromiso')}</p>
          </div>
        </aside>

        <main className="bg-[#fffefa] p-6 sm:p-10 lg:p-12">
          <form action="https://formsubmit.co/omarajraoui4@gmail.com" method="POST" noValidate onSubmit={handleSubmit}>
            <input type="hidden" name="_subject" value="Nouvelle demande d’appel — KODELUME" />
            <input type="hidden" name="Date souhaitée" value={selectedDate.full} />
            <input type="hidden" name="Créneau souhaité" value={`${selectedTime} — Europe/Paris`} />
            <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

            <fieldset>
              <legend className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/45">{tr('1. Choisissez une date', '1. Choose a date', '1. Elige una fecha')}</legend>
              <div className="mt-5 grid grid-cols-5 gap-2 sm:gap-3">
                {availableDates.map((date) => {
                  const selected = selectedDate.iso === date.iso;
                  return (
                    <button
                      key={date.iso}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setSelectedDate(date)}
                      className={`relative flex min-h-20 flex-col items-center justify-center rounded-lg border px-1 transition sm:min-h-24 ${selected ? 'border-black bg-[#171714] text-white' : 'border-black/15 bg-[#f7f4ec] text-black/65 hover:border-black/45 hover:bg-white'}`}
                    >
                      {selected && <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-[#ffd21c]" />}
                      <span className="text-[9px] font-extrabold uppercase tracking-[0.12em] opacity-60">{date.weekday}</span>
                      <span className="mt-1 text-xl font-black sm:text-2xl">{date.day}</span>
                      <span className="text-[9px] font-bold uppercase opacity-60">{date.month}</span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-9">
              <legend className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/45">{tr('2. Choisissez un créneau', '2. Choose a time', '2. Elige una hora')}</legend>
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {timeSlots.map((time) => {
                  const selected = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => setSelectedTime(time)}
                      className={`rounded-lg border px-3 py-3.5 text-sm font-extrabold transition ${selected ? 'border-black bg-[#171714] text-white' : 'border-black/15 bg-[#f7f4ec] text-black/60 hover:border-black/45 hover:bg-white hover:text-black'}`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-9">
              <legend className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/45">{tr('3. Vos coordonnées', '3. Your details', '3. Tus datos')}</legend>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-bold text-black/55">
                  {tr('Nom', 'Name', 'Nombre')}
                  <input required name="Nom" type="text" autoComplete="name" minLength="2" maxLength="80" aria-invalid={Boolean(errors.Nom)} aria-describedby={errors.Nom ? 'name-error' : undefined} onChange={() => clearError('Nom')} className={`mt-2 w-full rounded-lg border bg-[#f7f4ec] px-4 py-3.5 text-sm font-semibold text-black outline-none transition focus:bg-white ${errors.Nom ? 'border-[#b42318] focus:border-[#b42318]' : 'border-black/15 focus:border-black'}`} />
                  <FieldError id="name-error" message={errors.Nom} />
                </label>
                <label className="text-xs font-bold text-black/55">
                  E-mail
                  <input required name="email" type="email" inputMode="email" autoComplete="email" maxLength="254" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} onChange={() => clearError('email')} className={`mt-2 w-full rounded-lg border bg-[#f7f4ec] px-4 py-3.5 text-sm font-semibold text-black outline-none transition focus:bg-white ${errors.email ? 'border-[#b42318] focus:border-[#b42318]' : 'border-black/15 focus:border-black'}`} />
                  <FieldError id="email-error" message={errors.email} />
                </label>
                <label className="text-xs font-bold text-black/55 sm:col-span-2">
                  {tr('Téléphone', 'Phone', 'Teléfono')} <span className="font-medium opacity-50">({tr('facultatif', 'optional', 'opcional')})</span>
                  <input name="Téléphone" type="tel" inputMode="tel" autoComplete="tel" maxLength="24" aria-invalid={Boolean(errors['Téléphone'])} aria-describedby={errors['Téléphone'] ? 'phone-error' : undefined} onChange={() => clearError('Téléphone')} className={`mt-2 w-full rounded-lg border bg-[#f7f4ec] px-4 py-3.5 text-sm font-semibold text-black outline-none transition focus:bg-white ${errors['Téléphone'] ? 'border-[#b42318] focus:border-[#b42318]' : 'border-black/15 focus:border-black'}`} />
                  <FieldError id="phone-error" message={errors['Téléphone']} />
                </label>
                <label className="text-xs font-bold text-black/55 sm:col-span-2">
                  {tr('Quelques mots sur votre projet', 'A few words about your project', 'Cuéntanos brevemente tu proyecto')}
                  <textarea required name="Projet" rows="3" minLength="20" maxLength="1500" aria-invalid={Boolean(errors.Projet)} aria-describedby={errors.Projet ? 'project-hint project-error' : 'project-hint'} onChange={() => clearError('Projet')} className={`mt-2 w-full resize-none rounded-lg border bg-[#f7f4ec] px-4 py-3.5 text-sm font-semibold text-black outline-none transition focus:bg-white ${errors.Projet ? 'border-[#b42318] focus:border-[#b42318]' : 'border-black/15 focus:border-black'}`} />
                  <span id="project-hint" className="mt-2 block text-[10px] font-medium text-black/35">20 à 1 500 caractères</span>
                  <FieldError id="project-error" message={errors.Projet} />
                </label>
              </div>
            </fieldset>

            <button type="submit" className="mt-7 inline-flex w-full items-center justify-center gap-3 bg-[#171714] px-6 py-4 text-sm font-extrabold text-white transition hover:bg-[#ffd21c] hover:text-black">
              {tr('Confirmer la demande pour le', 'Request this slot:', 'Solicitar esta cita:')} {selectedDate.day} {selectedDate.month} {tr('à', 'at', 'a las')} {selectedTime} <ArrowIcon />
            </button>
            <p className="mt-4 text-center text-[10px] font-semibold leading-5 text-black/35">{tr('La demande sera envoyée à KODELUME. Le créneau est confirmé après réponse par e-mail.', 'Your request will be sent to KODELUME. The slot is confirmed by email.', 'La solicitud se enviará a KODELUME. La cita se confirma por correo.')}</p>
          </form>
        </main>
      </div>
    </div>
  );
}

export default BookingPage;
