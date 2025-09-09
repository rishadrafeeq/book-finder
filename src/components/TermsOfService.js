import React from 'react';

const TermsOfService = ({ onNavigate }) => {
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Terms of Service
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Please read these terms carefully before using our book discovery service.
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Acceptance of Terms</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  By accessing and using Book Finder, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Use License</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Permission is granted to temporarily use Book Finder for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose or for any public display</li>
                  <li>Attempt to reverse engineer any software contained on the website</li>
                  <li>Remove any copyright or other proprietary notations from the materials</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Service Description</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Book Finder is a free service that helps users discover books through our search functionality powered by the Open Library API.
                </p>
                <p>
                  We provide book information, cover images, and links to external sources for book access.
                </p>
                <p>
                  We do not host or provide direct access to book content - we only facilitate discovery.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">User Responsibilities</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  <strong>Lawful Use:</strong> You agree to use our service only for lawful purposes and in accordance with these terms.
                </p>
                <p>
                  <strong>Respectful Behavior:</strong> You will not use our service to harass, abuse, or harm others.
                </p>
                <p>
                  <strong>No Spam:</strong> You will not use our service to send unsolicited communications.
                </p>
                <p>
                  <strong>System Integrity:</strong> You will not attempt to interfere with or disrupt our service.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Disclaimer</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  The materials on Book Finder are provided on an 'as is' basis. Book Finder makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                <p>
                  Further, Book Finder does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Limitations</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  In no event shall Book Finder or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Book Finder, even if Book Finder or a Book Finder authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                <p>
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </div>
            </div>
          </div>

          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Governing Law</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United States and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
                </p>
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

export default TermsOfService;
