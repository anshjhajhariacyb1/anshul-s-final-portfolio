import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';
import { useScrollSpy } from './hooks/useScrollSpy';

function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useScrollSpy([
    'hero',
    'about',
    'skills',
    'projects',
    'education',
    'contact'
  ]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-[#030712] dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Frosted Navbar */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Single-Page Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer & Back to Top */}
      <Footer />
    </div>
  );
}

export default App;
