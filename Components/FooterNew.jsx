import React from 'react';

function Footer() {
  return (
    <footer className="bg-white py-8">
      <div className="w-full px-8 lg:px-16 xl:px-24">
        <div className="max-w-6xl mx-auto">
          
          {/* Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Office Cities */}
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-600">
                Paris
              </p>
            </div>

            {/* Contact Email */}
            <div className="text-center">
              <a 
                href="mailto:contact@kodelume.com" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                contact@kodelume.com
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-center md:text-right">
              <a 
                href="/mentions-legales" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Mentions légales
              </a>
              <a 
                href="/politique-confidentialite" 
                className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300"
              >
                Politique de confidentialité
              </a>
            </div>

          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
