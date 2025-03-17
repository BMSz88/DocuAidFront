import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Gitlab,
  FileText,
  Chrome,
  Globe,
  Code,
  Server,
  Slack,
  Trello,
  MessageSquare,
  Share2
} from 'lucide-react';
import Button from './components/Button.jsx';
const IntegrationsPage = () => {
  const [activeTab, setActiveTab] = useState('browsers');

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

  const integrationCategories = [
    {
      id: 'browsers',
      name: 'Browsers & IDE',
      description: 'DocuAid seamlessly integrates with your favorite browsers and development environments.',
      icon: <Chrome className="w-6 h-6" />
    },
    {
      id: 'documentation',
      name: 'Documentation Platforms',
      description: 'Works flawlessly with all major documentation sites and platforms.',
      icon: <FileText className="w-6 h-6" />
    },
    {
      id: 'repos',
      name: 'Code Repositories',
      description: 'Connect DocuAid to your repositories for enhanced documentation assistance.',
      icon: <Github className="w-6 h-6" />
    },
    {
      id: 'collaboration',
      name: 'Collaboration Tools',
      description: 'Share insights and documentation with your team through popular collaboration platforms.',
      icon: <Share2 className="w-6 h-6" />
    }
  ];

  const integrationItems = {
    browsers: [
      {
        name: 'Chrome Extension',
        description: 'The DocuAid Chrome extension adds AI-powered documentation assistance directly in your browser.',
        icon: <Chrome className="w-12 h-12 text-primary-500" />,
        status: 'Available Now',
        link: '#'
      },
      {
        name: 'Firefox Add-on',
        description: 'Access DocuAid\'s powerful documentation assistance while browsing with Firefox.',
        icon: <Globe className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'VSCode Extension',
        description: 'Get documentation help without leaving your IDE with our Visual Studio Code extension.',
        icon: <Code className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      }
    ],
    documentation: [
      {
        name: 'ReadTheDocs',
        description: 'DocuAid enhances your ReadTheDocs experience with intelligent Q&A capabilities.',
        icon: <FileText className="w-12 h-12 text-primary-500" />,
        status: 'Available Now',
        link: '#'
      },
      {
        name: 'MDN Web Docs',
        description: 'Navigate Mozilla Developer Network documentation more efficiently with DocuAid.',
        icon: <FileText className="w-12 h-12 text-primary-500" />,
        status: 'In Development',
        link: '#'
      },
      {
        name: 'Swagger/OpenAPI',
        description: 'DocuAid helps you understand API documentation faster with contextual explanations.',
        icon: <Server className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      }
    ],
    repos: [
      {
        name: 'GitHub Integration',
        description: 'Connect DocuAid to your GitHub repositories for enhanced README and wiki support.',
        icon: <Github className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'GitLab Integration',
        description: 'Access and query GitLab documentation and wikis directly through DocuAid.',
        icon: <Gitlab className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'Bitbucket',
        description: 'Enhance your Bitbucket documentation experience with AI-powered assistance.',
        icon: <Code className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      }
    ],
    collaboration: [
      {
        name: 'Slack',
        description: 'Query documentation directly from Slack with our integration.',
        icon: <Slack className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'Microsoft Teams',
        description: 'Bring DocuAid\'s capabilities into your Microsoft Teams workflow.',
        icon: <MessageSquare className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      },
      {
        name: 'Trello',
        description: 'Add documentation insights directly to your Trello cards and boards.',
        icon: <Trello className="w-12 h-12 text-primary-500" />,
        status: 'Coming Soon',
        link: '#'
      }
    ]
  };

  return (
    <div className="pt-24 bg-white">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Seamless Integrations</span>
              <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
                For Your Development Ecosystem
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              DocuAid works where you work. Integrate with your favorite tools and platforms for a seamless documentation experience.
            </p>
            <div className="mt-10">
              <Button variant="primary" size="lg">Explore Integrations</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Our Integrations</h2>
            <p className="mt-4 text-lg text-gray-500">
              DocuAid connects with your favorite tools to provide AI-powered documentation assistance wherever you need it.
            </p>
          </div>

          <div className="mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px space-x-8 overflow-x-auto">
                {integrationCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveTab(category.id)}
                    className={`
                      py-4 px-1 flex items-center whitespace-nowrap font-medium text-sm border-b-2 transition-colors
                      ${activeTab === category.id
                        ? 'border-primary-500 text-primary-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                    `}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {integrationItems[activeTab].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    {item.icon}
                  </div>
                  <span className={`text-sm font-medium rounded-full px-3 py-1 ${item.status === 'Available Now'
                      ? 'bg-green-100 text-green-800'
                      : item.status === 'Coming Soon'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.name}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <a
                  href={item.link}
                  className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                >
                  Learn more
                  <svg className="ml-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-500">
              Setting up DocuAid integrations is quick and easy
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 transform -translate-y-1/2"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {[
                {
                  step: '01',
                  title: 'Install',
                  description: 'Add the DocuAid extension to your browser or install our plugins for your preferred platforms.',
                  icon: <Download className="w-8 h-8 text-white" />
                },
                {
                  step: '02',
                  title: 'Connect',
                  description: 'Link DocuAid to your existing accounts and tools with our secure authentication process.',
                  icon: <Link className="w-8 h-8 text-white" />
                },
                {
                  step: '03',
                  title: 'Use',
                  description: 'Start using DocuAid right away with your connected platforms for seamless documentation assistance.',
                  icon: <CheckCircle className="w-8 h-8 text-white" />
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 md:h-64 flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-accent-500 to-primary-500 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        {step.icon}
                      </div>
                      <span className="text-4xl font-bold text-gray-200">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>

                  <div className="hidden md:block absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-white border-2 border-primary-500 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Custom Integrations with Our API</h2>
              <p className="mt-4 text-lg text-gray-500">
                Need a custom integration? DocuAid offers a robust API that allows you to build your own integrations and extend our capabilities to fit your unique workflow.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "RESTful API with comprehensive documentation",
                  "Webhook support for real-time notifications",
                  "OAuth 2.0 authentication for secure access",
                  "Rate limits suitable for enterprise usage",
                  "SDKs available for popular programming languages"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="primary">Explore API Docs</Button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl overflow-hidden">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">API Request Example</span>
                </div>
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
                  <code>
                    {`// Example API request
fetch('https://api.docuaid.com/v1/query', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    documentUrl: 'https://docs.example.com/api-reference',
    query: 'How do I authenticate with OAuth?',
    maxResults: 3
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to integrate DocuAid with your workflow?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Get started with our integrations today and transform your documentation experience.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary-600"
            >
              Get Started
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="ml-4 text-white border-white hover:bg-white/10"
            >
              Request Custom Integration
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Download = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);

const Link = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const CheckCircle = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default IntegrationsPage;