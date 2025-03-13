import React from 'react';
import { motion } from 'framer-motion';
import { Search, ZapOff, Clock, Shield } from 'lucide-react';
import Button from './Button'; 

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  const features = [
    {
      icon: <Search className="w-5 h-5 text-accent-500" />,
      text: "Instant Information Retrieval"
    },
    {
      icon: <ZapOff className="w-5 h-5 text-primary-500" />,
      text: "No More Endless Searches"
    },
    {
      icon: <Clock className="w-5 h-5 text-secondary-500" />,
      text: "Save Hours of Research Time"
    },
    {
      icon: <Shield className="w-5 h-5 text-accent-600" />,
      text: "Secure & Private"
    }
  ];

  return (
    <div className="relative bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span className="block">Get Instant Answers from</span>
            <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
              Any Documentation
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl"
          >
            The AI-powered chatbot that understands website documentation, extracts precise information, and delivers instant answers while you browse.
          </motion.p>

          {}
          <motion.div 
            variants={itemVariants}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="inline-flex items-center bg-gray-50 rounded-full px-4 py-2 text-sm font-medium text-gray-700 shadow-sm border border-gray-100"
                whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                {feature.icon}
                <span className="ml-2">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button variant="primary" size="lg">
              Try DocuAid Now
            </Button>
            <Button variant="secondary" size="lg">
              Watch Demo
            </Button>
          </motion.div>
          
          <motion.div
            variants={itemVariants} 
            className="mt-16 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 rounded-lg blur opacity-30"></div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Platform Dashboard"
                className="rounded-lg shadow-xl mx-auto max-w-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;