import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CustomIntegrations = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('custom-integrations');
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
      id="custom-integrations" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Custom Integrations</h1>
        <p className="text-lg text-gray-500">
          Extend DocuAid's capabilities by building custom integrations with our robust API and SDKs.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid provides a comprehensive set of APIs and development tools that allow you to build custom 
                integrations tailored to your specific workflow and technology stack. Whether you need to embed 
                DocuAid into your own applications or connect it with other services, our platform offers the 
                flexibility you need.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="text-md font-medium text-gray-900 mb-3">Key Benefits</h3>
                <ul className="space-y-2 text-gray-600 ml-5 list-disc">
                  <li>Seamlessly embed DocuAid capabilities into your own applications</li>
                  <li>Connect DocuAid with your existing tools and services</li>
                  <li>Automate documentation workflows specific to your organization</li>
                  <li>Create custom user experiences around documentation</li>
                  <li>Build private integrations for internal use or public extensions for the community</li>
                </ul>
              </div>
              
              <div className="flex items-center p-4 mb-4 text-sm text-purple-800 border border-purple-300 rounded-lg bg-purple-50">
                <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <div>
                  <span className="font-medium">Note:</span> API access for custom integrations is available on Professional and Enterprise plans. Developer sandbox environments are available for all plans.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Options</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                DocuAid offers multiple integration approaches to suit different needs and technical requirements:
              </p>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">RESTful API</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Our comprehensive REST API provides access to all DocuAid functionality, with JSON responses 
                    and standard HTTP methods. Perfect for server-side integrations and automation scripts.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="/api-reference" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      View API Documentation →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Client SDKs</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Language-specific SDKs that make it easier to integrate DocuAid into your applications.
                    Currently available for JavaScript, Python, Java, and Go, with more coming soon.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Explore SDKs →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Webhooks</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Configure webhooks to receive real-time notifications when specific events occur in DocuAid,
                    such as document updates, user activities, or AI-generated insights.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Configure Webhooks →
                    </a>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-3">
                    <svg className="h-6 w-6 text-purple-500 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gray-900">Embedded Widgets</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                    Add DocuAid widgets directly to your web applications with just a few lines of code.
                    Customizable appearance to match your brand and user experience.
                  </p>
                  <div className="mt-3 flex justify-end">
                    <a href="#" className="text-sm font-medium text-purple-600 hover:text-purple-500">
                      Get Widget Code →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                To begin building your custom integration with DocuAid, follow these steps:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">1. Set Up Developer Access</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <ol className="list-decimal ml-5 space-y-3 text-gray-600">
                      <li>Log in to your DocuAid account</li>
                      <li>Navigate to <span className="font-medium text-gray-800">Settings → Developer</span></li>
                      <li>Click <span className="font-medium text-gray-800">Create API Key</span></li>
                      <li>Name your API key and select the appropriate access scopes</li>
                      <li>Store your API key securely - it won't be displayed again</li>
                    </ol>
                    
                    <div className="mt-4 p-3 bg-gray-100 rounded-md">
                      <p className="text-sm text-gray-700 font-mono overflow-x-auto">
                        docuaid_api_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                      </p>
                    </div>
                    
                    <p className="mt-3 text-xs text-gray-500">
                      For security reasons, always use environment variables or secure vaults to store API keys in your code.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">2. Choose Your Integration Method</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Select the integration method that best fits your use case:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="border border-gray-200 rounded-md bg-white p-3">
                        <h4 className="text-sm font-semibold text-gray-900">Direct API Access</h4>
                        <p className="mt-1 text-xs text-gray-500">
                          Use the REST API directly for maximum flexibility and control.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md bg-white p-3">
                        <h4 className="text-sm font-semibold text-gray-900">SDK Integration</h4>
                        <p className="mt-1 text-xs text-gray-500">
                          Use our language-specific SDKs for simplified integration.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md bg-white p-3">
                        <h4 className="text-sm font-semibold text-gray-900">Webhook Implementation</h4>
                        <p className="mt-1 text-xs text-gray-500">
                          Receive event notifications to trigger actions in your system.
                        </p>
                      </div>
                      
                      <div className="border border-gray-200 rounded-md bg-white p-3">
                        <h4 className="text-sm font-semibold text-gray-900">Widget Embedding</h4>
                        <p className="mt-1 text-xs text-gray-500">
                          Add DocuAid features directly to your web applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">3. Test Your Integration</h3>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-600 mb-4">
                      Before deploying to production, test your integration thoroughly:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Sandbox Environment</h4>
                          <p className="mt-1 text-sm text-gray-500">Use our sandbox environment to test without affecting production data.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Request Monitoring</h4>
                          <p className="mt-1 text-sm text-gray-500">Monitor API requests and responses in the developer dashboard.</p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-gray-900">Rate Limit Testing</h4>
                          <p className="mt-1 text-sm text-gray-500">Ensure your integration handles API rate limits gracefully.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Examples</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Here are some examples of custom integrations you can build with DocuAid:
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">JavaScript SDK Example</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`// Initialize the DocuAid client
import { DocuAidClient } from '@docuaid/client';

