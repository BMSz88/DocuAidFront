import React from 'react';

const APIReference = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">API Reference</h1>
        <p className="text-lg text-gray-500">
          Comprehensive documentation for the DocuAid API, enabling you to integrate our document processing capabilities into your applications.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started with the API</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication</h3>
              <p className="text-gray-500 mb-4">
                All API requests must be authenticated using an API key. You can generate API keys in your account settings.
              </p>
              <div className="bg-gray-50 rounded-md p-4 mb-4">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`curl -X GET "https://api.docuaid.com/v1/documents" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                  </code>
                </pre>
              </div>
              <p className="text-sm text-gray-500">
                Replace YOUR_API_KEY with your actual API key. Never share your API key or commit it to public repositories.
              </p>
            </div>
          </div>

          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Base URL</h3>
              <p className="text-gray-500 mb-4">
                All API requests should be sent to the following base URL:
              </p>
              <div className="bg-gray-50 rounded-md p-4 text-center">
                <code className="text-indigo-600 text-lg font-medium">https://api.docuaid.com/v1</code>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">API Endpoints</h2>
          
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 mr-2">
                GET
              </span>
              <h3 className="text-lg font-medium text-gray-900">/documents</h3>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500 mb-4">
                  Retrieve a list of all documents in your DocuAid account.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Query Parameters:</h4>
                    <div className="mt-2 border-t border-gray-200">
                      <dl className="divide-y divide-gray-200">
                        <div className="py-3 flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">limit</dt>
                          <dd className="text-sm text-gray-900">Maximum number of documents to return (default: 20, max: 100)</dd>
                        </div>
                        <div className="py-3 flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">offset</dt>
                          <dd className="text-sm text-gray-900">Number of documents to skip (default: 0)</dd>
                        </div>
                        <div className="py-3 flex justify-between">
                          <dt className="text-sm font-medium text-gray-500">sort</dt>
                          <dd className="text-sm text-gray-900">Sort order (options: created_at, updated_at, name)</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Response:</h4>
                    <div className="mt-2 bg-gray-50 rounded-md p-4 mb-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>
                          {`{
  "success": true,
  "data": [
    {
      "id": "doc_1a2b3c4d5e",
      "name": "API Documentation.pdf",
      "type": "pdf",
      "created_at": "2023-04-15T10:30:00Z",
      "updated_at": "2023-04-15T10:30:00Z",
      "size": 1452890,
      "status": "processed",
      "url": "https://docuaid.com/documents/doc_1a2b3c4d5e"
    },
    // More documents...
  ],
  "meta": {
    "total": 45,
    "limit": 20,
    "offset": 0
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mr-2">
                POST
              </span>
              <h3 className="text-lg font-medium text-gray-900">/documents</h3>
            </div>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500 mb-4">
                  Upload a new document to your DocuAid account.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Request Body:</h4>
                    <div className="mt-2 bg-gray-50 rounded-md p-4 mb-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>
                          {`// Form data
file: [binary file data]
name: "My Document.pdf"
collection_id: "col_xyz123" (optional)
tags: ["api", "documentation"] (optional)`}
                        </code>
                      </pre>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Response:</h4>
                    <div className="mt-2 bg-gray-50 rounded-md p-4 mb-4">
                      <pre className="text-sm overflow-x-auto">
                        <code>
                          {`{
  "success": true,
  "data": {
    "id": "doc_6f7g8h9i0j",
    "name": "My Document.pdf",
    "type": "pdf",
    "created_at": "2023-06-20T14:25:00Z",
    "updated_at": "2023-06-20T14:25:00Z",
    "size": 982560,
    "status": "processing",
    "url": "https://docuaid.com/documents/doc_6f7g8h9i0j"
  }
}`}
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Rate Limits</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-500 mb-4">
                API rate limits vary by plan. The response headers include information about your current rate limit status:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Header
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        X-RateLimit-Limit
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        The maximum number of requests allowed in a time period
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        X-RateLimit-Remaining
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        The number of requests remaining in the current time period
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        X-RateLimit-Reset
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        The time when the current rate limit will reset (Unix timestamp)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Webhooks</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-500 mb-4">
                DocuAid can send webhook notifications for events like document processing completion. Configure webhooks in your API settings.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      For security, always verify webhook signatures using your webhook secret.
                    </p>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Example Webhook Payload</h3>
              <div className="bg-gray-50 rounded-md p-4">
                <pre className="text-sm overflow-x-auto">
                  <code>
                    {`{
  "event": "document.processed",
  "created_at": "2023-06-20T15:25:00Z",
  "data": {
    "document_id": "doc_6f7g8h9i0j",
    "status": "processed",
    "processing_time": 45.2
  }
}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold text-indigo-800 mb-2">Need Help?</h2>
          <p className="text-indigo-700 mb-4">
            If you have questions about the API or need assistance with implementation, don't hesitate to reach out to our developer support team.
          </p>
          <a 
            href="/support" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Contact Developer Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default APIReference; 