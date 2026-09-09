import React, { useEffect, useLayoutEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import HomeSimple from '../Components/HomeSimple';
import Expertise from '../Components/Expertises';
import References from '../Components/References';
import ProjectPage from '../Components/ProjectPage';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BookingPage from '../Components/BookingPage';
import TikTokTracking from '../Components/TikTokTracking';
import './App.css';
import { LanguageProvider } from '../Components/LanguageContext';
import { LegalNoticePage, PrivacyPage } from '../Components/LegalPages';

function ScrollToTop() {
  const { pathname, search, hash, key } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      target?.scrollIntoView({ block: 'start', behavior: 'auto' });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, search, hash, key]);

  return null;
}


function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="min-h-screen flex flex-col bg-kodelume-white">
        <ScrollToTop />
        <TikTokTracking />
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomeSimple />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/references" element={<References />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/reserver-un-appel" element={<BookingPage />} />
            <Route path="/mentions-legales" element={<LegalNoticePage />} />
            <Route path="/politique-confidentialite" element={<PrivacyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
