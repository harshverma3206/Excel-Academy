import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 5 seconds ke baad home page pe redirect
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="text-center p-8 max-w-md">
        {/* Success Animation */}
        <div className="mb-6">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        {/* Thank You Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Thank You! 🎉
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Your message has been sent successfully. We'll get back to you soon!
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-4 mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Redirecting to homepage in <span className="text-blue-600 font-bold text-xl">5</span> seconds...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-6 overflow-hidden">
          <div className="bg-blue-600 h-2 rounded-full animate-progress"></div>
        </div>

        <button
          onClick={() => window.location.href = '/'}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Go to Homepage Now →
        </button>
      </div>
    </div>
  );
};

export default ThankYou;