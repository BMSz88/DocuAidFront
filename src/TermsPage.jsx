import React from 'react';
import { FileText, AlertTriangle, ShieldCheck } from 'lucide-react';
import Button from './components/Button.jsx';

const TermsPage = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-xl text-gray-500">
              Last updated: March 1, 2025
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-primary">
            <p>
              Welcome to DocuAid. Please read these Terms of Service ("Terms") carefully as they contain important 
              information about your legal rights, remedies, and obligations. By accessing or using DocuAid, 
              you agree to comply with and be bound by these Terms.
            </p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using DocuAid's website, browser extension, API, or any other services provided 
              by DocuAid (collectively, the "Services"), you agree to be bound by these Terms. If you do not 
              agree to these Terms, you may not access or use the Services.
            </p>

            <h2>2. Description of Services</h2>
            <p>
              DocuAid provides AI-powered tools designed to enhance the way users interact with technical 
              documentation. Our Services may include browser extensions, APIs, and web applications that assist 
              users in finding, understanding, and utilizing information from documentation sources.
            </p>

            <h2>3. User Accounts</h2>
            <p>
              To access certain features of the Services, you may need to create an account. You are responsible 
              for maintaining the confidentiality of your account credentials and for all activities that occur 
              under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            <p>
              You represent and warrant that the information you provide during account registration is accurate, 
              complete, and current at all times. Failure to do so constitutes a breach of these Terms, which may 
              result in immediate termination of your account.
            </p>

            <h2>4. License and Restrictions</h2>
            <p>
              Subject to your compliance with these Terms, DocuAid grants you a limited, non-exclusive, 
              non-transferable, and revocable license to access and use the Services for your personal or 
              internal business purposes.
            </p>
            <p>
              You may not:
            </p>
            <ul>
              <li>Use the Services in any way that violates any applicable law or regulation</li>
              <li>Attempt to copy, modify, duplicate, create derivative works from, frame, mirror, republish, download, display, transmit, or distribute all or any portion of the Services</li>
              <li>Attempt to reverse compile, disassemble, reverse engineer, or otherwise reduce to human-perceivable form all or any part of the Services</li>
              <li>Access the Services in order to build a product or service that competes with DocuAid</li>
              <li>Use the Services in a way that could damage, disable, overburden, or impair our servers or networks</li>
              <li>Use automated scripts to collect information from or otherwise interact with the Services</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The Services and all content, features, and functionality thereof (including but not limited to all 
              information, software, text, displays, images, video, and audio, and the design, selection, and 
              arrangement thereof) are owned by DocuAid, its licensors, or other providers of such material and 
              are protected by copyright, trademark, patent, trade secret, and other intellectual property or 
              proprietary rights laws.
            </p>

            <h2>6. User Content</h2>
            <p>
              When you submit, upload, or otherwise make available any content through the Services ("User Content"), 
              you grant DocuAid a worldwide, non-exclusive, royalty-free license to use, copy, modify, create 
              derivative works based upon, distribute, and display the User Content in connection with operating 
              and providing the Services.
            </p>
            <p>
              You represent and warrant that you own or have the necessary rights to grant us the license to 
              use the User Content as described above, and that the User Content does not violate the rights of 
              any third party.
            </p>

            <h2>7. Privacy</h2>
            <p>
              Our Privacy Policy, which is incorporated into these Terms by reference, describes how we collect, 
              use, and share information about you when you use the Services. By using the Services, you consent 
              to our collection, use, and sharing of information as described in our Privacy Policy.
            </p>

            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Services immediately, without prior notice 
              or liability, for any reason, including if you breach these Terms. Upon termination, your right to 
              use the Services will cease immediately.
            </p>

            <h2>9. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. 
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, DOCUAID DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT 
              LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            <p>
              DOCUAID DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE.
            </p>

            <h2>10. Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL DOCUAID BE LIABLE FOR ANY INDIRECT, 
              INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, 
              DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY 
              TO ACCESS OR USE THE SERVICES.
            </p>

            <h2>11. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of California, 
              without regard to its conflict of law provisions.
            </p>

            <h2>12. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a 
              revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined at our sole discretion.
            </p>

            <h2>13. Contact Information</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              Email: legal@docuaid.com<br />
              Address: 123 Tech Street, Suite 100, San Francisco, CA 94105
            </p>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">
                Have questions about our Terms of Service?
              </p>
              <Button variant="primary">Contact Our Legal Team</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Points Summary */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Key Points Summary</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              While we encourage you to read our full Terms of Service, here are some important highlights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FileText className="w-8 h-8 text-primary-500" />,
                title: "License Limitations",
                description: "Our services are for your personal or internal business use. You cannot copy, modify, or create competing products from our services."
              },
              {
                icon: <AlertTriangle className="w-8 h-8 text-primary-500" />,
                title: "Account Responsibility",
                description: "You are responsible for maintaining the security of your account credentials and all activity that occurs under your account."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-primary-500" />,
                title: "Content Ownership",
                description: "You retain ownership of your content, but grant us licenses to use it to provide and improve our services."
              }
            ].map((point, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="mb-4">
                  {point.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{point.title}</h3>
                <p className="text-gray-500">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-accent-500 via-primary-500 to-secondary-500 rounded-3xl shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center lg:max-w-2xl">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to experience</span>
                  <span className="block">DocuAid for yourself?</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white opacity-90">
                  Join thousands of developers who trust DocuAid to enhance their documentation experience.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Button 
                      variant="secondary" 
                      className="bg-white hover:bg-gray-50 text-primary-600"
                    >
                      Get Started Free
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;