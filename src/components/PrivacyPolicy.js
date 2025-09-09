import React from 'react';

const PrivacyPolicy = ({ onNavigate }) => {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Privacy Policy
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Information We Collect</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Search Queries:</strong> We collect the search terms you enter to provide book recommendations and improve our service.
                </p>
                <p>
                  <strong>Usage Data:</strong> We automatically collect information about how you interact with our website, including pages visited and time spent.
                </p>
                <p>
                  <strong>Device Information:</strong> We may collect information about your device, browser type, and operating system for technical purposes.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">How We Use Your Information</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Service Provision:</strong> To provide book search and recommendation services.
                </p>
                <p>
                  <strong>Improvement:</strong> To analyze usage patterns and improve our website functionality.
                </p>
                <p>
                  <strong>Communication:</strong> To respond to your inquiries and provide customer support.
                </p>
                <p>
                  <strong>Legal Compliance:</strong> To comply with applicable laws and regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Data Protection</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
                </p>
                <p>
                  We use industry-standard encryption and security protocols to safeguard your data.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Your Rights</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Access:</strong> You have the right to request access to your personal information.
                </p>
                <p>
                  <strong>Correction:</strong> You can request correction of inaccurate personal information.
                </p>
                <p>
                  <strong>Deletion:</strong> You may request deletion of your personal information.
                </p>
                <p>
                  <strong>Portability:</strong> You have the right to receive your data in a structured format.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Contact Us</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@bookfinder.com</p>
                  <p><strong>Address:</strong> Book Finder Privacy Team, 123 Book Street, Library City, LC 12345</p>
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

export default PrivacyPolicy;
