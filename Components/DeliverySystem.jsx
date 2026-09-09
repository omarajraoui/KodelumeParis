import React from 'react';
import { useLanguage } from './language-state';

const getSteps = (tr) => [
  {
    number: '01',
    title: tr('Cadrer', 'Scope', 'Definir'),
    description: tr('Objectifs, usages, contraintes et métrique de succès.', 'Goals, use cases, constraints and success metrics.', 'Objetivos, usos, limitaciones y métricas de éxito.'),
    output: tr('Brief priorisé', 'Prioritised brief', 'Brief priorizado'),
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <circle cx="28" cy="28" r="17" />
        <circle cx="28" cy="28" r="6" />
        <path d="M28 4v10M28 42v10M4 28h10M42 28h10" />
      </svg>
    ),
  },
  {
    number: '02',
    title: tr('Concevoir', 'Design', 'Diseñar'),
    description: tr('Architecture, parcours et prototype testable avant le code.', 'Architecture, journeys and a testable prototype before code.', 'Arquitectura, recorridos y un prototipo comprobable antes del código.'),
    output: tr('Prototype validé', 'Validated prototype', 'Prototipo validado'),
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <rect x="7" y="10" width="42" height="33" rx="2" />
        <path d="M7 18h42M15 14h1M21 14h1M14 25h12v11H14zM31 25h11M31 31h11M31 36h7" />
      </svg>
    ),
  },
  {
    number: '03',
    title: tr('Construire', 'Build', 'Construir'),
    description: tr('Cycles courts, code maintenable et démonstrations régulières.', 'Short cycles, maintainable code and regular demos.', 'Ciclos cortos, código mantenible y demostraciones periódicas.'),
    output: tr('Version testable', 'Testable release', 'Versión comprobable'),
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <rect x="5" y="9" width="46" height="38" rx="2" />
        <path d="M5 18h46M15 29l6-5M15 29l6 5M41 29l-6-5M41 29l-6 5M31 23l-6 13" />
      </svg>
    ),
  },
  {
    number: '04',
    title: tr('Déployer', 'Deploy', 'Desplegar'),
    description: tr('Mise en production, observabilité et amélioration continue.', 'Production launch, observability and continuous improvement.', 'Producción, observabilidad y mejora continua.'),
    output: tr('Produit observé', 'Observable product', 'Producto observable'),
    icon: (
      <svg viewBox="0 0 56 56" aria-hidden="true">
        <path d="M8 43h40M12 38l9-10 8 5 14-18" />
        <circle cx="12" cy="38" r="2" /><circle cx="21" cy="28" r="2" /><circle cx="29" cy="33" r="2" /><circle cx="43" cy="15" r="2" />
      </svg>
    ),
  },
];

function DeliverySystem() {
  const { translate: tr } = useLanguage();
  const steps = getSteps(tr);
  return (
    <div className="delivery-system" aria-label={tr('Processus de réalisation KODELUME en quatre étapes', 'KODELUME four-stage delivery process', 'Proceso KODELUME en cuatro etapas')}>
      <div className="delivery-system__header">
        <div>
          <span className="delivery-system__eyebrow">KODELUME / DELIVERY SYSTEM</span>
          <strong>{tr('Du besoin au produit mesurable', 'From need to measurable product', 'De la necesidad al producto medible')}</strong>
        </div>
        <span className="delivery-system__status"><i aria-hidden="true" />{tr('Processus actif', 'Active process', 'Proceso activo')}</span>
      </div>

      <svg className="delivery-system__route" viewBox="0 0 1000 190" preserveAspectRatio="none" aria-hidden="true">
        <path d="M62 142C172 142 222 66 374 66S515 128 626 128 764 42 938 42" />
      </svg>

      <ol className="delivery-system__steps">
        {steps.map((step) => (
          <li key={step.number} className="delivery-system__step">
            <div className="delivery-system__node"><span>{step.number}</span><i aria-hidden="true" /></div>
            <div className="delivery-system__icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            <div className="delivery-system__output"><span>{tr('Sortie', 'Output', 'Salida')}</span>{step.output}</div>
          </li>
        ))}
      </ol>

      <div className="delivery-system__footer">
        <span>{tr('Décisions visibles', 'Visible decisions', 'Decisiones visibles')}</span>
        <span>{tr('Validation à chaque jalon', 'Validation at every milestone', 'Validación en cada etapa')}</span>
        <span>{tr('Documentation continue', 'Continuous documentation', 'Documentación continua')}</span>
      </div>
    </div>
  );
}

export default DeliverySystem;
