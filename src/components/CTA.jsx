import React from 'react';

const CTA = () => {
  return (
<div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
            <span className="block">Ready to transform your Enterprise experience?</span>
            <span className="block text-gray-700 mt-1">Get started today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            <a href="/enterprise" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                Custom Plans
                </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
            <a href="/pricing" className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                General Plans
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;