const docuaid = new DocuAidClient({
  apiKey: process.env.DOCUAID_API_KEY,
  environment: 'production' // or 'sandbox' for testing
});

// Search documentation
async function searchDocumentation(query) {
  try {
    const results = await docuaid.search({
      query: query,
      maxResults: 5,
      filters: {
        sources: ['api-docs', 'user-guides'],
        lastUpdated: 'past-month'
      }
    });
    
    return results.items;
  } catch (error) {
    console.error('Error searching documentation:', error);
    throw error;
  }
}`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Python SDK Example</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`# Initialize the DocuAid client
from docuaid import DocuAidClient

docuaid = DocuAidClient(
    api_key=os.environ.get("DOCUAID_API_KEY"),
    environment="production"  # or "sandbox" for testing
)

# Generate documentation for code
def generate_documentation(code, language="python"):
    try:
        response = docuaid.ai.generate_documentation(
            code=code,
            language=language,
            style="google",  # or "jsdoc", "numpy", etc.
            include_examples=True
        )
        
        return response.documentation
    except Exception as e:
        print(f"Error generating documentation: {e}")
        raise`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Webhook Handler Example (Node.js)</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`// Express server to handle DocuAid webhooks
const express = require('express');
const crypto = require('crypto');
const app = express();

app.use(express.json());

// Verify webhook signature
function verifySignature(payload, signature) {
  const hmac = crypto.createHmac('sha256', process.env.DOCUAID_WEBHOOK_SECRET);
  const calculatedSignature = hmac.update(JSON.stringify(payload)).digest('hex');
  return crypto.timingSafeEqual(
    Buffer.from(calculatedSignature, 'hex'),
    Buffer.from(signature, 'hex')
  );
}

app.post('/webhook/docuaid', (req, res) => {
  const signature = req.headers['x-docuaid-signature'];
  
  // Verify the request is from DocuAid
  if (!signature || !verifySignature(req.body, signature)) {
    return res.status(401).send('Invalid signature');
  }

  const { event, data } = req.body;
  
  switch (event) {
    case 'documentation.updated':
      console.log('Documentation updated:', data.title);
      // Trigger your business logic here
      break;
    case 'ai.insight.generated':
      console.log('New AI insight:', data.insight);
      // Notify relevant teams
      break;
    default:
      console.log('Unhandled event:', event);
  }
  
  res.status(200).send('Webhook received');
});

app.listen(3000, () => {
  console.log('Webhook server running on port 3000');
});`}
                    </pre>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Embedded Widget Example (HTML)</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap">
{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DocuAid Widget Example</title>
</head>
<body>
  <h1>My Application</h1>
  
  <!-- DocuAid Search Widget -->
  <div id="docuaid-search-widget"></div>
  
  <!-- DocuAid Widget Script -->
  <script>
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://widgets.docuaid.com/v1/widget.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'docuaid-widget'));
    
    window.docuaidWidgetConfig = {
      apiKey: "YOUR_PUBLIC_API_KEY",
      element: "#docuaid-search-widget",
      theme: "light", // or "dark", "auto"
      sources: ["user-guides", "api-docs"],
      placeholder: "Search documentation..."
    };
  </script>
</body>
</html>`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a href="#" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                  Browse More Examples on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/vscode-extension" className="text-indigo-600 hover:text-indigo-800">
          ← VS Code Extension
        </Link>
        <Link to="/documentation" className="text-indigo-600 hover:text-indigo-800">
          Back to Documentation
        </Link>
      </div>
    </div>
  );
};

export default CustomIntegrations; 