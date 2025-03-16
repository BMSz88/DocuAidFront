import React from 'react';
import { Shield, Lock, Eye, FileText, UserCheck } from 'lucide-react';
import Button from './components/Button.jsx';

const PrivacyPage = () => {
  return (
    <div className="pt-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Privacy Policy
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
              At DocuAid, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you use our website, browser extension, 
              or any of our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access our services.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect information in several ways when you use our services:
            </p>
            <ul>
              <li>
                <strong>Personal Information</strong>: When you create an account, we collect your name, email address, 
                and other contact information you provide.
              </li>
              <li>
                <strong>Usage Data</strong>: We collect information about how you interact with our services, including 
                the features you use, the time spent, and the pages you visit.
              </li>
              <li>
                <strong>Documentation Content</strong>: To provide AI-powered assistance, we process the 
                content of documentation pages you interact with while using our browser extension.
              </li>
              <li>
                <strong>Device Information</strong>: We collect information about your device, including 
                your browser type and operating system.
              </li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>
              We use the information we collect in various ways, including:
            </p>
            <ul>
              <li>To provide, maintain, and improve our services</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To understand and analyze how you use our services</li>
              <li>To communicate with you, including providing customer support</li>
              <li>To detect, prevent, and address technical issues or security breaches</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to 
              protect the security of any personal information we process. These measures include:
            </p>
            <ul>
              <li>Encryption of personal data in transit and at rest</li>
              <li>Regular security assessments and penetration testing</li>
              <li>Access controls and authentication mechanisms</li>
              <li>Regular monitoring for potential vulnerabilities</li>
            </ul>
            <p>
              However, please also understand that no security system is impenetrable. We cannot guarantee 
              the absolute security of our databases, nor can we guarantee that information you supply 
              will not be intercepted while being transmitted to us over the Internet.
            </p>

            <h2>Third-Party Services</h2>
            <p>
              Our services may contain links to other websites or services that are not owned or controlled 
              by DocuAid. We are not responsible for the privacy practices of any third-party websites or services.
            </p>

            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes 
              set out in this Privacy Policy. We will retain and use your information to the extent necessary 
              to comply with our legal obligations, resolve disputes, and enforce our policies.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our service is not intended for use by children under the age of 13. We do not knowingly 
              collect personally identifiable information from children under 13. If we discover that a 
              child under 13 has provided us with personal information, we will delete such information 
              from our servers immediately.
            </p>

            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request that we correct any inaccurate personal information</li>
              <li>The right to request that we delete your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section.
            </p>

            <h2>Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date at the top.
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this 
              Privacy Policy are effective when they are posted on this page.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: docuaid2025@gmail.com<br />
              
            </p>
          </div>
          
          <div className="mt-12 border-t pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">
                Need more information about how we handle your data?
              </p>
              <Button variant="primary">Contact Our Privacy Team</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Features */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">How We Protect Your Privacy</h2>
            <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
              DocuAid is committed to maintaining the highest standards of data privacy and security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8 text-primary-500" />,
                title: "Data Protection",
                description: "Your data is encrypted in transit and at rest using industry-standard encryption protocols."
              },
              {
                icon: <Lock className="w-8 h-8 text-primary-500" />,
                title: "Secure Infrastructure",
                description: "Our systems are hosted in SOC 2 compliant data centers with 24/7 monitoring."
              },
              {
                icon: <Eye className="w-8 h-8 text-primary-500" />,
                title: "Transparency",
                description: "We're clear about what data we collect and how we use it to provide our services."
              },
              {
                icon: <UserCheck className="w-8 h-8 text-primary-500" />,
                title: "User Control",
                description: "You maintain control over your data with easy-to-use privacy settings and export options."
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-500">{feature.description}</p>
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
                  <span className="block">Trust and transparency</span>
                  <span className="block">are our core values</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white opacity-90">
                  Sign up today and experience powerful AI documentation assistance without compromising your privacy.
                </p>
                <div className="mt-8">
                  <div className="inline-flex rounded-md shadow">
                    <Button 
                      variant="secondary" 
                      className="bg-white hover:bg-gray-50 text-primary-600"
                    >
                      Get Started
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

export default PrivacyPage;