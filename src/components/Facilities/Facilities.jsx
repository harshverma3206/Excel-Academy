import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { facilities } from '../../data/facilities';

gsap.registerPlugin(ScrollTrigger);

const Facilities = () => {
  const sectionRef = useRef(null);
  const [selectedFacility, setSelectedFacility] = useState(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.facility-card', {
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 80%',
  //       },
  //       opacity: 0,
  //       scale: 0.9,
  //       stagger: 0.1,
  //       duration: 0.6,
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section id="facilities" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Our Facilities</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
          World-class infrastructure and facilities designed to provide the best learning environment
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {facilities.map((facility) => (
            <div
              key={facility.id}
              className="facility-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer group"
              onClick={() => setSelectedFacility(facility)}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-6xl transition-transform group-hover:scale-110 duration-300">
                  {facility.icon}
                </div>
                <div className="absolute top-2 right-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    facility.status === 'Premium' ? 'bg-yellow-500 text-white' :
                    facility.status === 'Essential' ? 'bg-green-500 text-white' :
                    'bg-blue-500 text-white'
                  }`}>
                    {facility.status}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-secondary">{facility.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-3 line-clamp-2">
                  {facility.description}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Capacity: {facility.capacity}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Facility Modal */}
        {selectedFacility && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedFacility(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full" onClick={(e) => e.stopPropagation()}>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-4xl mb-2">{selectedFacility.icon}</div>
                    <h3 className="text-2xl font-bold">{selectedFacility.name}</h3>
                  </div>
                  <button onClick={() => setSelectedFacility(null)} className="text-gray-500 hover:text-gray-700 text-2xl">
                    ×
                  </button>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedFacility.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Capacity: {selectedFacility.capacity}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status: {selectedFacility.status}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Facilities;