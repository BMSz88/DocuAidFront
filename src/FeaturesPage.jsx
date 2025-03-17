import React from 'react';
import { motion } from 'framer-motion';
import {
  Bot,
  Zap,
  BarChart3,
  Users,
  Search,
  FileText,
  Download,
  Lock,
  Star,
  Globe
} from 'lucide-react';
import Button from './components/Button.jsx';
const FeaturesPage = () => {
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

  const mainFeatures = [
    {
      icon: <Bot className="w-10 h-10 text-accent-500" />,
      title: 'Intelligent AI Assistant',
      description: 'Our advanced AI understands documentation context to provide accurate answers to your questions.',
      color: 'accent'
    },
    {
      icon: <Zap className="w-10 h-10 text-primary-500" />,
      title: 'Lightning-Fast Results',
      description: 'Get instant answers within seconds, no more scrolling through endless pages of documentation.',
      color: 'primary'
    },
    {
      icon: <Search className="w-10 h-10 text-secondary-500" />,
      title: 'Smart Search',
      description: "Natural language search capabilities that understand what you're looking for, even if you don't use the exact terminology.",
      color: 'secondary'
    },
    {
      icon: <FileText className="w-10 h-10 text-accent-500" />,
      title: 'Document Summarization',
      description: 'Quickly get concise summaries of lengthy documentation to understand core concepts faster.',
      color: 'accent'
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-primary-500" />,
      title: 'Comparison & Analysis',
      description: 'Compare different versions or sections of documentation to identify changes and updates easily.',
      color: 'primary'
    },
    {
      icon: <Users className="w-10 h-10 text-secondary-500" />,
      title: 'Collaborative Learning',
      description: 'Share insights and findings with your team members for better knowledge distribution.',
      color: 'secondary'
    }
  ];

  const advancedFeatures = [
    {
      icon: <Download className="w-6 h-6" />,
      title: 'Cross-Platform Support',
      description: 'Works seamlessly across all major browsers and integrates with your favorite documentation sites.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Enterprise-Grade Security',
      description: 'Bank-level encryption and privacy controls ensure your sensitive documentation stays protected.'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'Personalized Experience',
      description: 'The more you use DocuAid, the better it gets at understanding your preferences and needs.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Multi-Language Support',
      description: 'DocuAid supports documentation in multiple languages, breaking down international barriers.'
    }
  ];

  return (
    <div className="pt-24 bg-white">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Powerful Features</span>
              <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
                Designed for Developers
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
              Discover how DocuAid's intelligent features can transform the way you interact with technical documentation.
            </p>
            <div className="mt-10">
              <Button variant="primary" size="lg">Try DocuAid Free</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Core Features</h2>
            <p className="mt-4 text-lg text-gray-500">
              Everything you need to master documentation and boost productivity
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`bg-${feature.color}-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">AI-Powered Document Understanding</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our advanced AI doesn't just search for keywords—it actually understands the content and context of documentation, allowing it to provide accurate and relevant answers to even complex questions.
              </p>
              <div className="mt-8">
                <ul className="space-y-4">
                  {[
                    "Natural language understanding for intuitive interactions",
                    "Context-aware responses that reference the right documentation sections",
                    "Support for complex technical queries with detailed explanations",
                    "Continual learning from user interactions to improve accuracy"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <svg className="h-5 w-5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button variant="primary">Learn More</Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
                <div className="relative bg-white rounded-lg p-1 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Document Analysis"
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Advanced Capabilities</h2>
            <p className="mt-4 text-lg text-gray-500">
              DocuAid goes beyond basic documentation assistance with powerful advanced features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-gray-100 p-3 rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to experience DocuAid?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Start using DocuAid today and transform the way you work with documentation.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary-600"
            >
              Get Started Free
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="ml-4 text-white border-white hover:bg-white/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;