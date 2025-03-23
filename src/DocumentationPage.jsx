import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search,
  FileText,
  BookOpen,
  Code,
  Terminal,
  Package,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  Users,
  LifeBuoy
} from 'lucide-react';
import Button from './components/Button.jsx';

const DocumentationPage = () => {
  const [activeCategory, setActiveCategory] = useState('quickstart');
  const [expandedFAQs, setExpandedFAQs] = useState([]);

  const toggleFAQ = (index) => {
    if (expandedFAQs.includes(index)) {
      setExpandedFAQs(expandedFAQs.filter(item => item !== index));
    } else {
      setExpandedFAQs([...expandedFAQs, index]);
    }
  };

  const categories = [
    { id: 'quickstart', name: 'Getting Started', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'guides', name: 'User Guides', icon: <FileText className="w-5 h-5" /> },
    { id: 'api', name: 'API Reference', icon: <Code className="w-5 h-5" /> },
    { id: 'integrations', name: 'Integrations', icon: <Package className="w-5 h-5" />, path: '/integrations' },
    { id: 'examples', name: 'Code Examples', icon: <Terminal className="w-5 h-5" /> }
  ];

  const documentSections = {
    quickstart: [
      { title: 'Installation', slug: 'installation', path: '/getting-started' },
      { title: 'Setting Up Your Account', slug: 'account-setup', path: '/getting-started' },
      { title: 'Browser Extension', slug: 'browser-extension', path: '/getting-started' },
      { title: 'Basic Usage', slug: 'basic-usage', path: '/getting-started' },
      { title: 'Configuration', slug: 'configuration', path: '/getting-started' }
    ],
    guides: [
      { title: 'Understanding AI Responses', slug: 'ai-responses', path: '/understanding-ai-responses' },
      { title: 'Managing Document Sources', slug: 'document-sources', path: '/managing-document-sources' },
      { title: 'Advanced Query Techniques', slug: 'advanced-queries', path: '/advanced-query-techniques' },
      { title: 'Sharing and Collaboration', slug: 'sharing', path: '/sharing-and-collaboration' },
      { title: 'Customizing Your Experience', slug: 'customization', path: '/customizing-experience' }
    ],
    api: [
      { title: 'Authentication', slug: 'api-auth', path: '/api-reference' },
      { title: 'Querying Documents', slug: 'api-query', path: '/api-reference' },
      { title: 'User Management', slug: 'api-users', path: '/api-reference' },
      { title: 'Document Management', slug: 'api-documents', path: '/api-reference' },
      { title: 'Webhooks', slug: 'api-webhooks', path: '/api-reference' },
      { title: 'Rate Limits', slug: 'api-rate-limits', path: '/api-reference' }
    ],
    integrations: [
      { title: 'GitHub Integration', slug: 'github-integration', path: '/github-integration' },
      { title: 'Slack Integration', slug: 'slack-integration', path: '/slack-integration' },
      { title: 'VS Code Extension', slug: 'vscode-extension', path: '/vscode-extension' },
      { title: 'Custom Integrations', slug: 'custom-integrations', path: '/custom-integrations' }
    ],
    examples: [
      { title: 'JavaScript Examples', slug: 'js-examples' },
      { title: 'Python Examples', slug: 'python-examples' },
      { title: 'React Integration', slug: 'react-integration' },
      { title: 'Node.js Server Integration', slug: 'nodejs-integration' },
      { title: 'CI/CD Pipeline Integration', slug: 'cicd-integration' }
    ]
  };

  const faqs = [
    {
      question: "How do I install the DocuAid browser extension?",
      answer: "You can install the DocuAid browser extension from the Chrome Web Store or Firefox Add-ons marketplace. Simply search for 'DocuAid' and click the 'Add to Browser' button. After installation, you'll need to sign in to your DocuAid account or create a new one."
    },
    {
      question: "Does DocuAid work with all documentation websites?",
      answer: "DocuAid works with most public documentation websites, including popular platforms like ReadTheDocs, GitHub wikis, MDN Web Docs, and more. For private documentation, you'll need to use our API or integrations to connect your content sources."
    },
    {
      question: "What types of documents can DocuAid process?",
      answer: "DocuAid can process HTML documentation, Markdown files, PDF documents, plain text files, and code snippets with comments. Our AI is trained to understand technical documentation across various formats and domains."
    },
    {
      question: "How secure is my documentation data with DocuAid?",
      answer: "We take security seriously. All data is encrypted in transit and at rest. For enterprise customers, we offer additional security features like SSO, role-based access controls, and data residency options. We never use your private documentation data to train our models."
    },
    {
      question: "Can I use DocuAid offline?",
      answer: "Currently, DocuAid requires an internet connection to function since it relies on our cloud-based AI models. However, some basic functionality may be cached for previously visited documentation pages."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="page-container">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">DocuAid Documentation</span>
              <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
                Everything you need to know
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              Comprehensive guides, tutorials, and reference documentation to help you get the most out of DocuAid.
            </p>

            <div className="mt-10 max-w-xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                  placeholder="Search documentation..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-3">
            <nav className="sticky top-24 space-y-1">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => category.path ? window.location.href = category.path : setActiveCategory(category.id)}
                  className={`
                    w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                    ${activeCategory === category.id
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                  `}
                >
                  <span className="mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}

              <div className="pt-6 mt-6 border-t border-gray-200">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
                <div className="mt-3 space-y-1">
                  {[
                    { name: 'Release Notes', icon: <FileText className="w-5 h-5" /> },
                    { name: 'Community Forum', icon: <Users className="w-5 h-5" /> },
                    { name: 'Support', icon: <LifeBuoy className="w-5 h-5" /> }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href="#"
                      className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50 hover:text-gray-900"
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="mt-12 lg:mt-0 lg:col-span-9">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  {categories.find(c => c.id === activeCategory).icon}
                  <span className="ml-2">{categories.find(c => c.id === activeCategory).name}</span>
                </h2>
              </div>

              <div className="px-6 py-5">
                <motion.div
                  key={activeCategory}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                  className="divide-y divide-gray-200"
                >
                  {documentSections[activeCategory].map((section, index) => (
                    <motion.div
                      key={section.slug}
                      variants={itemVariants}
                      className="py-5"
                    >
                      {section.path ? (
                        <Link to={section.path} className="block group">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                              {section.title}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                          </div>
                          <p className="mt-2 text-gray-500">
                            {activeCategory === 'quickstart' && section.slug === 'installation' &&
                              'Install DocuAid in your browser or set up our API client in your application.'}
                            {activeCategory === 'quickstart' && section.slug === 'account-setup' &&
                              'Create an account and configure your initial settings to get started.'}
                            {activeCategory === 'guides' && section.slug === 'ai-responses' &&
                              'Learn how DocuAid generates AI responses and how to interpret them effectively.'}
                            {activeCategory === 'guides' && section.slug === 'document-sources' &&
                              'Discover how to manage and organize your document sources for optimal results.'}
                            {activeCategory === 'api' && section.slug === 'api-auth' &&
                              'Learn how to authenticate with the DocuAid API using your API key.'}
                          </p>
                        </Link>
                      ) : (
                        <a href={`#${section.slug}`} className="block group">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary-600">
                              {section.title}
                            </h3>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600" />
                          </div>
                          <p className="mt-2 text-gray-500">
                            {activeCategory === 'quickstart' && section.slug === 'installation' &&
                              'Install DocuAid in your browser or set up our API client in your application.'}
                            {activeCategory === 'quickstart' && section.slug === 'account-setup' &&
                              'Create an account and configure your initial settings to get started.'}
                          </p>
                        </a>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">Installation Guide</h2>
              </div>

              <div className="px-6 py-5 prose prose-primary max-w-none">
                <h3 id="browser-extension">Browser Extension Installation</h3>
                <p>
                  DocuAid is available as a browser extension for Chrome, Firefox, and Edge. Follow these steps to install:
                </p>

                <ol>
                  <li>
                    <strong>Chrome:</strong> Visit the <a href="#" className="text-primary-600 hover:text-primary-800">Chrome Web Store</a> and click "Add to Chrome"
                  </li>
                  <li>
                    <strong>Firefox:</strong> Visit the <a href="#" className="text-primary-600 hover:text-primary-800">Firefox Add-ons Store</a> and click "Add to Firefox"
                  </li>
                  <li>
                    <strong>Edge:</strong> Visit the <a href="#" className="text-primary-600 hover:text-primary-800">Edge Add-ons Store</a> and click "Get"
                  </li>
                </ol>

                <p>
                  After installation, you'll see the DocuAid icon in your browser toolbar. Click it to open the DocuAid sidebar.
                </p>

                <h3 id="api-client">API Client Installation</h3>
                <p>
                  For programmatic access to DocuAid, you can use our official client libraries:
                </p>

                <div className="bg-gray-50 rounded-md p-4 my-4">
                  <p className="text-sm font-mono text-gray-700">
                    # Python
                    <br />
                    pip install docuaid-client
                    <br /><br />
                    # JavaScript
                    <br />
                    npm install @docuaid/client
                  </p>
                </div>

                <p>
                  For more detailed installation options and troubleshooting, see the <a href="#" className="text-primary-600 hover:text-primary-800">complete installation guide</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-500">
              Get quick answers to common questions about DocuAid.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow-sm border border-gray-200 rounded-lg mb-4 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${expandedFAQs.includes(index) ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {expandedFAQs.includes(index) && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="mb-4 text-gray-600">Still have questions?</p>
            <Button variant="primary">Contact Support</Button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started with DocuAid?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Try our browser extension today and transform your documentation experience.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary-600"
            >
              Install DocuAid
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="ml-4 text-white border-white hover:bg-white/10"
            >
              Browse Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;