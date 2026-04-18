import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors selection:bg-blue-500/30">
        <Navbar />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>
        
        <AudioPlayer />

        <footer className="py-8 bg-muted border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ayush Sharma. Built with React & Tailwind CSS.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
