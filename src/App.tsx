import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import Hero from '@/components/sections/Hero/Hero';
import About from '@/components/sections/About/About';
import SkillsGalaxy from '@/components/sections/SkillsGalaxy/SkillsGalaxy';
import CloudInfra from '@/components/sections/CloudInfrastructure/CloudInfra';
import Projects from '@/components/sections/Projects/Projects';
import Education from '@/components/sections/Education/Education';
import Contact from '@/components/sections/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <SkillsGalaxy />
        <CloudInfra />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
