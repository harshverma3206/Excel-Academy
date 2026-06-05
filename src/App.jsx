import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Academics from './components/Academics/Academics';
import Facilities from './components/Facilities/Facilities';
import Faculty from './components/Faculty/Faculty';
import StudentLife from './components/StudentLife/StudentLife';
import Admissions from './components/Admissions/Admissions';
import NewsEvents from './components/NewsEvents/NewsEvents';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import BackToTopButton from './components/Common/BackToTopButton';

function App() {
  // useEffect(() => {
  //   // Initialize smooth scrolling
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     orientation: 'vertical',
  //     gestureOrientation: 'vertical',
  //     smoothWheel: true,
  //     wheelMultiplier: 1,
  //     touchMultiplier: 2,
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Academics />
        <Facilities />
        <Faculty />
        <StudentLife />
        <Admissions />
        <NewsEvents />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;