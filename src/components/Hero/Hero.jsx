import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import gsap from 'gsap';
import { schoolConfig } from '../../data/config';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
      gsap.from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
      });
      gsap.from(buttonsRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <img
          src="/hero-bg.jpg"
          alt="School Campus"
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3';
          }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-20 text-center text-white">
        <div ref={titleRef}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            {schoolConfig.name}
          </h1>
        </div>
        <div ref={subtitleRef}>
          <p className="text-xl md:text-2xl lg:text-3xl mb-6 text-gray-200">
            {schoolConfig.motto}
          </p>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
            {schoolConfig.description}
          </p>
        </div>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="admissions" smooth={true} duration={500}>
            <button className="btn-primary text-lg">
              Apply Now
            </button>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <button className="btn-secondary text-lg bg-white/10 backdrop-blur-sm">
              Learn More
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button className="btn-secondary text-lg bg-white/10 backdrop-blur-sm">
              Contact Us
            </button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Link to="about" smooth={true} duration={500}>
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;