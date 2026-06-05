import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { faculty } from '../../data/faculty';

gsap.registerPlugin(ScrollTrigger);

const Faculty = () => {
  const sectionRef = useRef(null);
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('All');

  const departments = ['All', ...new Set(faculty.map(m => m.department))];
  const filteredFaculty = filter === 'All' ? faculty : faculty.filter(m => m.department === filter);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.faculty-card', {
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 80%',
  //       },
  //       opacity: 0,
  //       x: -30,
  //       stagger: 0.1,
  //       duration: 0.6,
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, [filter]);

  return (
    <section id="faculty" ref={sectionRef} className="py-20 bg-white dark:bg-gray-900">
      <div className="container-custom">
        <h2 className="section-title">Our Faculty & Staff</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Meet our dedicated team of experienced educators and staff who are committed to student success
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === dept
                  ? 'bg-secondary text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFaculty.map((member) => (
            <div
              key={member.id}
              className="faculty-card bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-6xl">
                  {member.name.charAt(0)}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1 text-secondary">{member.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{member.designation}</p>
                <p className="text-xs text-gray-500 dark:text-gray-500">{member.department}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-xs text-gray-500">{member.experience} experience</span>
                  <button className="text-secondary text-sm hover:underline">View Profile →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Modal */}
        {selectedMember && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedMember(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-secondary to-blue-600"></div>
                <button onClick={() => setSelectedMember(null)} className="absolute top-4 right-4 text-white text-2xl">
                  ×
                </button>
                <div className="absolute -bottom-12 left-8">
                  <div className="w-24 h-24 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-3xl font-bold shadow-lg">
                    {selectedMember.name.charAt(0)}
                  </div>
                </div>
              </div>
              <div className="p-6 pt-16">
                <h3 className="text-2xl font-bold mb-1">{selectedMember.name}</h3>
                <p className="text-secondary font-semibold mb-2">{selectedMember.designation}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedMember.department}</p>
                <div className="space-y-2">
                  <p><strong>Qualifications:</strong> {selectedMember.qualifications}</p>
                  <p><strong>Experience:</strong> {selectedMember.experience}</p>
                  <p><strong>Email:</strong> {selectedMember.email}</p>
                  <p><strong>Expertise:</strong> {selectedMember.expertise}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Faculty;