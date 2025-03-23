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
import UnderstandingAIResponses from './pages/understanding-ai-responses.jsx';
import GettingStarted from './pages/getting-started.jsx';
import ManagingDocumentSources from './pages/managing-document-sources.jsx';
import APIReference from './pages/api-reference.jsx';
import DocumentationLayout from './components/DocumentationLayout.jsx';

const AppLayout = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === '/dashboard';
  const isAdminPage = location.pathname === '/admin/enterprise';
  const isDocumentationPage = location.pathname.startsWith('/understanding-ai-responses') ||
                             location.pathname.startsWith('/getting-started') ||
                             location.pathname.startsWith('/managing-document-sources') ||
                             location.pathname.startsWith('/api-reference') ||
                             location.pathname.startsWith('/user-guides') ||
                             location.pathname.startsWith('/integrations') ||
                             location.pathname.startsWith('/code-examples') ||
                             location.pathname.startsWith('/release-notes') ||
                             location.pathname.startsWith('/community') ||
                             location.pathname.startsWith('/support');

  return (
    <div className="min-h-screen bg-white">
      {!isDashboardPage && !isAdminPage && !isDocumentationPage && <Navbar />}
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

          { /* Main pages */ }
          <Route path="/feature" element={<FeaturesPage />} />
          <Route path="/benefits" element={<BenefitsPage />} />
          <Route path="/how-it-works" element={<IntegrationsPage />} />

          { /* Footer links */ }
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          
          { /* Documentation pages */ }
          <Route path="/understanding-ai-responses" element={
            <DocumentationLayout>
              <UnderstandingAIResponses />
            </DocumentationLayout>
          } />
          <Route path="/getting-started" element={
            <DocumentationLayout>
              <GettingStarted />
            </DocumentationLayout>
          } />
          <Route path="/managing-document-sources" element={
            <DocumentationLayout>
              <ManagingDocumentSources />
            </DocumentationLayout>
          } />
          <Route path="/api-reference" element={
            <DocumentationLayout>
              <APIReference />
            </DocumentationLayout>
          } />
        </Routes>
      </main>
      {!isDashboardPage && !isAdminPage && !isDocumentationPage && <Footer />}
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