import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { schoolConfig } from '../../data/config';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef([]);

  const stats = [
    { label: 'Years of Excellence', value: new Date().getFullYear() - schoolConfig.founded, icon: '📅' },
    { label: 'Happy Students', value: schoolConfig.students, icon: '👨‍🎓' },
    { label: 'Expert Faculty', value: schoolConfig.faculty, icon: '👩‍🏫' },
    { label: 'Campus Area', value: '10', unit: 'Acres', icon: '🏫' },
  ];

  const coreValues = [
    { name: 'Excellence', icon: '⭐', description: 'Striving for the highest standards in education' },
    { name: 'Integrity', icon: '💎', description: 'Building character through honesty and ethics' },
    { name: 'Innovation', icon: '💡', description: 'Embracing creativity and modern teaching methods' },
    { name: 'Inclusivity', icon: '🤝', description: 'Celebrating diversity and equal opportunities' },
    { name: 'Community', icon: '🌍', description: 'Fostering collaboration and social responsibility' },
    { name: 'Holistic Growth', icon: '🌱', description: 'Developing mind, body, and spirit' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats
      statsRef.current.forEach((stat, index) => {
        gsap.from(stat, {
          scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          delay: index * 0.1,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">About {schoolConfig.name}</h2>
        
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide quality education that nurtures curious minds, builds strong character, 
              and prepares students for global citizenship through innovative teaching and holistic development.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg card-hover">
            <div className="text-4xl mb-4">👁️</div>
            <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To be a center of educational excellence, recognized globally for producing 
              compassionate leaders, critical thinkers, and lifelong learners who contribute 
              meaningfully to society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Core Values</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md card-hover text-center"
              >
                <div className="text-5xl mb-3">{value.icon}</div>
                <h4 className="text-xl font-bold mb-2 text-secondary">{value.name}</h4>
                <p className="text-gray-700 dark:text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* Statistics */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">By the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                ref={(el) => (statsRef.current[index] = el)}
                className="bg-gradient-to-br from-secondary to-blue-600 text-white p-6 rounded-xl text-center transform hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold">
                  {stat.value}+
                  {stat.unit && <span className="text-xl"> {stat.unit}</span>}
                </div>
                <div className="text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Accreditation */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">Accreditations & Affiliations</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {schoolConfig.accreditation.map((item, index) => (
              <span key={index} className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-md">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;