import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AdvancedQueryTechniques = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('advanced-query-techniques');
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
      id="advanced-query-techniques" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Advanced Query Techniques</h1>
        <p className="text-lg text-gray-500">
          Learn how to craft effective queries to get more precise and relevant answers from DocuAid.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Query Syntax Fundamentals</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid's natural language processing allows for conversational queries, but using specific syntax can help you get more precise results.
              </p>
              
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Basic Query Structure</h3>
                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100 mb-3">
                    <code className="text-sm text-indigo-700">
                      find [term] in [document/section]
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "find authentication methods in API documentation"
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-md font-medium text-gray-900 mb-2">Using Quotes for Exact Matches</h3>
                  <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100 mb-3">
                    <code className="text-sm text-indigo-700">
                      "exact phrase"
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "find \"JWT authentication\" in security docs"
                  </p>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Common Query Operators</h3>
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Operator</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Function</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Example</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">AND</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Require both terms</td>
                        <td className="px-3 py-4 text-sm text-gray-500">"authentication AND authorization"</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">OR</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Match either term</td>
                        <td className="px-3 py-4 text-sm text-gray-500">"JWT OR OAuth"</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">NOT</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Exclude term</td>
                        <td className="px-3 py-4 text-sm text-gray-500">"authentication NOT basic"</td>
                      </tr>
                      <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">in:</td>
                        <td className="px-3 py-4 text-sm text-gray-500">Limit to specific document</td>
                        <td className="px-3 py-4 text-sm text-gray-500">"rate limits in:api_docs.pdf"</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contextual Queries</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid remembers previous questions, allowing for contextual follow-up queries that reference earlier conversations.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Example Conversation</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">You</span>
                      </div>
                    </div>
                    <div className="ml-3 bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">What are the authentication options for the API?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-700 font-medium text-sm">AI</span>
                      </div>
                    </div>
                    <div className="ml-3 bg-white border border-gray-200 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">The API supports three authentication methods: API Keys, OAuth 2.0, and JWT (JSON Web Tokens). Each has different security implications and use cases.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center">
                        <span className="text-white font-medium text-sm">You</span>
                      </div>
                    </div>
                    <div className="ml-3 bg-indigo-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">Which one is most secure?</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 pt-0.5">
                      <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <span className="text-gray-700 font-medium text-sm">AI</span>
                      </div>
                    </div>
                    <div className="ml-3 bg-white border border-gray-200 p-3 rounded-lg">
                      <p className="text-sm text-gray-700">OAuth 2.0 is generally considered the most secure option of the three, as it provides more granular access control and doesn't require storing credentials in your application.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p className="text-sm text-gray-500">
                    Notice how the second question ("Which one is most secure?") doesn't need to specify what "one" refers to. DocuAid understands from context that you're asking about the authentication methods.
                  </p>
                </div>
              </div>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <strong>Pro Tip:</strong> To maintain context, keep follow-up questions within the same browser tab. Starting a new session will reset the conversation context.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Filtering Techniques</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Filter your queries for more precise results by specifying document types, date ranges, or specific sections.
              </p>
              
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Document Type Filters</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="space-y-2">
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">type:pdf search_term</code>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">type:markdown search_term</code>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">type:code search_term</code>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Date Filters</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="space-y-2">
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">after:2023-01-01 search_term</code>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">before:2023-06-30 search_term</code>
                      </div>
                      <div className="bg-indigo-50 p-2 rounded">
                        <code className="text-sm text-indigo-700">between:2023-01-01,2023-06-30 search_term</code>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-medium text-gray-900 mb-3">Combining Multiple Filters</h3>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                <p className="text-sm text-gray-700 mb-2">You can combine multiple filters to narrow down your search:</p>
                <div className="bg-indigo-50 p-3 rounded border border-indigo-100">
                  <code className="text-sm text-indigo-700">
                    type:pdf after:2023-01-01 "authentication methods" NOT "basic auth" in:security_docs
                  </code>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  This query finds PDF documents created after January 1, 2023, containing the exact phrase "authentication methods" but not "basic auth", and only within documents tagged as "security_docs".
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Query Templates for Common Tasks</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Use these query templates for common documentation tasks to get more structured and helpful responses.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Find Implementation Examples</h3>
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-100 mb-2">
                    <code className="text-sm text-indigo-700">
                      show example implementation of [feature/function] in [language]
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "show example implementation of JWT authentication in Node.js"
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Compare Options</h3>
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-100 mb-2">
                    <code className="text-sm text-indigo-700">
                      compare [option1] vs [option2] for [use case]
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "compare REST vs GraphQL for mobile applications"
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Troubleshooting Errors</h3>
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-100 mb-2">
                    <code className="text-sm text-indigo-700">
                      how to fix "[error message]" in [context]
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "how to fix \"unauthorized access\" error in API calls"
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Find Best Practices</h3>
                  <div className="bg-indigo-50 p-3 rounded border border-indigo-100 mb-2">
                    <code className="text-sm text-indigo-700">
                      best practices for [task/feature] in [context]
                    </code>
                  </div>
                  <p className="text-sm text-gray-600">
                    Example: "best practices for error handling in RESTful APIs"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/managing-document-sources" className="text-indigo-600 hover:text-indigo-800">
          ← Managing Document Sources
        </Link>
        <Link to="/sharing-and-collaboration" className="text-indigo-600 hover:text-indigo-800">
          Next: Sharing and Collaboration →
        </Link>
      </div>
    </div>
  );
};

export default AdvancedQueryTechniques; 