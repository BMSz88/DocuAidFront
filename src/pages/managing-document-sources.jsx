import React, { useEffect } from 'react';

const ManagingDocumentSources = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('managing-document-sources');
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

  return (
    <div 
      id="managing-document-sources" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Managing Document Sources</h1>
        <p className="text-lg text-gray-500">
          Learn how to effectively organize, update, and manage your document sources in DocuAid.
        </p>
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Document Source Types</h2>
          <p className="text-gray-600 mb-6">
            DocuAid supports various document sources to give you flexibility in how you manage your knowledge base.
          </p>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6 border-t-4 border-indigo-500">
              <h3 className="text-lg font-medium text-gray-900 mb-2">File Uploads</h3>
              <p className="text-sm text-gray-500">
                Upload files directly from your computer. Supports PDF, DOCX, TXT, MD, and more.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6 border-t-4 border-green-500">
              <h3 className="text-lg font-medium text-gray-900 mb-2">URL Imports</h3>
              <p className="text-sm text-gray-500">
                Add web pages by URL. DocuAid will fetch and process the content automatically.
              </p>
            </div>
            
            <div className="bg-white shadow rounded-lg p-6 border-t-4 border-purple-500">
              <h3 className="text-lg font-medium text-gray-900 mb-2">API Connections</h3>
              <p className="text-sm text-gray-500">
                Connect to APIs to import documentation from third-party services like Notion, Confluence, etc.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizing Documents</h2>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Using Collections</h3>
              <p className="text-gray-500 mb-4">
                Collections help you group related documents together for better organization and more accurate AI responses.
              </p>
              
              <div className="mt-4">
                <h4 className="text-md font-medium text-gray-900 mb-2">Steps to Create a Collection:</h4>
                <ol className="list-decimal pl-5 space-y-2">
                  <li className="text-gray-600">Navigate to the Documents section in your dashboard</li>
                  <li className="text-gray-600">Click the "New Collection" button</li>
                  <li className="text-gray-600">Name your collection and add an optional description</li>
                  <li className="text-gray-600">Select documents to include or add new ones</li>
                  <li className="text-gray-600">Save your collection</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Using Tags</h3>
              <p className="text-gray-500 mb-4">
                Tags provide a flexible way to categorize your documents across different collections and projects.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  api
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  documentation
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  technical
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  guide
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  tutorial
                </span>
              </div>
              
              <p className="text-sm text-gray-500">
                You can add tags when uploading documents or edit them later from the document details page.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Updating Documents</h2>
          <p className="text-gray-600 mb-6">
            Keeping your document sources up to date ensures that DocuAid provides the most accurate and current information.
          </p>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Manual Updates</h3>
              <div className="mt-2 mb-4">
                <p className="text-gray-500">
                  To update a document manually:
                </p>
                <ol className="list-decimal pl-5 mt-2 space-y-1">
                  <li className="text-gray-600">Navigate to the document in your dashboard</li>
                  <li className="text-gray-600">Click the "Update" or "Replace" button</li>
                  <li className="text-gray-600">Upload the new version of the document</li>
                  <li className="text-gray-600">DocuAid will process the new version and update its knowledge base</li>
                </ol>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Automated Updates</h3>
                <p className="text-gray-500 mb-4">
                  For URL imports and API connections, you can set up automatic updates:
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex items-center">
                    <div className="mr-4 flex-shrink-0">
                      <svg className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Update Frequency</p>
                      <p className="text-sm text-gray-500">Choose from daily, weekly, or monthly updates</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
          <div className="bg-indigo-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-indigo-900 mb-4">Tips for Effective Document Management</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-indigo-800">Keep documents organized in logical collections</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-indigo-800">Use consistent naming conventions for documents</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-indigo-800">Apply relevant tags to improve searchability</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-indigo-800">Regularly update documents to ensure accuracy</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-indigo-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-indigo-800">Archive outdated documents instead of deleting them</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ManagingDocumentSources; 