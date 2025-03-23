import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const CommunityForum = () => {
  useEffect(() => {
    // Force scroll to top when component mounts
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    
    const contentElement = document.getElementById('community-forum');
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

  // Featured discussions data
  const featuredDiscussions = [
    {
      id: 1,
      title: "Best practices for managing large documentation sets",
      author: "Emily Chen",
      avatar: "https://i.pravatar.cc/150?img=1",
      replies: 24,
      views: 1872,
      category: "Best Practices",
      excerpt: "When working with documentation that spans multiple repositories and thousands of files, I've found that organizing by domain rather than by repository structure makes navigation much easier for end users..."
    },
    {
      id: 2,
      title: "Custom integration with Notion - walkthrough guide",
      author: "Jamal Washington",
      avatar: "https://i.pravatar.cc/150?img=2",
      replies: 18,
      views: 1540,
      category: "Integrations",
      excerpt: "I've created a custom integration between DocuAid and Notion using the custom integrations SDK. This post walks through the setup process and provides example code for syncing documentation..."
    },
    {
      id: 3,
      title: "How we reduced AI response time by 60% with custom tuning",
      author: "Sarah Miller",
      avatar: "https://i.pravatar.cc/150?img=3",
      replies: 32,
      views: 2150,
      category: "Performance",
      excerpt: "Our team was facing challenges with response times for specialized technical documentation. By implementing custom training with domain-specific vocabulary and fine-tuning the response parameters..."
    }
  ];

  // Categories data
  const categories = [
    { name: "General Discussion", count: 246, description: "General discussions about DocuAid features and usage" },
    { name: "Troubleshooting", count: 183, description: "Get help with technical issues and configuration problems" },
    { name: "Best Practices", count: 127, description: "Share and discover best practices for documentation management" },
    { name: "Feature Requests", count: 94, description: "Suggest new features and improvements for DocuAid" },
    { name: "Integrations", count: 156, description: "Discussions about integrating DocuAid with other tools and platforms" },
    { name: "Performance", count: 73, description: "Tips and discussions about optimizing DocuAid performance" },
    { name: "Show & Tell", count: 68, description: "Share your DocuAid implementation and what you've built" },
    { name: "API & Development", count: 105, description: "Technical discussions about the DocuAid API and development" }
  ];

  // Recent discussions data
  const recentDiscussions = [
    {
      id: 101,
      title: "How to implement role-based access for documentation sections?",
      author: "Chris Taylor",
      time: "2 hours ago",
      category: "General Discussion",
      replies: 3
    },
    {
      id: 102,
      title: "Issue with PDF parsing for tables with merged cells",
      author: "Priya Patel",
      time: "5 hours ago",
      category: "Troubleshooting",
      replies: 7
    },
    {
      id: 103,
      title: "Sharing our custom VS Code theme for documentation writers",
      author: "Diego Ramirez",
      time: "8 hours ago",
      category: "Show & Tell",
      replies: 12
    },
    {
      id: 104,
      title: "DocuAid integration with Slack - slash command not responding",
      author: "Jordan Lee",
      time: "12 hours ago",
      category: "Troubleshooting",
      replies: 5
    },
    {
      id: 105,
      title: "Requesting export to PDF feature for search results",
      author: "Olivia Johnson",
      time: "14 hours ago",
      category: "Feature Requests",
      replies: 9
    },
    {
      id: 106,
      title: "Optimizing document indexing for large technical codebases",
      author: "Wei Zhang",
      time: "1 day ago",
      category: "Performance",
      replies: 15
    }
  ];

  // Community guidelines
  const communityGuidelines = [
    "Be respectful and constructive in all interactions",
    "Keep discussions on-topic and relevant to DocuAid",
    "Do not share private API keys or sensitive information",
    "Use code blocks for sharing code snippets",
    "Search before posting to avoid duplicate topics",
    "Tag your posts with appropriate categories",
    "Provide sufficient context when asking for help"
  ];

  return (
    <div 
      id="community-forum" 
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-auto"
      style={{ 
        paddingTop: "80px",
        paddingBottom: "40px"
      }}
    >
      <div className="sticky top-0 bg-gray-50 py-4 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900">Community Forum</h1>
        <p className="text-lg text-gray-500 mt-2">
          Connect with other DocuAid users, share knowledge, and get help from the community
        </p>
      </div>

      {/* Forum Overview Section */}
      <section className="mt-12">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome to the DocuAid Community</h2>
          <p className="text-gray-600 mt-1">
            Join thousands of documentation professionals to learn, share, and grow together.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 text-primary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Ask Questions</h3>
            <p className="text-gray-600">
              Get help from experienced DocuAid users and our support team. No question is too small!
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-secondary-100 text-secondary-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Knowledge</h3>
            <p className="text-gray-600">
              Post tutorials, best practices, and success stories to help others make the most of DocuAid.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center w-12 h-12 rounded-md bg-accent-100 text-accent-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Stay Updated</h3>
            <p className="text-gray-600">
              Get the latest news, feature announcements, and community events directly from our team.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-12">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Ready to Join?</h3>
          </div>
          <div className="px-6 py-5">
            <p className="text-gray-600 mb-6">
              Our community forum is hosted on Discourse, providing a powerful platform for discussions and knowledge sharing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Join the Forum
              </a>
              <a
                href="#"
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Browse as Guest
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Discussions Section */}
      <section className="mb-12">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Featured Discussions</h2>
          <p className="text-gray-600 mt-1">
            Popular and helpful threads from our community
          </p>
        </div>

        <div className="space-y-6">
          {featuredDiscussions.map((discussion) => (
            <div key={discussion.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-6 py-4">
                <div className="flex items-start">
                  <img 
                    src={discussion.avatar} 
                    alt={discussion.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {discussion.category}
                      </span>
                      <div className="text-sm text-gray-500">
                        <span className="mr-2">{discussion.replies} replies</span>
                        <span>{discussion.views} views</span>
                      </div>
                    </div>
                    <h3 className="mt-2 text-lg font-semibold text-gray-900">
                      <a href="#" className="hover:text-primary-600">{discussion.title}</a>
                    </h3>
                    <p className="mt-2 text-gray-600">{discussion.excerpt}</p>
                    <div className="mt-4 flex items-center">
                      <span className="text-sm font-medium text-gray-900">Posted by {discussion.author}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-800">
                  Read full discussion →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-12">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <p className="text-gray-600 mt-1">
            Browse discussions by topic
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-5 py-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    <a href="#" className="hover:text-primary-600">{category.name}</a>
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    {category.count} topics
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Discussions Section */}
      <section className="mb-12">
        <div className="border-l-4 border-primary-500 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recent Discussions</h2>
          <p className="text-gray-600 mt-1">
            The latest conversations from our community
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <ul className="divide-y divide-gray-200">
            {recentDiscussions.map((discussion) => (
              <li key={discussion.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-base font-medium text-gray-900">
                      <a href="#" className="hover:text-primary-600">{discussion.title}</a>
                    </h4>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <span>By {discussion.author}</span>
                      <span className="mx-2">•</span>
                      <span>{discussion.time}</span>
                      <span className="mx-2">•</span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {discussion.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-sm font-medium text-gray-500">
                    {discussion.replies} {discussion.replies === 1 ? 'reply' : 'replies'}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">
              View all discussions →
            </a>
          </div>
        </div>
      </section>

      {/* Community Guidelines Section */}
      <section className="mb-12">
        <div className="border-l-4 border-gray-300 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Community Guidelines</h2>
          <p className="text-gray-600 mt-1">
            Please follow these guidelines to keep our community helpful and respectful
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="px-6 py-5">
            <ul className="space-y-3">
              {communityGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{guideline}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 bg-blue-50 p-4 rounded-md border border-blue-200">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    Please note that all forum posts are public. Do not share sensitive information such as API keys or personal data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="mb-12">
        <div className="border-l-4 border-gray-300 pl-4 mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Community Support</h2>
          <p className="text-gray-600 mt-1">
            Additional ways to get help and engage with the community
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Knowledge Base</h3>
            <p className="text-gray-600 mb-4">
              Browse our comprehensive knowledge base for tutorials, guides, and FAQs.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">
              Visit Knowledge Base →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Discord Community</h3>
            <p className="text-gray-600 mb-4">
              Join our Discord for real-time chat with other users and community managers.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">
              Join Discord →
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Monthly Webinars</h3>
            <p className="text-gray-600 mb-4">
              Attend our monthly webinars to learn from experts and ask questions live.
            </p>
            <a href="#" className="text-primary-600 hover:text-primary-800 font-medium">
              Webinar Schedule →
            </a>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-between">
        <Link to="/documentation" className="text-indigo-600 hover:text-indigo-800">
          ← Back to Documentation
        </Link>
      </div>
    </div>
  );
};

export default CommunityForum; 