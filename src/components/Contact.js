import React, { useState } from 'react';

const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        {/* Large floating orbs */}
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
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-md rounded-3xl shadow-2xl mb-6 bounce-gentle border border-white/20">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent drop-shadow-lg">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Get in touch with us! We'd love to hear from you.
          </p>
        </header>

        <div className="max-w-7xl mx-auto">
          {/* Contact Form Section */}
          <div className="card-elevated p-8 mb-8 fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Send us a Message</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                <div className="flex items-center justify-center">
                  <svg className="h-6 w-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-green-800 font-semibold text-lg">Message sent successfully! We'll get back to you soon.</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-3">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="input-field"
                  placeholder="What's this about?"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="input-field resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary px-12 py-4 text-lg font-semibold flex items-center justify-center gap-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Contact Details */}
            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Email Us</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-green-600 mx-auto rounded-full"></div>
              </div>
              <div className="text-center space-y-3">
                <p className="text-slate-600 font-medium">contact@bookfinder.com</p>
                <p className="text-slate-600 font-medium">support@bookfinder.com</p>
                <p className="text-sm text-slate-500">We respond within 24 hours</p>
              </div>
            </div>

            {/* Website Info */}
            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Visit Our Site</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
              </div>
              <div className="text-center space-y-3">
                <p className="text-slate-600 font-medium">www.bookfinder.com</p>
                <p className="text-sm text-slate-500">Available 24/7 worldwide</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-elevated p-8 fade-in">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2M9 12l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Follow Us</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center text-white hover:bg-blue-900 transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white hover:bg-pink-700 transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="card-elevated p-8 fade-in">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-4 bg-blue-50/50 rounded-r-lg">
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Is Book Finder free to use?</h3>
                  <p className="text-slate-600">Yes! Book Finder is completely free to use. No registration, payment, or hidden fees required.</p>
                </div>

                <div className="border-l-4 border-emerald-500 pl-6 py-4 bg-emerald-50/50 rounded-r-lg">
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">How do I search for books?</h3>
                  <p className="text-slate-600">Simply enter a book title, author name, or subject in the search bar and click search to find your next great read.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-purple-500 pl-6 py-4 bg-purple-50/50 rounded-r-lg">
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Can I read books directly on the site?</h3>
                  <p className="text-slate-600">Book Finder helps you discover books. Click "View on Open Library" to access the full book content.</p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6 py-4 bg-orange-50/50 rounded-r-lg">
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Do you have a mobile app?</h3>
                  <p className="text-slate-600">Currently, Book Finder is a responsive web application that works perfectly on all mobile devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
