import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-16 text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block">Get Instant Answers from Any Documentation</span>
          <span className="block text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text mt-8">
No more searching — just ask!</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
        The AI-powered chatbot that understands website documentation, extracts precise information, and delivers instant answers while you browse.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-md text-black font-medium bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:opacity-90">
            Try DocuAid Now
          </button>
          <button className="px-8 py-3 text-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-50 font-medium">
            Watch Demo
          </button>
        </div>
        <div className="mt-16">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Platform Dashboard"
            className="rounded-lg shadow-xl mx-auto max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;