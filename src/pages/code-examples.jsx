import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CodeExamples = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('code-examples');
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
      id="code-examples" 
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="mb-10 sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">Code Examples</h1>
        <p className="text-lg text-gray-500">
          Ready-to-use code samples for integrating DocuAid into your applications and workflows.
        </p>
      </div>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">JavaScript Examples</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Examples for integrating DocuAid with JavaScript applications, including browser and Node.js environments.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Basic API Query</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`// Import the DocuAid client
import { DocuAidClient } from '@docuaid/client';

// Initialize with your API key
const docuaid = new DocuAidClient({
  apiKey: process.env.DOCUAID_API_KEY
});

// Query documentation
async function searchDocumentation(query, options = {}) {
  try {
    const results = await docuaid.search({
      query,
      maxResults: options.maxResults || 5,
      filters: options.filters || {}
    });
    
    return results.items;
  } catch (error) {
    console.error('Error querying DocuAid:', error);
    throw error;
  }
}

// Example usage
searchDocumentation('how to integrate with React')
  .then(results => {
    console.log(\`Found \${results.length} results:\`);
    results.forEach((item, index) => {
      console.log(\`\${index + 1}. \${item.title}\`);
      console.log(\`   Source: \${item.source}\`);
      console.log(\`   Relevance: \${item.relevanceScore}\`);
    });
  });`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">React Component Integration</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`import React, { useState, useEffect } from 'react';
import { DocuAidClient } from '@docuaid/client';

// Create a React hook for DocuAid
function useDocuAid(apiKey) {
  const [client, setClient] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    // Initialize the client
    if (apiKey) {
      const docuaidClient = new DocuAidClient({ apiKey });
      setClient(docuaidClient);
    }
  }, [apiKey]);
  
  const search = async (query, options = {}) => {
    if (!client) {
      setError(new Error('DocuAid client not initialized'));
      return [];
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const results = await client.search({
        query,
        maxResults: options.maxResults || 5,
        filters: options.filters || {}
      });
      
      setIsLoading(false);
      return results.items;
    } catch (err) {
      setError(err);
      setIsLoading(false);
      return [];
    }
  };
  
  return { search, isLoading, error };
}

// Example DocuAid Search Component
function DocuAidSearch({ apiKey }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { search, isLoading, error } = useDocuAid(apiKey);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    const searchResults = await search(query);
    setResults(searchResults);
  };
  
  return (
    <div className="docuaid-search">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="search-input"
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </form>
      
      {error && <div className="error">{error.message}</div>}
      
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result-item">
            <h3>{result.title}</h3>
            <p>{result.summary}</p>
            <a href={result.url} target="_blank" rel="noopener noreferrer">
              View Documentation
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DocuAidSearch;`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Python Examples</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Examples for integrating DocuAid with Python applications, including web frameworks and CLI tools.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Basic API Integration</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`import os
from docuaid import DocuAidClient

# Initialize the client with your API key
client = DocuAidClient(api_key=os.environ.get("DOCUAID_API_KEY"))

def search_documentation(query, max_results=5):
    """
    Search documentation using DocuAid API
    
    Args:
        query (str): The search query
        max_results (int): Maximum number of results to return
        
    Returns:
        list: Search results
    """
    try:
        response = client.search(
            query=query,
            max_results=max_results,
            filters={
                "sources": ["api-docs", "user-guides"],
                "last_updated": "past-month"
            }
        )
        
        return response.get("items", [])
    except Exception as e:
        print(f"Error searching documentation: {e}")
        return []

# Example usage
if __name__ == "__main__":
    query = "how to authenticate API requests"
    results = search_documentation(query)
    
    print(f"Found {len(results)} results for '{query}':")
    for i, result in enumerate(results, 1):
        print(f"{i}. {result['title']}")
        print(f"   Relevance: {result['relevance_score']}")
        print(f"   URL: {result['url']}")
        print()
`}
                    </pre>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Flask Web Application Integration</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`import os
from flask import Flask, request, jsonify, render_template
from docuaid import DocuAidClient

app = Flask(__name__)

# Initialize DocuAid client
docuaid = DocuAidClient(api_key=os.environ.get("DOCUAID_API_KEY"))

@app.route('/')
def home():
    """Render the search page"""
    return render_template('search.html')

@app.route('/api/search', methods=['POST'])
def search_documentation():
    """API endpoint to search documentation"""
    data = request.json
    query = data.get('query', '')
    
    if not query:
        return jsonify({"error": "Query is required"}), 400
    
    try:
        # Call DocuAid API
        results = docuaid.search(
            query=query,
            max_results=data.get('maxResults', 5),
            filters=data.get('filters', {})
        )
        
        return jsonify(results)
    except Exception as e:
        app.logger.error(f"DocuAid API error: {str(e)}")
        return jsonify({"error": str(e)}), 500

@app.route('/api/generate-documentation', methods=['POST'])
def generate_documentation():
    """API endpoint to generate documentation for code"""
    data = request.json
    code = data.get('code', '')
    language = data.get('language', 'python')
    
    if not code:
        return jsonify({"error": "Code is required"}), 400
    
    try:
        # Call DocuAid API to generate documentation
        result = docuaid.ai.generate_documentation(
            code=code,
            language=language,
            style=data.get('style', 'google')
        )
        
        return jsonify(result)
    except Exception as e:
        app.logger.error(f"DocuAid API error: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CLI Tools Integration</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-6">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Examples of integrating DocuAid with command-line interfaces and development workflows.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Node.js CLI Tool</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`#!/usr/bin/env node
const { program } = require('commander');
const { DocuAidClient } = require('@docuaid/client');
const chalk = require('chalk');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

// Load environment variables
dotenv.config();

// Initialize the DocuAid client
const docuaid = new DocuAidClient({
  apiKey: process.env.DOCUAID_API_KEY
});

program
  .name('docuaid-cli')
  .description('DocuAid CLI tool for searching and generating documentation')
  .version('1.0.0');

program
  .command('search <query>')
  .description('Search documentation using DocuAid')
  .option('-n, --max-results <number>', 'Maximum number of results', '5')
  .option('-s, --source <source>', 'Filter by source')
  .action(async (query, options) => {
    try {
      const filters = {};
      if (options.source) {
        filters.sources = [options.source];
      }
      
      const results = await docuaid.search({
        query,
        maxResults: parseInt(options.maxResults),
        filters
      });
      
      console.log(chalk.bold('\\nSearch Results:'));
      console.log(chalk.gray('═════════════════'));
      
      if (results.items.length === 0) {
        console.log(chalk.yellow('No results found'));
        return;
      }
      
      results.items.forEach((item, index) => {
        console.log(chalk.bold.blue(\`\${index + 1}. \${item.title}\`));
        console.log(chalk.gray(\`   Source: \${item.source}\`));
        console.log(chalk.gray(\`   URL: \${item.url}\`));
        console.log(\`   \${item.summary}\`);
        console.log();
      });
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program
  .command('generate <file>')
  .description('Generate documentation for a code file')
  .option('-l, --language <language>', 'Programming language', 'auto')
  .option('-s, --style <style>', 'Documentation style', 'standard')
  .option('-o, --output <output>', 'Output file')
  .action(async (filePath, options) => {
    try {
      if (!fs.existsSync(filePath)) {
        console.error(chalk.red('Error: File not found'));
        process.exit(1);
      }
      
      const code = fs.readFileSync(filePath, 'utf8');
      const language = options.language === 'auto' 
        ? path.extname(filePath).substring(1) 
        : options.language;
      
      console.log(chalk.gray('Generating documentation...'));
      
      const result = await docuaid.ai.generateDocumentation({
        code,
        language,
        style: options.style
      });
      
      if (options.output) {
        fs.writeFileSync(options.output, result.documentation);
        console.log(chalk.green(\`Documentation saved to \${options.output}\`));
      } else {
        console.log(chalk.bold('\\nGenerated Documentation:'));
        console.log(chalk.gray('════════════════════════'));
        console.log(result.documentation);
      }
    } catch (error) {
      console.error(chalk.red('Error:'), error.message);
      process.exit(1);
    }
  });

program.parse(process.argv);`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">CI/CD Integration Examples</h2>
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <p className="text-gray-600 mb-6">
                Examples for integrating DocuAid with continuous integration and deployment pipelines.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">GitHub Actions Workflow</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`# .github/workflows/docuaid-documentation.yml
name: DocuAid Documentation Check

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  documentation-check:
    runs-on: ubuntu-latest
    name: Check Documentation Quality
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '16'
      
      - name: Install dependencies
        run: npm install
      
      - name: Install DocuAid CLI
        run: npm install -g @docuaid/cli
      
      - name: Run DocuAid Documentation Quality Check
        run: docuaid check --path ./src --threshold 80
        env:
          DOCUAID_API_KEY: \${{ secrets.DOCUAID_API_KEY }}
      
      - name: Generate Documentation Report
        if: always()
        run: docuaid report --output docs/report.md
        env:
          DOCUAID_API_KEY: \${{ secrets.DOCUAID_API_KEY }}
      
      - name: Upload Documentation Report
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: documentation-report
          path: docs/report.md`}
                    </pre>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Jenkins Pipeline</h3>
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 whitespace-pre">
{`// Jenkinsfile
pipeline {
    agent {
        docker {
            image 'node:16'
        }
    }
    
    environment {
        DOCUAID_API_KEY = credentials('docuaid-api-key')
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npm install -g @docuaid/cli'
            }
        }
        
        stage('Documentation Check') {
            steps {
                sh 'docuaid check --path ./src --threshold 80'
            }
        }
        
        stage('Generate Documentation') {
            steps {
                sh 'docuaid generate --source ./src --output ./docs'
            }
        }
    }
    
    post {
        always {
            sh 'docuaid report --output docs/report.md'
            archiveArtifacts artifacts: 'docs/**', fingerprint: true
        }
        
        success {
            echo 'Documentation quality check passed!'
        }
        
        failure {
            echo 'Documentation quality check failed!'
        }
    }
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col items-center justify-center">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 max-w-2xl">
                  <h3 className="text-lg font-medium text-gray-900 mb-2 flex items-center">
                    <svg className="h-5 w-5 text-primary-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Need more examples?
                  </h3>
                  <p className="text-gray-600">
                    For more code examples and integration patterns, check out our 
                    <a href="#" className="text-primary-600 hover:text-primary-800 mx-1">GitHub repository</a>
                    or join our 
                    <a href="#" className="text-primary-600 hover:text-primary-800 mx-1">Developer Community</a>
                    to share and discover custom integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 flex justify-between">
        <Link to="/integrations" className="text-indigo-600 hover:text-indigo-800">
          ← Integrations
        </Link>
        <Link to="/documentation" className="text-indigo-600 hover:text-indigo-800">
          Back to Documentation
        </Link>
      </div>
    </div>
  );
};

export default CodeExamples; 