import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { Enterprise, Pricing, HelpCenter } from './Pages';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<>
              <Hero />
              <Features />
              <CTA />
            </>} />
            <Route path="/enterprise" element={<Enterprise />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/help-center" element={<HelpCenter />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;