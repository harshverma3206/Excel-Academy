import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { activities } from '../../data/activities';
import { achievements } from '../../data/achievements';
import { testimonials } from '../../data/testimonials';

gsap.registerPlugin(ScrollTrigger);

const StudentLife = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('activities');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.student-life-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeTab]);

  return (
    <section id="student-life" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">Student Life</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Beyond academics, we offer a vibrant student life with numerous opportunities for growth and fun
        </p>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'activities', label: 'Activities', icon: '🎯' },
            { id: 'achievements', label: 'Achievements', icon: '🏆' },
            { id: 'testimonials', label: 'Testimonials', icon: '💬' },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                activeTab === tab.id
                  ? 'bg-secondary text-white shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md'
              }`}
            >
              <span className="text-xl">{tab.icon}</span>
              <span className="font-semibold">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Activities Tab */}
        {activeTab === 'activities' && (
          <div className="student-life-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity) => (
                <div key={activity.id} className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover">
                  <div className="h-40 bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-6xl">
                    {activity.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-secondary">{activity.name}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{activity.description}</p>
                    <div className="mb-3">
                      <h4 className="font-semibold text-sm mb-1">Benefits:</h4>
                      <div className="flex flex-wrap gap-1">
                        {activity.benefits.map((benefit, idx) => (
                          <span key={idx} className="text-xs bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      <p>Coordinator: {activity.coordinator}</p>
                      <p>Schedule: {activity.schedule}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="student-life-content">
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{achievement.badge}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-lg font-bold text-secondary">{achievement.title}</h3>
                        <span className="text-sm text-gray-500">{achievement.date}</span>
                      </div>
                      <p className="font-semibold mb-1">{achievement.studentName} - {achievement.grade}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{achievement.achievementType}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Tab */}
        {activeTab === 'testimonials' && (
          <div className="student-life-content">
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg card-hover">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-2xl text-white font-bold shrink-0">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-lg">{testimonial.name}</h3>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">★</span>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-secondary mb-2">{testimonial.role}</p>
                      <p className="text-gray-700 dark:text-gray-300 italic">"{testimonial.text}"</p>
                      <p className="text-xs text-gray-500 mt-2">{testimonial.relation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentLife;