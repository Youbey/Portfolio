import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  return (
    <div id="top" className="min-h-screen bg-slate-50">
      <Header />
      <Navigation />
      <main>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
      </main>
      <Footer />
    </div>
  );
}

export default App;
