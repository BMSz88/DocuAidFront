// src/Pages.jsx
import React, { useState } from "react";
// Import HelpCenter component - supports both named import or default import
import { HelpCenter } from './components/HelpCenter.jsx';
// Alternatively you could use: import HelpCenter from './components/HelpCenter.jsx';

// Enterprise component
const Enterprise = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white pt-6">
      <h1 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text mt-8">
        Enterprise-scale
      </h1>
      <h2 className="text-3xl font-bold text-center text-black mt-2">
        Document management
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mt-4">
        Whether you're a small business trying to get the most out of your documentation
        or a large enterprise looking to streamline your processes, we've got you covered.
      </p>
      
      <div className="mt-6 w-full max-w-lg">
        <label className="block text-gray-700 text-sm font-bold mb-2">YOUR WORK EMAIL</label>
        <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="Enter your work email" />
        
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">YOUR NAME</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="Enter your name" />
        
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">COMPANY NAME</label>
        <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none" placeholder="Enter company name" />
        
        <label className="block text-gray-700 text-sm font-bold mt-4 mb-2">ESTIMATED NUMBER OF USERS?</label>
        <p className="text-gray-500 text-sm mb-2">Please provide an estimate of how many team members will need access to our app. This helps us suggest the best plan and collaboration features for your team.</p>
        <select className="w-full px-4 py-2 border rounded-md focus:outline-none">
          <option value="">Select an estimate</option>
          <option value="1-10">1-10</option>
          <option value="11-50">11-50</option>
          <option value="51-100">51-100</option>
          <option value="100+">100+</option>
        </select>
        
        <button className="w-full bg-black text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 mt-6 rounded-md hover:opacity-90">
          Submit
        </button>
      </div>
    </div>
  );
};

// Pricing component
const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      id: "archive-alchemist",
      name: "Pro Plan",
      description: "Transform Your Experience into Gold",
      priceMonthly: 14.99,
      priceYearly: 149.99,
      originalPriceMonthly: 29.99,
      originalPriceYearly: 299.99,
      discount: "50% Off!",
      features: [
        "30 Document uploads / month",
        "300 Queries / month",
        "500MB File Size Limit",
        "Multilingual Question Answering",
        "Multilingual Summaries",
        "Most Powerful AI Models",
      ],
      highlightColor: "purple-600",
      badgeText: "Popular",
    },
    {
      id: "quantum-quill",
      name: "Ultimate Plan",
      description: "Unlock the Future of Document Analysis",
      priceMonthly: 24.99,
      priceYearly: 249.99,
      originalPriceMonthly: 49.99,
      originalPriceYearly: 499.99,
      discount: "50% Off!",
      features: [
        "500 Document uploads / month",
        "10,000 Queries / month",
        "Unlimited File Size Limit",
        "Multilingual Question Answering",
        "Multilingual Summaries",
        "Most Powerful AI Models",
        "Longer reply length",
        "Priority support",
        "Early access to new features",
      ],
      highlightColor: "yellow-500",
    },
  ];

  const handleToggle = () => {
    setIsYearly(!isYearly); 
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-8xl mx-auto text-center pt-6">
        <h2 className="text-5xl font-bold text-center text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text mt-4">Smart Solutions, Smarter Pricing</h2>
        <p className="text-gray-600 mt-3">
          Find the perfect plan for your document exploration needs. Start risk-free with a 7-Day Free Trial.
        </p>
        <div className="flex justify-center mt-6 items-center">
          <span className="mr-3 text-gray-700">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer focus:outline-none"> 
           
            <input
              type="checkbox"
              className="sr-only peer focus:outline-none focus:outline-none" 
              style={{ appearance: 'none', outline: 'none' }}  
              checked={isYearly}
              onChange={handleToggle} 
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-blue-600 transition duration-300"></div>
            <span className="absolute left-1 top-1 bg-white rounded-full w-4 h-4 transition-transform duration-300 peer-checked:translate-x-5"></span>
          </label>
          <span className="ml-3 text-gray-700">Yearly</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`border-2 rounded-xl p-6 shadow-lg relative ${plan.highlightColor === 'purple-600' ? 'border-purple-500' : 'border-yellow-500'}`}
          >
            {plan.badgeText && (
              <span
                className={`absolute top-3 right-3 bg-${plan.highlightColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}
              >
                {plan.badgeText}
              </span>
            )}
            <h3 className="text-xl font-bold flex items-center">
              <span className={`text-${plan.highlightColor} text-2xl mr-2`}>●</span> {plan.name}
            </h3>
            <span className="bg-green-200 text-green-800 text-xs font-semibold px-3 py-1 rounded-full inline-block mt-2">
              7-Day Free Trial
            </span>
            <p className="text-gray-700 mt-3">{plan.description}</p>

            <div className="mt-4">
              <span className="text-gray-500 line-through text-xl">${isYearly ? plan.originalPriceYearly : plan.originalPriceMonthly}</span>
              <span className="text-3xl font-bold ml-2">
                ${isYearly ? plan.priceYearly : plan.priceMonthly}
              </span>
              <span className="text-gray-500"> / {isYearly ? 'year' : 'month'}</span>
            </div>
            <span
              className={`text-sm font-semibold mt-2 inline-block ${plan.highlightColor === 'purple-600' ? 'text-purple-600 bg-purple-100' : 'text-yellow-600 bg-yellow-100'} px-2 py-1 rounded`}
            >
              {plan.discount}
            </span>

            <button
              className={`w-full mt-5 py-2 rounded-lg text-balck font-semibold text-lg bg-${plan.highlightColor} hover:bg-opacity-80 transition`}
            >
              {plan.id === 'archive-alchemist' ? 'Transform to Pro plan' : 'Activate Ultimate plan'}
            </button>

            <div className="mt-6 border-t pt-4">
              <h4 className="font-semibold text-gray-800">What's included:</h4>
              <ul className="mt-2 text-gray-700 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className={`text-${plan.highlightColor} text-lg mr-2`}>
                      ✔
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Export the components so they can be imported individually 
export { Enterprise, Pricing, HelpCenter };

// Default export for the whole file
const Pages = () => {
  return (
    <>
      <Enterprise />
      <Pricing />
      <HelpCenter />
    </>
  );
};

export default Pages;