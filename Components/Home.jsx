import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import axios from 'axios';

function Home() {
  const [posts, setPosts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade-in animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Fetch WordPress posts for additional content
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://kodelume.com/wp-json/wp/v2/posts');
        setPosts(response.data.slice(0, 3)); // Get only first 3 posts
      } catch (error) {
        console.error('Erreur lors de la récupération des posts:', error);
      }
    };

    fetchPosts();
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full">
      <Helmet>
        <title>KodeLume - Solutions Digitales Innovantes | Illuminating Digital Solutions</title>
        <meta name="description" content="Solutions digitales sur mesure : sites web, applications IA et apps mobile. Illuminez votre présence digitale avec KodeLume." />
      </Helmet>

      {/* Hero Section */}
      <section className={`min-h-screen bg-gradient-to-br from-white via-kodelume-light to-gray-50 w-full flex items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="w-full px-6 py-20 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-bold text-kodelume-dark mb-8 drop-shadow-sm leading-tight">
              Solutions Digitales
              <span className="block text-kodelume-primary">Innovantes</span>
            </h1>

            {/* Slogan */}
            <p className="text-2xl md:text-3xl lg:text-4xl font-montserrat font-light text-gray-600 mb-6">
              Illuminating Digital Solutions
            </p>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-500 max-w-4xl mx-auto mb-12 font-montserrat leading-relaxed">
              Développement de sites web sur mesure, applications d'intelligence artificielle 
              et solutions mobile pour propulser votre entreprise vers l'excellence digitale.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                to="/references"
                className="bg-kodelume-primary text-white hover:bg-indigo-700 font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-lg min-w-48"
              >
                Voir nos Projets
              </Link>
              <a
                href="#contact"
                className="bg-kodelume-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-lg min-w-48"
              >
                Devis Gratuit
              </a>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-kodelume-primary mb-2 font-montserrat">50+</div>
                <div className="text-gray-600 font-montserrat">Projets Réalisés</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-kodelume-primary mb-2 font-montserrat">30+</div>
                <div className="text-gray-600 font-montserrat">Clients Satisfaits</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-kodelume-primary mb-2 font-montserrat">5</div>
                <div className="text-gray-600 font-montserrat">Villes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-kodelume-primary mb-2 font-montserrat">100%</div>
                <div className="text-gray-600 font-montserrat">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kodelume-dark mb-6">
                Nos Expertises
              </h2>
              <p className="text-xl text-kodelume-gray-600 max-w-3xl mx-auto font-montserrat">
                Des solutions sur mesure pour transformer vos idées en réalité digitale
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Sites Web */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-kodelume-primary to-indigo-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kodelume-dark mb-4 font-montserrat">Sites Web</h3>
                <p className="text-kodelume-gray-600 mb-6 font-montserrat leading-relaxed">
                  Sites vitrine, e-commerce et applications web sur mesure avec les dernières technologies.
                </p>
                <div className="text-kodelume-secondary font-bold font-montserrat">À partir de 2,500€</div>
              </div>

              {/* Applications IA */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-kodelume-secondary to-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kodelume-dark mb-4 font-montserrat">Applications IA</h3>
                <p className="text-kodelume-gray-600 mb-6 font-montserrat leading-relaxed">
                  Chatbots intelligents, automatisation et solutions d'IA personnalisées pour votre business.
                </p>
                <div className="text-kodelume-secondary font-bold font-montserrat">À partir de 3,000€</div>
              </div>

              {/* Apps Mobile */}
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105 group border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-kodelume-accent to-emerald-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-kodelume-dark mb-4 font-montserrat">Apps Mobile</h3>
                <p className="text-kodelume-gray-600 mb-6 font-montserrat leading-relaxed">
                  Applications natives et hybrides pour iOS et Android, adaptées à vos besoins spécifiques.
                </p>
                <div className="text-kodelume-secondary font-bold font-montserrat">À partir de 6,000€</div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                to="/expertise"
                className="inline-block bg-kodelume-primary hover:bg-indigo-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-montserrat text-lg"
              >
                Découvrir tous nos Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      {posts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="w-full px-6 lg:px-12 xl:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-kodelume-dark mb-6">
                  Actualités & Insights
                </h2>
                <p className="text-xl text-kodelume-gray-600 max-w-3xl mx-auto font-montserrat">
                  Restez informé des dernières tendances et innovations digitales
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100">
                    <h3 
                      className="text-xl font-montserrat font-bold text-kodelume-dark mb-4 line-clamp-2"
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }} 
                    />
                    <div 
                      className="text-kodelume-gray-600 leading-relaxed prose prose-sm max-w-none font-montserrat line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
                    />
                    <div className="mt-4">
                      <span className="text-kodelume-primary font-bold font-montserrat hover:underline cursor-pointer">
                        Lire la suite →
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-kodelume-primary to-indigo-700">
        <div className="w-full px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-6">
              Prêt à transformer votre vision ?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 font-montserrat">
              Discutons de votre projet et créons ensemble une solution digitale exceptionnelle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="#contact"
                className="bg-kodelume-secondary hover:bg-amber-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl font-montserrat text-lg min-w-48"
              >
                Obtenir un Devis
              </a>
              <a
                href="tel:+33123456789"
                className="border-2 border-white text-white hover:bg-white hover:text-kodelume-primary font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 font-montserrat text-lg min-w-48"
              >
                +33 1 23 45 67 89
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
