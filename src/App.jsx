import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DonationsSection from './components/DonationsSection';
import HowToHelpSection from './components/HowToHelpSection';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import ActiveProjectsSection from './components/ActiveProjectsSection';
import Footer from './components/Footer';
import ChildSupportSection from './components/ChildSupportSection';
import DonationsPage from './components/DonationsPage';
import AboutPage from './components/AboutPage';
import VideosPage from './components/VideosPage';
import GalleryPage from './components/GalleryPage';
import NewsPage from './components/NewsPage';
import SignUpPage from './components/SignUpPage';
import './App.css';

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ChildSupportSection />
      <AboutSection />
      <DonationsSection />
      <HowToHelpSection />
      <BlogSection />
      <FAQSection />
      <ActiveProjectsSection />
      <Footer />
    </>
  );
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<><Navbar /><DonationsPage /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><AboutPage /><Footer /></>} />
        <Route path="/press/videos" element={<><Navbar /><VideosPage /><Footer /></>} />
        <Route path="/press/gallery" element={<><Navbar /><GalleryPage /><Footer /></>} />
        <Route path="/press/news" element={<><Navbar /><NewsPage /><Footer /></>} />
        <Route path="/signup" element={<><Navbar /><SignUpPage /><Footer /></>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
