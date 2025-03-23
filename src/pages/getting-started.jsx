import React, { useEffect } from 'react';

const GettingStarted = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    
    // Remove any fixed max-height that might be causing issues
    const contentElement = document.getElementById('getting-started');
    if (contentElement) {
      contentElement.scrollTop = 0;
    }

    // Add an extra check after a short delay to ensure proper scrolling
    setTimeout(() => {
      window.scrollTo(0, 0);
      if (contentElement) {
        contentElement.scrollTop = 0;
      }
    }, 200);
  }, []);

  return (
    <div 
      id="getting-started" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px", // Increased padding at the top
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Getting Started with DocuAid</h1>
        <p className="text-lg text-gray-500">
          Welcome to DocuAid! This guide will help you get up and running with our platform in just a few minutes.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 1: Create an Account</h3>
              <p className="text-gray-500 mb-4">
                Sign up for a DocuAid account by visiting our <a href="/signup" className="text-indigo-600 hover:text-indigo-500">signup page</a>.
              </p>
              <img src="/images/docs/signup-screenshot.png" alt="Signup screenshot" className="rounded-lg border border-gray-200 shadow-sm mb-4" />
              <p className="text-sm text-gray-500">
                You can sign up using your email or through Google authentication for a faster process.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 2: Create Your First Project</h3>
              <p className="text-gray-500 mb-4">
                After logging in, navigate to the dashboard and click the "New Project" button to create your first project.
              </p>
              <div className="border border-gray-300 rounded-md p-4 mb-4">
                <code className="text-sm">
                  <pre className="whitespace-pre-wrap">
                    {`// Sample project structure
Project Name: My First DocuAid Project
Description: Documentation for my team's internal API
Access: Private (only visible to team members)
Tags: api, internal, documentation`}
                  </pre>
                </code>
              </div>
              <p className="text-sm text-gray-500">
                Give your project a clear name and description to make it easier to find and understand its purpose.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 3: Upload Your Documents</h3>
              <p className="text-gray-500 mb-4">
                Upload your documents by dragging and dropping files or using the file browser. DocuAid supports various file formats including PDF, DOCX, TXT, and more.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    PDF Files
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Word Documents
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Text Files
                  </div>
                </div>
                <div className="bg-gray-50 rounded-md p-3 border border-gray-200">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-5 h-5 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Markdown
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                DocuAid will automatically process your documents, extracting text and preparing them for AI-powered queries.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Making Your First Query</h2>
          <p className="text-gray-500 mb-6">
            Once your documents are processed, you can start asking questions using natural language. DocuAid will search through your documents and provide accurate answers.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Example Queries</h3>
            <ul className="space-y-3">
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"What is the API rate limit for the premium plan?"</p>
              </li>
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"Show me the steps to configure the authentication middleware."</p>
              </li>
              <li className="bg-white p-3 rounded shadow-sm">
                <p className="font-medium text-indigo-600">"Find all instances where the error handling process is described."</p>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Understanding Results</h3>
              <p className="text-gray-500 mb-4">
                DocuAid provides comprehensive responses with citations to the source documents. You can click on these citations to view the original context.
              </p>
              <div className="border border-gray-200 rounded-lg p-4 mb-4 bg-indigo-50">
                <div className="flex items-start mb-3">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-sm font-medium text-indigo-800">Response Accuracy: 97%</p>
                    <p className="mt-1 text-sm text-indigo-700">
                      Based on 3 different sources from your documents.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  The API rate limit for the premium plan is 10,000 requests per day with a maximum of 100 requests per minute. 
                  This is sufficient for most medium-sized applications, but enterprise customers can request custom limits if needed.
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-500">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">API_Documentation.pdf (p.27)</span>
                  <span className="mx-1">•</span>
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded">Premium_Plan_Details.docx</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                You can save important responses, share them with team members, or export them for future reference.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Invite Team Members</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Collaborate with your team by inviting them to your DocuAid projects.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="/user-guides/sharing-and-collaboration" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Learn about collaboration features <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                    </svg>
                  </div>
                  <div className="ml-5">
                    <h3 className="text-lg font-medium text-gray-900">Explore Integrations</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Connect DocuAid with your favorite tools like Slack, Microsoft Teams, and more.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a href="/integrations" className="font-medium text-indigo-600 hover:text-indigo-500">
                    View available integrations <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 border-t border-gray-200 pt-8">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">Need Help?</h2>
          <p className="text-indigo-700 mb-4">
            Our support team is always ready to assist you with any questions or issues you might encounter.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/support" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700">
              Contact Support
            </a>
            <a href="/community" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              Join Our Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted; 