import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
import MaisonBenjellounProject from './MaisonBenjellounProject';
import ArribaSurfProject from './ArribaSurfProject';
import SolProject from './SolProject';
import OraProject from './OraProject';
import Seo from './Seo';
import { useLanguage } from './language-state';

function ProjectPage() {
  const { translate: tr } = useLanguage();
  const { slug } = useParams();
  const isMaisonBenjelloun = slug === 'maison-benjelloun';
  const isArribaSurfCamp = slug === 'arriba-surf-camp';
  const isSol = slug === 'sol';
  const isOra = slug === 'ora';
  const isStaticProject = isMaisonBenjelloun || isArribaSurfCamp || isSol || isOra;
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (slug && !isStaticProject) {
      setLoading(true);
      axios
        .get(`https://kodelume.com/wp-json/wp/v2/pages/?slug=${slug}`)
        .then((response) => {
          if (response.data && response.data.length > 0) {
            setProject(response.data[0]);
          } else {
            setError('not-found');
          }
        })
        .catch((error) => {
          console.error('Error fetching project:', error);
          setError('load-error');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [isStaticProject, slug]);

  if (isMaisonBenjelloun) {
    return <MaisonBenjellounProject />;
  }

  if (isArribaSurfCamp) {
    return <ArribaSurfProject />;
  }

  if (isSol) return <SolProject />;
  if (isOra) return <OraProject />;

  if (loading) {
    return (
      <div className="min-h-screen bg-white font-body">
        <div className="w-full px-6 py-16 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto">
            <Loader />
          </div>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-white font-body">
        <Seo title={tr('Projet non trouvé — KODELUME', 'Project not found — KODELUME', 'Proyecto no encontrado — KODELUME')} description={tr('Ce projet n’est plus disponible.', 'This project is no longer available.', 'Este proyecto ya no está disponible.')} path={`/projects/${slug || ''}`} robots="noindex,nofollow" />
        <div className="w-full px-6 py-16 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-kodelume-gray-100 rounded-lg p-12">
              <div className="w-16 h-16 bg-kodelume-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-kodelume-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h1 className="text-3xl font-heading font-bold text-kodelume-blue mb-4">
                {tr('Projet non trouvé', 'Project not found', 'Proyecto no encontrado')}
              </h1>
              <p className="text-kodelume-gray-600 mb-8">
                {tr("Le projet que vous recherchez n'existe pas ou a été déplacé.", 'The project you are looking for does not exist or has moved.', 'El proyecto que buscas no existe o se ha trasladado.')}
              </p>
              <Link
                to="/references"
                className="inline-flex items-center px-6 py-3 bg-kodelume-blue hover:bg-kodelume-blue/90 text-white font-heading font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {tr('Voir nos références', 'View our work', 'Ver nuestros proyectos')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-body">
      <Seo title={`${project.title?.rendered || tr('Projet', 'Project', 'Proyecto')} — KODELUME`} description={tr(`Découvrez le projet ${project.title?.rendered || ''} conçu et développé par KODELUME.`, `Explore ${project.title?.rendered || 'this project'}, designed and built by KODELUME.`, `Descubre ${project.title?.rendered || 'este proyecto'}, diseñado y desarrollado por KODELUME.`)} path={`/projects/${slug}`} type="article" />
      
      <div className="w-full px-6 py-16 lg:px-12 xl:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/references"
              className="inline-flex items-center text-kodelume-blue hover:text-kodelume-yellow transition-colors duration-300 group"
            >
              <svg className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="font-body font-medium">{tr('Retour aux références', 'Back to work', 'Volver a proyectos')}</span>
            </Link>
          </div>

          {/* Project Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-kodelume-blue mb-6">
              {project.title?.rendered && (
                <span dangerouslySetInnerHTML={{ __html: project.title.rendered }} />
              )}
            </h1>
            
            {project.featured_image && (
              <div className="mb-8 overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src={project.featured_image} 
                  alt={project.title?.rendered}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            )}
          </header>

          {/* Project Content */}
          <div className="prose prose-lg max-w-none font-body">
            <div 
              className="text-lg leading-relaxed text-kodelume-gray-700"
              dangerouslySetInnerHTML={{ __html: project.content?.rendered }} 
            />
          </div>

          {/* Call to Action */}
          <div className="mt-16 pt-12 border-t border-kodelume-gray-200 text-center">
            <h3 className="text-2xl font-heading font-bold text-kodelume-blue mb-4">
              {tr('Vous avez un projet similaire ?', 'Building something similar?', '¿Tienes un proyecto similar?')}
            </h3>
            <p className="text-kodelume-gray-600 mb-8 font-body">
              {tr('Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous aider.', 'Get in touch to discuss your project and how KODELUME can help.', 'Hablemos de tu proyecto y de cómo KODELUME puede ayudarte.')}
            </p>
            <Link
              to="/reserver-un-appel"
              className="inline-flex items-center px-8 py-4 bg-kodelume-yellow hover:bg-kodelume-yellow/90 text-kodelume-dark font-heading font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {tr('Démarrer un projet', 'Start a project', 'Iniciar un proyecto')}
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
