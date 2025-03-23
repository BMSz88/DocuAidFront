import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  TrendingUp,
  Users,
  BookOpen,
  CheckCircle,
  Database,
  Briefcase,
  Lightbulb
} from 'lucide-react';
import Button from './components/Button.jsx';
const BenefitsPage = () => {
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

  const keyBenefits = [
    {
      icon: <Clock className="w-10 h-10 text-accent-500" />,
      title: 'Save Precious Time',
      description: 'Reduce documentation search time by up to 70%. Find exactly what you need instantly instead of scrolling through endless pages.',
      stat: '70%',
      statText: 'time saved'
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary-500" />,
      title: 'Boost Productivity',
      description: 'Development teams report significant productivity increases when using DocuAid to quickly resolve technical documentation questions.',
      stat: '35%',
      statText: 'productivity increase'
    },
    {
      icon: <Users className="w-10 h-10 text-secondary-500" />,
      title: 'Accelerate Onboarding',
      description: 'Help new team members get up to speed faster by providing instant answers to documentation questions during the onboarding process.',
      stat: '50%',
      statText: 'faster onboarding'
    },
    {
      icon: <BookOpen className="w-10 h-10 text-accent-500" />,
      title: 'Enhanced Learning',
      description: 'Turn complex documentation into an interactive learning experience, improving knowledge retention and technical understanding.',
      stat: '3x',
      statText: 'better retention'
    }
  ];

  const businessBenefits = [
    {
      icon: <CheckCircle size={24} className="text-accent-500" />,
      title: "Reduced Support Burden",
      description: "Free up your senior developers by letting DocuAid handle common documentation questions."
    },
    {
      icon: <Database size={24} className="text-primary-500" />,
      title: "Knowledge Democratization",
      description: "Make technical expertise accessible to everyone in your organization, not just the specialists."
    },
    {
      icon: <Briefcase size={24} className="text-secondary-500" />,
      title: "Faster Time to Market",
      description: "Accelerate development cycles by removing documentation bottlenecks and knowledge gaps."
    },
    {
      icon: <Lightbulb size={24} className="text-accent-500" />,
      title: "Lower Error Rates",
      description: "Ensure developers have accurate information to reduce implementation errors and rework."
    }
  ];

  return (
    <div className="page-container">
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Transformative Benefits</span>
              <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
                For Your Entire Organization
              </span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-gray-500">
              See how DocuAid empowers teams, accelerates development, and enhances knowledge transfer across your organization.
            </p>
            <div className="mt-10">
              <Button variant="primary" a href="/enterprise" size="lg">Start Free Trial</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Benefits</h2>
            <p className="mt-4 text-lg text-gray-500">
              DocuAid delivers measurable improvements across your development workflow
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 overflow-hidden"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
                <div className="absolute top-6 right-6 bg-gradient-to-r from-accent-500 to-primary-500 text-white rounded-full px-3 py-1.5 text-sm font-bold">
                  {benefit.stat} {benefit.statText}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Success Stories</h2>
            <p className="mt-4 text-lg text-gray-500">
              See how teams are benefiting from DocuAid
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="h-12 flex items-center">
                <svg className="h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="30" fill="#7C3AED" rx="4" />
                  <text x="10" y="20" fill="white" fontWeight="bold" fontSize="16">TechCorp</text>
                </svg>
              </div>
              <p className="mt-5 text-gray-600">
                "DocuAid has revolutionized how our engineering team interacts with our extensive internal documentation. Questions that used to take hours to answer now take seconds."
              </p>
              <div className="mt-5">
                <h3 className="text-gray-900 font-medium">Alex Chen</h3>
                <p className="text-gray-500 text-sm">CTO, TechCorp</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="h-12 flex items-center">
                <svg className="h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="30" fill="#EC4899" rx="4" />
                  <text x="10" y="20" fill="white" fontWeight="bold" fontSize="16">DataFlow</text>
                </svg>
              </div>
              <p className="mt-5 text-gray-600">
                "We've seen a 40% reduction in onboarding time for new developers since implementing DocuAid. It's become an essential part of our knowledge management strategy."
              </p>
              <div className="mt-5">
                <h3 className="text-gray-900 font-medium">Priya Sharma</h3>
                <p className="text-gray-500 text-sm">Engineering Director, DataFlow</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
              <div className="h-12 flex items-center">
                <svg className="h-8" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="100" height="30" fill="#3B82F6" rx="4" />
                  <text x="10" y="20" fill="white" fontWeight="bold" fontSize="16">CloudSys</text>
                </svg>
              </div>
              <p className="mt-5 text-gray-600">
                "DocuAid has transformed our developer experience. Our team spends less time searching for information and more time building great products."
              </p>
              <div className="mt-5">
                <h3 className="text-gray-900 font-medium">James Wilson</h3>
                <p className="text-gray-500 text-sm">VP of Engineering, CloudSys</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Business Impact</h2>
              <p className="mt-4 text-lg text-gray-500">
                DocuAid doesn't just help individual developers—it transforms entire organizations by improving efficiency, knowledge sharing, and collaborative problem-solving.
              </p>

              <div className="mt-8 space-y-4">
                {businessBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      {benefit.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{benefit.title}</h3>
                      <p className="mt-1 text-gray-500">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Button variant="primary" a href="/help-center" >Book a Demo</Button>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="bg-white p-8 rounded-xl shadow-xl">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">ROI Calculator</h3>
                  <span className="text-sm text-gray-500">Estimated annual savings</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Average developer salary</span>
                      <span className="font-medium">$120,000</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">Time spent on documentation (hours/week)</span>
                      <span className="font-medium">8 hours</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary-500 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700">DocuAid efficiency improvement</span>
                      <span className="font-medium">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <div className="bg-primary-500 h-2 rounded-full w-3/5"></div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-900 font-bold">Annual savings per developer</span>
                      <span className="text-xl font-bold text-primary-600">$11,520</span>
                    </div>
                    <p className="text-sm text-gray-500">Based on recovered productive time at standard billing rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to transform your team's productivity?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Join thousands of developers already benefiting from DocuAid.
          </p>
          <div className="mt-10">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white hover:bg-gray-50 text-primary-600"
            >
              Start Free Trial
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="ml-4 text-white border-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;