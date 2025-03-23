import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const UnderstandingAIResponses = () => {
  useEffect(() => {
    // Scroll to the top of the page when component mounts
    window.scrollTo(0, 0);
    
    // Alternatively, if using an element with ID
    const element = document.getElementById('understanding-ai-responses');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div id="understanding-ai-responses" className="max-w-4xl mx-auto py-10 px-4 sm:px-6 lg:px-8 overflow-y-auto scroll-smooth" style={{ maxHeight: 'calc(100vh - 120px)' }}>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Understanding AI Responses</h1>
        <p className="text-gray-600">
          Learn how DocuAid's AI generates responses from your documentation and how to interpret them effectively.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How DocuAid Generates Responses</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              DocuAid uses advanced natural language processing to analyze your documentation and generate contextually relevant responses:
            </p>
            <ol className="list-decimal pl-5 space-y-3">
              <li>
                <span className="font-medium">Content Scraping:</span> When you visit a documentation website, DocuAid scrapes the content on the page.
              </li>
              <li>
                <span className="font-medium">Contextual Understanding:</span> Our AI analyzes the content to understand the structure, topics, and relationships between different concepts.
              </li>
              <li>
                <span className="font-medium">Query Processing:</span> When you ask a question, DocuAid parses your query to understand your intent.
              </li>
              <li>
                <span className="font-medium">Response Generation:</span> The AI generates a response by finding the most relevant information from the scraped content.
              </li>
              <li>
                <span className="font-medium">Source Attribution:</span> All responses include references to the source material, ensuring transparency.
              </li>
            </ol>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Elements</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">DocuAid responses typically contain these elements:</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Direct Answer</h3>
                <p className="text-gray-600">
                  A concise answer to your specific question, presented at the top of the response.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Supporting Context</h3>
                <p className="text-gray-600">
                  Additional information that provides context or elaborates on the direct answer.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Code Examples</h3>
                <p className="text-gray-600">
                  When relevant, code snippets that demonstrate the concept or solution.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Source References</h3>
                <p className="text-gray-600">
                  Links to the specific sections of documentation where the information was found.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Quality Indicators</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="mb-4">
              DocuAid provides indicators to help you assess the quality and confidence of the responses:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">High Confidence Responses</h3>
                  <p className="text-gray-600">
                    When DocuAid finds direct matches in the documentation, it presents these with high confidence indicators.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center mr-3">
                  <span className="text-yellow-600 text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Partial Matches</h3>
                  <p className="text-gray-600">
                    When the AI needs to synthesize information from multiple sources, it indicates this with a partial match indicator.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
                  <span className="text-red-600 text-sm">?</span>
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Low Confidence or Uncertain Responses</h3>
                  <p className="text-gray-600">
                    When DocuAid cannot find a clear answer, it will indicate uncertainty and suggest alternative approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Example AI Responses</h2>
          <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <div className="font-medium text-gray-900 mb-2">Question: "How do I install the React library?"</div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-indigo-600 font-medium mb-2">DocuAid Response:</p>
                <p className="mb-2">To install React, you can use npm:</p>
                <pre className="bg-gray-900 text-white p-3 rounded text-sm mb-3">npm install react react-dom</pre>
                <p className="text-sm text-gray-500">Source: React Documentation - Installation Guide</p>
              </div>
            </div>
            
            <div className="border-l-4 border-indigo-500 pl-4 py-2">
              <div className="font-medium text-gray-900 mb-2">Question: "What are React hooks used for?"</div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="text-indigo-600 font-medium mb-2">DocuAid Response:</p>
                <p className="mb-2">React Hooks allow you to use state and other React features without writing a class. The most commonly used hooks are:</p>
                <ul className="list-disc pl-5 mb-3 space-y-1">
                  <li>useState: For managing state in functional components</li>
                  <li>useEffect: For handling side effects like data fetching</li>
                  <li>useContext: For consuming context in components</li>
                  <li>useRef: For creating mutable references</li>
                </ul>
                <p className="text-sm text-gray-500">Source: React Documentation - Hooks Introduction</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Getting Better Responses</h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Be Specific</h3>
                <p className="text-gray-600">
                  Ask clear, specific questions rather than vague ones. For example, "How do I create a React component?" is better than "How does React work?"
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Include Context</h3>
                <p className="text-gray-600">
                  Mention relevant libraries, versions, or technologies in your question to help DocuAid provide more targeted responses.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Use Technical Terms</h3>
                <p className="text-gray-600">
                  Using correct technical terminology helps DocuAid find the most relevant information in the documentation.
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-medium text-indigo-600 mb-2">Follow Up</h3>
                <p className="text-gray-600">
                  If the initial response doesn't fully answer your question, ask follow-up questions to get more specific information.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/user-guides" className="text-indigo-600 hover:text-indigo-800">
          ← Back to User Guides
        </Link>
        <Link to="/managing-document-sources" className="text-indigo-600 hover:text-indigo-800">
          Next: Managing Document Sources →
        </Link>
      </div>
    </div>
  );
};

export default UnderstandingAIResponses; 