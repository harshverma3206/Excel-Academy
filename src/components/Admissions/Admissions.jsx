import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faqs } from '../../data/faqs';

gsap.registerPlugin(ScrollTrigger);

const Admissions = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const admissionSteps = [
    { step: 1, title: 'Application Registration', description: 'Fill online form with basic details', duration: '15 mins' },
    { step: 2, title: 'Entrance Assessment', description: 'Subject-specific test for grades II-XI', duration: '2 hours' },
    { step: 3, title: 'Personal Interview', description: 'Interaction with student and parents', duration: '30 mins' },
    { step: 4, title: 'Selection & Confirmation', description: 'Results announced within 7 days', duration: '7 days' },
    { step: 5, title: 'Document Verification & Enrollment', description: 'Submit required documents and fee', duration: '2 days' },
  ];

  const feeStructure = [
    { grade: 'Pre-Primary', tuition: 45000, development: 8000, activity: 5000 },
    { grade: 'Primary (I-V)', tuition: 50000, development: 10000, activity: 6000 },
    { grade: 'Middle (VI-VIII)', tuition: 55000, development: 12000, activity: 7000 },
    { grade: 'Secondary (IX-X)', tuition: 60000, development: 15000, activity: 8000 },
    { grade: 'Senior Secondary (XI-XII)', tuition: 70000, development: 18000, activity: 10000 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.admission-step', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        x: -30,
        stagger: 0.2,
        duration: 0.6,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send to EmailJS or backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', grade: '', message: '' });
  };

  return (
    <section id="admissions" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Admissions</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          Join our community of learners and begin your journey towards excellence
        </p>

        {/* Admission Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Admission Process</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {admissionSteps.map((step) => (
              <div key={step.step} className="admission-step text-center">
                <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3">
                  {step.step}
                </div>
                <h4 className="font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                <p className="text-xs text-gray-500 mt-1">{step.duration}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Admission Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Inquiry Form</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-lg text-center">
                Thank you! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Grade Applying For *</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="">Select Grade</option>
                  <option>Pre-Primary</option>
                  <option>I-V (Primary)</option>
                  <option>VI-VIII (Middle)</option>
                  <option>IX-X (Secondary)</option>
                  <option>XI-XII (Senior Secondary)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-600 bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Fee Structure */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-6">Fee Structure</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
                <thead className="bg-secondary text-white">
                  <tr>
                    <th className="px-4 py-3 text-left">Grade</th>
                    <th className="px-4 py-3 text-left">Tuition (₹)</th>
                    <th className="px-4 py-3 text-left">Development (₹)</th>
                    <th className="px-4 py-3 text-left">Activity (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, idx) => (
                    <tr key={idx} className="border-b dark:border-gray-700">
                      <td className="px-4 py-3">{fee.grade}</td>
                      <td className="px-4 py-3">{fee.tuition.toLocaleString()}</td>
                      <td className="px-4 py-3">{fee.development.toLocaleString()}</td>
                      <td className="px-4 py-3">{fee.activity.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-4">* Additional charges may apply for transportation, meals, and other optional services.</p>
          </div> */}


          {/* FAQ Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 text-left font-semibold flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  {faq.question}
                  <span className="text-xl">{openFaq === faq.id ? '−' : '+'}</span>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 bg-white dark:bg-gray-900 border-t dark:border-gray-700">
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        </div>

        
      </div>
    </section>
  );
};

export default Admissions;