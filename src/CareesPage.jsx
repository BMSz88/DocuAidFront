import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, Award, Heart, ChevronRight } from 'lucide-react';
import Button from './components/Button.jsx';

const CareersPage = () => {
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

  const jobOpenings = [
    {
      title: "Senior Full Stack Developer",
      location: "Remote (US/EU)",
      type: "Full-time",
      department: "Engineering",
      description: "Join our core team to build and scale our AI-powered documentation assistant. You'll work on both frontend and backend systems, ensuring a seamless user experience.",
    },
    {
      title: "Machine Learning Engineer",
      location: "Remote (Worldwide)",
      type: "Full-time",
      department: "AI Research",
      description: "Help improve our NLP models that power DocuAid's context-aware documentation understanding. You'll work on training, fine-tuning, and deploying ML models.",
    },
    {
      title: "Product Designer",
      location: "Remote (US/EU)",
      type: "Full-time",
      department: "Design",
      description: "Create intuitive interfaces and experiences for developers using DocuAid. You'll be responsible for user research, wireframing, and design implementation.",
    },
    {
      title: "DevOps Engineer",
      location: "Remote (US/EU)",
      type: "Full-time",
      department: "Engineering",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and deployment systems. Help us scale reliably as we grow our user base.",
    },
    {
      title: "Technical Content Writer",
      location: "Remote (Worldwide)",
      type: "Part-time",
      department: "Marketing",
      description: "Create engaging, informative content about documentation best practices, AI in developer tools, and tutorials for DocuAid.",
    },
    {
      title: "Growth Marketing Specialist",
      location: "Remote (US/EU)",
      type: "Full-time",
      department: "Marketing",
      description: "Drive user acquisition and retention through data-driven marketing strategies. You'll work on campaigns, analytics, and customer journey optimization.",
    }
  ];

  const perks = [
    {
      icon: <MapPin className="w-6 h-6 text-primary-500" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world. We believe in hiring the best talent regardless of location."
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary-500" />,
      title: "Flexible Hours",
      description: "We focus on results, not hours. Work when you're most productive as long as you meet your commitments."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Inclusive Team",
      description: "Join a diverse, global team that values different perspectives and backgrounds."
    },
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: "Competitive Compensation",
      description: "Enjoy competitive salary, equity options, and comprehensive benefits regardless of your location."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-500" />,
      title: "Health & Wellness",
      description: "We provide health insurance, mental health support, and wellness stipends for all team members."
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: "Learning Budget",
      description: "Continuous learning is important to us. We provide a yearly budget for courses, books, and conferences."
    }
  ];

  return (
    <div className="pt-20 bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Join Our Team</span>
              <span className="block text-transparent bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 bg-clip-text mt-2">
                Build the Future of Documentation
              </span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
              We're on a mission to transform how developers interact with documentation.
              Join us in creating AI tools that make knowledge more accessible.
            </p>
            <div className="mt-10">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => {
                  const openPositionsSection = document.getElementById('open-positions');
                  if (openPositionsSection) {
                    openPositionsSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Our Culture Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <span className="text-accent-600 font-semibold">Our Culture</span>
              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Building a diverse, inclusive, and impactful team
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                At DocuAid, we believe that diverse teams build better products. We're committed to creating 
                an environment where everyone can do their best work, regardless of background, location, or identity.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our team spans multiple time zones and continents, united by a passion for making developer tools 
                more intelligent and documentation more accessible.
              </p>
              <div className="mt-8">
                <Button 
                  variant="primary"
                  to="/about"
                >
                  Meet Our Team
                </Button>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="DocuAid team collaboration" 
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits & Perks */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent-600 font-semibold">Benefits & Perks</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Why you'll love working with us
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We believe in taking care of our team members and providing the support they need to thrive both 
              professionally and personally.
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 shadow-md border border-gray-100"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{perk.title}</h3>
                    <p className="text-gray-600">{perk.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="open-positions" className="text-center mb-16">
            <span className="text-accent-600 font-semibold">Open Positions</span>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              Join our growing team
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              We're looking for passionate individuals to help us build the future of documentation tools.
              Check out our current openings below.
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="md:flex md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
                    <div className="mt-2 flex items-center flex-wrap gap-y-2">
                      <div className="flex items-center text-gray-500 text-sm mr-6">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm mr-6">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-500 text-sm">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                    </div>
                    <p className="mt-3 text-gray-600">{job.description}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <Button 
                      variant="primary" 
                      className="flex items-center"
                      href={`mailto:docuaid2025@gmail.com?subject=Job Application: ${job.title}`}
                    >
                      Apply Now
                      <ChevronRight className="ml-1 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-6">Don't see a position that matches your skills?</p>
            <Button 
              variant="secondary" 
              size="lg"
              href="mailto:docuaid2025@gmail.com?subject=General Resume Submission"
            >
              Send us your resume
            </Button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Ready to make an impact?</h2>
          <p className="mt-4 text-xl text-white opacity-90 max-w-2xl mx-auto">
            Join our team and help shape the future of how developers interact with documentation.
          </p>
          <div className="mt-10">
            <Button 
              variant="secondary" 
              size="lg" 
              className="bg-white hover:bg-gray-50 text-primary-600"
            >
              Browse Open Positions
            </Button>
            <Button 
              variant="ghost" 
              size="lg" 
              className="ml-4 text-white border-white hover:bg-white/10"
            >
              Learn About Our Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;