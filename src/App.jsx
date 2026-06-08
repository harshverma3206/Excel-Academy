import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import ThankYou from './components/ThankYou/ThankYou';
import ScrollProgressBar from './components/Common/ScrollProgressBar';
import BackToTopButton from './components/Common/BackToTopButton';

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function AppContent() {
  // useEffect(() => {
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
    <>
      <ScrollProgressBar />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Academics />
              <Facilities />
              <Faculty />
              <StudentLife />
              <Admissions />
              <NewsEvents />
              <Contact />
            </>
          } />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;