import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Support = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('support');
    if (contentElement) {
      contentElement.scrollTop = 0;
    }

    setTimeout(() => {
      window.scrollTo(0, 0);
      if (contentElement) {
        contentElement.scrollTop = 0;
      }
    }, 200);
  }, []);

  // Support plans data
  const supportPlans = [
    {
      title: "Community",
      price: "Free",
      description: "Basic support through our community forum and documentation",
      features: [
        "Community forum access",
        "Public documentation",
        "Knowledge base articles",
        "Monthly webinars"
      ],
      cta: "Get Started",
      color: "primary"
    },
    {
      title: "Standard",
      price: "$99",
      period: "per month",
      description: "Priority support for growing teams and businesses",
      features: [
        "Everything in Community",
        "Email support (24-hour response time)",
        "Live chat during business hours",
        "Advanced troubleshooting guides",
        "Onboarding assistance"
      ],
      cta: "Subscribe Now",
      color: "secondary",
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored support for large organizations with complex needs",
      features: [
        "Everything in Standard",
        "Dedicated support manager",
        "Phone support with 1-hour response time",
        "Custom training sessions",
        "SLA guarantees",
        "Priority issue resolution"
      ],
      cta: "Contact Sales",
      color: "accent"
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "How do I get started with DocuAid?",
      answer: "Getting started is easy! Sign up for a free account, connect your documentation sources, and our AI will automatically index your content. Check out our Getting Started guide for step-by-step instructions."
    },
    {
      question: "What types of files can DocuAid process?",
      answer: "DocuAid supports a wide range of file formats including Markdown, HTML, PDF, Microsoft Office documents (Word, Excel, PowerPoint), Google Docs (via API), code files (with comments), and plain text files."
    },
    {
      question: "How secure is my documentation data?",
      answer: "We take security seriously. All data is encrypted both in transit and at rest, and we offer role-based access controls. Enterprise customers can also choose private cloud or on-premise deployment options. For more details, please see our Security page."
    },
    {
      question: "Can I integrate DocuAid with my existing tools?",
      answer: "Yes! DocuAid offers integrations with popular platforms like GitHub, Slack, VS Code, and more. We also provide a robust API and custom integration options for connecting with your unique tech stack."
    },
    {
      question: "What happens if I need help outside business hours?",
      answer: "Standard and Enterprise customers have access to our emergency support system for critical issues. Enterprise customers benefit from 24/7 support with guaranteed response times based on issue severity."
    },
    {
      question: "How can I request a new feature?",
      answer: "We love hearing from our users! You can submit feature requests through our Community Forum's Feature Requests category, or Enterprise customers can work directly with their dedicated support manager to prioritize enhancements."
    }
  ];

  // Support channels
  const supportChannels = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Support",
      description: "Send us an email and our support team will get back to you within 24 hours (Standard) or 1 hour (Enterprise).",
      action: "support@docuaid.com",
      link: "mailto:support@docuaid.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      title: "Live Chat",
      description: "Chat with our support team in real-time during business hours (9am-5pm EST, Monday-Friday).",
      action: "Start Chat",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Support",
      description: "Enterprise customers can call our dedicated support line for urgent issues and receive immediate assistance.",
      action: "+1 (800) 123-4567",
      link: "tel:+18001234567"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      title: "Community Forum",
      description: "Connect with other DocuAid users and our team in our active community forum.",
      action: "Visit Forum",
      link: "/community-forum"
    }
  ];

  // Resources data
  const resources = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Knowledge Base",
      description: "Browse our extensive collection of articles, tutorials, and guides.",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Video Tutorials",
      description: "Visual step-by-step guides for common tasks and advanced features.",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Webinars",
      description: "Register for our monthly live sessions covering different aspects of DocuAid.",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      title: "API Documentation",
      description: "Comprehensive documentation for developers working with our API.",
      link: "/api-reference"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Security Guide",
      description: "Learn about our security practices, compliance, and data protection.",
      link: "#"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Release Notes",
      description: "Stay updated with the latest features, improvements, and bug fixes.",
      link: "/release-notes"
    }
  ];

  return (
    <div 
      id="support" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900">Support</h1>
        <p className="text-lg text-gray-500 mt-2">
          Get help with DocuAid through our various support channels and resources
        </p>
      </div>

      {/* Support Plans Section */}
      <section className="mt-12">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Support Plans</h2>
          <p className="text-gray-600 mt-1">
            Choose the right level of support for your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {supportPlans.map((plan, index) => (
            <div 
              key={plan.title} 
              className={`bg-white rounded-lg shadow-sm border ${plan.popular ? 'border-secondary-300 ring-2 ring-secondary-500' : 'border-gray-200'} overflow-hidden relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-secondary-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{plan.title}</h3>
                <div className="mt-2 flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">{plan.price}</span>
                  {plan.period && (
                    <span className="ml-1 text-sm text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="mt-3 text-gray-600">{plan.description}</p>
                
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className={`h-5 w-5 text-${plan.color}-500 mt-0.5 mr-2 flex-shrink-0`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8">
                  <a
                    href="#"
                    className={`block w-full px-4 py-2 text-center text-sm font-medium rounded-md ${index === 1 ? 'bg-secondary-600 hover:bg-secondary-700 text-white' : 'bg-primary-600 hover:bg-primary-700 text-white'}`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Channels Section */}
      <section className="mt-16">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Contact Support</h2>
          <p className="text-gray-600 mt-1">
            Reach out to us through your preferred channel
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {supportChannels.map((channel) => (
            <div key={channel.title} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  {channel.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{channel.title}</h3>
                  <p className="mt-1 text-gray-600">{channel.description}</p>
                  <div className="mt-3">
                    <a
                      href={channel.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                    >
                      {channel.action}
                      <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="mt-16">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Submit a Support Request</h2>
          <p className="text-gray-600 mt-1">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-6">
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Brief description of your issue"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  id="category"
                  name="category"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                >
                  <option>Technical Issue</option>
                  <option>Account & Billing</option>
                  <option>Feature Request</option>
                  <option>Integration Help</option>
                  <option>General Question</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                  placeholder="Please provide as much detail as possible"
                ></textarea>
              </div>

              <div>
                <label htmlFor="attachments" className="block text-sm font-medium text-gray-700">Attachments (optional)</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-primary-600 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF, PDF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <input
                  id="priority"
                  name="priority"
                  type="checkbox"
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label htmlFor="priority" className="ml-2 block text-sm text-gray-700">
                  Mark as high priority (Enterprise plan only)
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Submit Support Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-1">
            Quick answers to common questions
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <dl className="divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="px-4 py-5 sm:p-6">
                <dt className="text-lg font-medium text-gray-900">{faq.question}</dt>
                <dd className="mt-2 text-gray-600">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="mt-16">
        <div className="border-l-4 border-gray-300 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Additional Resources</h2>
          <p className="text-gray-600 mt-1">
            Explore our self-help resources
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.link}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-300 transition-colors duration-200 flex items-start space-x-4"
            >
              <div className="flex-shrink-0">
                {resource.icon}
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{resource.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Enterprise Support CTA */}
      <section className="mt-16">
        <div className="bg-accent-50 rounded-lg shadow-sm border border-accent-200 overflow-hidden">
          <div className="px-6 py-8 md:flex md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Need custom enterprise support?</h3>
              <p className="mt-2 text-gray-600 max-w-3xl">
                Our enterprise support offers dedicated account managers, custom SLAs, and tailored training sessions to meet your organization's unique needs.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between">
        <Link to="/documentation" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Documentation
        </Link>
      </div>
    </div>
  );
};

export default Support; 