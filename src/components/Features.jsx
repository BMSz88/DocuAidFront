import React from 'react';
import { Bot, Zap, BarChart3, Users } from 'lucide-react';

const features = [
  {
    name: 'Instantly Find Information',
    description: 'No more wasting time searching through endless pages of documentation. Simply ask, and our AI-powered assistant will pinpoint the exact information you need in seconds.',
    icon: Bot,
  },
  {
    name: 'Summarize Complex Docs',
    description: 'Understanding long and complex documentation can be overwhelming. Our AI intelligently extracts key points, giving you clear, concise summaries without the hassle of reading through everything.',
    icon: Zap,
  },
  {
    name: 'Compare & Analyze',
    description: 'Quickly detect differences between document versions, API changes, or feature updates. Our AI helps you understand modifications at a glance, making comparisons effortless.',
    icon: BarChart3,
  },
  {
    name: 'Works Across Multiple Sites',
    description: 'Whether you are browsing API references, technical guides, or product documentation, our chatbot adapts to the context of any website to provide the most relevant answers.',
    icon: Users,
  },
];

const Features = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Save Time. Boost Productivity.
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          🚀 Enhance your workflow with real-time AI assistance!
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="absolute top-6 left-6">
                <feature.icon className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-500">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;