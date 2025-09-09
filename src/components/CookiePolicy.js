import React from 'react';

const CookiePolicy = ({ onNavigate }) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl wave-animation"></div>
        <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-cyan-400/30 to-teal-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-r from-emerald-400/30 to-green-400/30 rounded-full blur-3xl wave-animation" style={{animationDelay: '4s'}}></div>
        
        {/* Twinkling stars */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white/60 rounded-full twinkle"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/50 rounded-full twinkle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-5 h-5 bg-white/70 rounded-full twinkle" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <header className="text-center mb-16 fade-in">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl shadow-2xl mb-6 bounce-gentle">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Cookie Policy
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Learn about how we use cookies and similar technologies to enhance your experience.
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">What Are Cookies?</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
                </p>
                <p>
                  Cookies allow a website to recognize a user's device and remember information about their visit, such as their preferred language and other settings.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">How We Use Cookies</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </p>
                <p>
                  <strong>Analytics Cookies:</strong> We use these cookies to understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
                <p>
                  <strong>Preference Cookies:</strong> These cookies remember your choices and preferences to provide a more personalized experience.
                </p>
                <p>
                  <strong>Performance Cookies:</strong> These cookies collect information about how you use our website, helping us improve its performance.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Types of Cookies We Use</h2>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Session Cookies</h3>
                  <p className="text-slate-600">
                    These are temporary cookies that expire when you close your browser. They help us maintain your session while you navigate through our website.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Persistent Cookies</h3>
                  <p className="text-slate-600">
                    These cookies remain on your device for a set period or until you delete them. They help us remember your preferences for future visits.
                  </p>
                </div>
                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-slate-800 mb-3">Third-Party Cookies</h3>
                  <p className="text-slate-600">
                    These are cookies set by third-party services we use, such as analytics providers. They help us understand how our website is used and improve our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in the cookie settings or by using your browser settings.
                </p>
                <p>
                  <strong>Browser Settings:</strong> Most web browsers allow you to control cookies through their settings preferences. You can set your browser to refuse cookies or delete certain cookies.
                </p>
                <p>
                  <strong>Cookie Settings:</strong> You can manage your cookie preferences through our cookie settings panel, which you can access at any time.
                </p>
                <p>
                  <strong>Opt-Out:</strong> You can opt out of certain third-party cookies by visiting their respective opt-out pages or using browser extensions.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Impact of Disabling Cookies</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  If you choose to disable cookies, some features of our website may not function properly. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remembering your search preferences</li>
                  <li>Maintaining your session across pages</li>
                  <li>Providing personalized recommendations</li>
                  <li>Analytics and performance monitoring</li>
                </ul>
                <p>
                  Essential cookies are necessary for the basic functionality of our website and cannot be disabled.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Updates to This Policy</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p>
                  We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Cookie Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Us</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> cookies@bookfinder.com</p>
                  <p><strong>Address:</strong> Book Finder Cookie Team, 123 Book Street, Library City, LC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center fade-in">
            <p className="text-slate-500 text-sm mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
