import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTA from './components/CTA.jsx';
import Footer from './components/Footer.jsx';
import { Enterprise, Pricing, HelpCenter } from './Pages.jsx';
import About from './About.jsx';
import Login from './components/login.jsx';
import Signup from './components/signup.jsx';
import DashboardPage from './DashboardPage.jsx';
import FeaturesPage from './FeaturesPage.jsx';
import BenefitsPage from './BenefitsPage.jsx';
import IntegrationsPage from './IntegrationsPage.jsx';
import CareersPage from './CareersPage.jsx';
import DocumentationPage from './DocumentationPage.jsx';
import PrivacyPage from './PrivacyPage.jsx';
import TermsPage from './TermsPage.jsx';
import EnterpriseAdmin from './components/EnterpriseAdmin.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

const AppLayout = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';
  const isAdminPage = location.pathname === '/admin/enterprise';

  return (
    <div className="min-h-screen bg-white">
      {!isDashboardPage && !isAdminPage && <Navbar />}
      <main>
        <Routes>
          <Route path="/" element={<>
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <CTA />
          </>} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin/enterprise" element={<EnterpriseAdmin />} />

          { }
          <Route path="/feature" element={<FeaturesPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/how-it-works" element={<IntegrationsPage />} />

          { }
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      {!isDashboardPage && !isAdminPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppLayout />
    </Router>
  );
}

export default App;