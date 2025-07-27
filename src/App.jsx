import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donations" element={<><Navbar /><DonationsPage /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
