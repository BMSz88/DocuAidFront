import React, { useState } from "react";

const Enterprise = () => {
  const [formData, setFormData] = useState({
    workEmail: '',
    name: '',
    companyName: '',
    estimatedUsers: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Get the API URL from environment variables or use default
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      
      const response = await fetch(`${apiUrl}/api/enterprise/inquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your interest! We will contact you shortly.'
        });
        // Reset form on success
        setFormData({
          workEmail: '',
          name: '',
          companyName: '',
          estimatedUsers: ''
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.message || 'Something went wrong. Please try again.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
      
      <form onSubmit={handleSubmit} className="mt-6 w-full max-w-lg">
        {submitStatus && (
          <div 
            className={`p-4 mb-4 rounded-md ${
              submitStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">YOUR WORK EMAIL</label>
          <input 
            type="email" 
            name="workEmail"
            value={formData.workEmail}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your work email"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">YOUR NAME</label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your name"
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">COMPANY NAME</label>
          <input 
            type="text" 
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter company name"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">ESTIMATED NUMBER OF USERS?</label>
          <p className="text-gray-500 text-sm mb-2">
            Please provide an estimate of how many team members will need access to our app. 
            This helps us suggest the best plan and collaboration features for your team.
          </p>
          <select 
            name="estimatedUsers"
            value={formData.estimatedUsers}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Select an estimate</option>
            <option value="1-10">1-10</option>
            <option value="11-50">11-50</option>
            <option value="51-100">51-100</option>
            <option value="100+">100+</option>
          </select>
        </div>
        
        <button 
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 rounded-md hover:opacity-90 disabled:opacity-70 transition-all duration-200"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

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

const HelpCenter = () => {
  // Add state variables for form and alert handling
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: ''
  });
  const [showAlert, setShowAlert] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate a form submission (you can replace this with an actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setShowAlert(true);
      
      // Reset form after successful submission
      setFormData({
        email: '',
        name: '',
        message: ''
      });
      
      // Hide the alert after 3 seconds
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text flex items-center justify-center gap-2 pt-16">
        👋 How can we help you?
      </h1>
      <p className="text-gray-600 mt-8">
        Need a hand or have insights to share? Our Help Center is your go-to spot for support and suggestions.
      </p>
      
      {/* Success alert message */}
      {showAlert && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded relative" role="alert">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline"> Your message has been submitted successfully. We'll get back to you soon!</span>
        </div>
      )}
      
      <form className="mt-10 text-left" onSubmit={handleSubmit}>
        <label className="block text-gray-700 font-semibold" htmlFor="email">YOUR EMAIL</label>
        <input 
          type="email" 
          id="email" 
          className="w-full p-2 mt-1 border rounded-md" 
          placeholder="Enter your email" 
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label className="block text-gray-700 font-semibold mt-4" htmlFor="name">YOUR NAME</label>
        <input 
          type="text" 
          id="name" 
          className="w-full p-2 mt-1 border rounded-md" 
          placeholder="Enter your name" 
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <label className="block text-gray-700 font-semibold mt-4" htmlFor="message">HOW CAN WE HELP?</label>
        <textarea 
          id="message" 
          className="w-full p-2 mt-1 border rounded-md" 
          rows="4" 
          placeholder="Tell us how we can help! Whether you're looking for answers, need to troubleshoot an issue, or just want to share your thoughts on how we can improve, we're all ears."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button 
          type="submit" 
          className="w-full mt-6 p-3 text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-3 rounded-md hover:opacity-90 flex justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
              </svg>
              Submitting...
            </>
          ) : "Submit"}
        </button>
      </form>
    </div>
  );
};

export { Enterprise, Pricing, HelpCenter };

export default function Pages() {
  return (
    <>
      <Enterprise />
      <Pricing />
      <HelpCenter />
    </>
  );
}