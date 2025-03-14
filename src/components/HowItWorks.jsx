import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, MessageCircle, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Download className="w-8 h-8" />,
      title: "Install the Extension",
      description: "Add DocuAid to Chrome with a single click and get instant access to our AI-powered assistant.",
      color: "from-accent-400 to-accent-500"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Browse Documentation",
      description: "Visit any documentation site as you normally would. No need to change your workflow.",
      color: "from-primary-400 to-primary-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Ask Your Question",
      description: "Click the DocuAid icon and ask any question about the documentation in natural language.",
      color: "from-secondary-400 to-secondary-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Get Instant Answers",
      description: "Receive accurate, contextual responses pulled directly from the documentation you're browsing.",
      color: "from-accent-500 to-primary-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { 
      pathLength: 1,
      transition: { 
        duration: 1.5,
        ease: "easeInOut",
        delay: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How DocuAid Works
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our AI-powered extension seamlessly integrates with your browsing experience,
            making documentation easier to navigate than ever before.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md p-6 border border-gray-100 relative"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className={`absolute -top-5 -left-5 w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                  {step.icon}
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white text-primary-500 rounded-full px-3 py-1 text-sm font-semibold border border-primary-100 shadow-sm">
                  Step {index + 1}
                </div>
              </motion.div>
            ))}
          </div>

          {}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 transform -translate-y-1/2 z-0">
            <svg
              width="100%"
              height="50"
              viewBox="0 0 1000 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M0,25 H1000"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                strokeDasharray="5,5"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#3B82F6" />
                  <stop offset="0.5" stopColor="#8B5CF6" />
                  <stop offset="1" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 bg-gray-50 rounded-2xl p-6 lg:p-10 border border-gray-100 shadow-md"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="ml-2 text-sm text-gray-500">react-router-dom documentation</div>
                </div>
                <div className="h-40 bg-gray-50 rounded flex items-center justify-center">
                  <p className="text-gray-400 text-center">Documentation page visualization</p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center text-white">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="font-medium text-gradient bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent">DocuAid</span>
                </div>
                <div className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <p className="text-gray-600 text-sm">How do I set up nested routes in React Router?</p>
                </div>
                <div className="mt-3 border border-gray-200 rounded-lg p-3">
                  <p className="text-gray-700 text-sm">To set up nested routes in React Router v6, you need to place Route components inside other Route components. Here's an example:</p>
                  <div className="mt-2 bg-gray-50 rounded p-2 text-xs font-mono text-gray-600">
                    {`<Route path="/dashboard" element={<Dashboard />}>\n  <Route path="profile" element={<Profile />} />\n  <Route path="settings" element={<Settings />} />\n</Route>`}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 lg:pl-8 lg:border-l border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See DocuAid in Action</h3>
              <p className="text-gray-600 mb-6">
                DocuAid works with all major documentation sites and technical resources. Whether you're browsing official docs, GitHub repositories, or community forums, DocuAid provides intelligent assistance wherever you need it.
              </p>
              <ul className="space-y-4">
                {[
                  "Works with any documentation site",
                  "Context-aware responses based on the current page",
                  "Follow-up questions for deeper understanding",
                  "Code examples and explanations tailored to your needs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 flex items-center justify-center text-white flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;