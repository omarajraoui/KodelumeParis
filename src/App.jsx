import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <LanguageProvider>
    <Router>
      <div className="min-h-screen flex flex-col bg-kodelume-white">
        <TikTokTracking />
        <Navbar />
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<HomeSimple />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/references" element={<References />} />
            <Route path="/projects/:slug" element={<ProjectPage />} />
            <Route path="/reserver-un-appel" element={<BookingPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </LanguageProvider>
  );
}

export default App;
