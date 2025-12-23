import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useCursorTrail from './hooks/useCursorTrail';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/theme.css';

function App() {
  useCursorTrail();

  useEffect(() => {
    document.title = 'Harini\'s Portfolio';
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <div id="hero">
          <Hero />
        </div>

        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <About />
        <div id="contact">
          <Contact />
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
