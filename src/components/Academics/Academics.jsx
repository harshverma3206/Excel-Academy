import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { academics } from '../../data/academics';

gsap.registerPlugin(ScrollTrigger);

const Academics = () => {
  const sectionRef = useRef(null);
  const [selectedProgram, setSelectedProgram] = useState(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.academic-card', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="academics" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Our Academic Programs</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          We offer comprehensive educational programs designed to nurture young minds 
          and prepare them for future challenges.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {academics.map((program) => (
            <div
              key={program.id}
              className="academic-card bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedProgram(program)}
            >
              <div className="h-48 bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center">
                <span className="text-6xl">
                  {program.id === 1 && '📚'}
                  {program.id === 2 && '🔬'}
                  {program.id === 3 && '💻'}
                  {program.id === 4 && '🎓'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-secondary">{program.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{program.grades}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{program.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {program.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <button className="text-secondary font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Program Details */}
        {selectedProgram && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedProgram(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedProgram.name}</h3>
                <button onClick={() => setSelectedProgram(null)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedProgram.description}</p>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Subjects Offered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProgram.subjects.map((subject, idx) => (
                      <span key={idx} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-4">
                  <h4 className="font-bold mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside space-y-1">
                    {selectedProgram.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-700 dark:text-gray-300">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Highlights:</h4>
                  <p className="text-gray-700 dark:text-gray-300">{selectedProgram.highlights}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Academics;