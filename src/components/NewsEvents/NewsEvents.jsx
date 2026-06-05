import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { news } from '../../data/news';
import { events } from '../../data/events';

gsap.registerPlugin(ScrollTrigger);

const NewsEvents = () => {
  const sectionRef = useRef(null);
  const [activeTab, setActiveTab] = useState('news');
  const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from('.news-card, .event-card', {
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: 'top 80%',
  //       },
  //       opacity: 0,
  //       y: 30,
  //       stagger: 0.1,
  //       duration: 0.6,
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, [activeTab]);

  return (
    <section id="news" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <h2 className="section-title">News & Events</h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Stay updated with the latest happenings at our school
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('news')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'news'
                ? 'bg-secondary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            📰 Latest News
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'events'
                ? 'bg-secondary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:shadow-md'
            }`}
          >
            📅 Upcoming Events
          </button>
        </div>

        {/* News Tab */}
        {activeTab === 'news' && (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item) => (
              <div key={item.id} className="news-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer" onClick={() => setSelectedItem({ type: 'news', data: item })}>
                <div className="h-48 bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-5xl">
                  {item.category === 'Achievement' && '🏆'}
                  {item.category === 'Event' && '🎉'}
                  {item.category === 'Announcement' && '📢'}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{item.summary}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-xs">
                      {item.category}
                    </span>
                    <button className="text-secondary text-sm hover:underline">Read More →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event) => (
              <div key={event.id} className="event-card bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg card-hover cursor-pointer" onClick={() => setSelectedItem({ type: 'event', data: event })}>
                <div className="h-48 bg-gradient-to-br from-secondary to-blue-600 flex items-center justify-center text-5xl">
                  {event.type === 'Academic' && '📚'}
                  {event.type === 'Cultural' && '🎭'}
                  {event.type === 'Sports' && '⚽'}
                  {event.type === 'Workshop' && '💼'}
                  {event.type === 'Meeting' && '👥'}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-secondary">{event.name}</h3>
                    <span className="text-xs text-gray-500">{event.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{event.time} | {event.venue}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-xs">
                      {event.type}
                    </span>
                    <button className="text-secondary text-sm hover:underline">Register →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal for Details */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={() => setSelectedItem(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b dark:border-gray-700 flex justify-between items-center">
                <h3 className="text-2xl font-bold">{selectedItem.data.title || selectedItem.data.name}</h3>
                <button onClick={() => setSelectedItem(null)} className="text-gray-500 hover:text-gray-700 text-2xl">
                  ×
                </button>
              </div>
              <div className="p-6">
                {selectedItem.type === 'news' ? (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{selectedItem.data.date}</p>
                    <p className="text-gray-700 dark:text-gray-300">{selectedItem.data.content}</p>
                  </>
                ) : (
                  <>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">{selectedItem.data.date} | {selectedItem.data.time}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Venue: {selectedItem.data.venue}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{selectedItem.data.description}</p>
                    <button className="btn-primary">Register for Event</button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEvents;