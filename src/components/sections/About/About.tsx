import PersonnelProfile from './components/PersonnelProfile';
import MissionProfileContent from './components/MissionProfileContent';
import SystemStatusPanel from './components/SystemStatusPanel';
import CareerTimeline from './components/CareerTimeline';
import AtmosphereLayer from './components/AtmosphereLayer';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-dark-secondary py-20" style={{ opacity: 0 }}>
      <AtmosphereLayer />
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-16 text-accent-teal">
          Mission_Control
        </h2>

        {/* Three-Column Mission Control Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {/* Left Column: Personnel Profile */}
          <div className="flex flex-col justify-start">
            <PersonnelProfile />
          </div>

          {/* Center Column: Mission Profile Content */}
          <div className="flex flex-col justify-start">
            <MissionProfileContent />
          </div>

          {/* Right Column: System Status & Achievements */}
          <div className="flex flex-col justify-start">
            <SystemStatusPanel />
          </div>
        </div>

        {/* Career Timeline */}
        <div className="max-w-4xl mx-auto">
          <CareerTimeline />
        </div>
      </div>
    </section>
  );
};

export default About;
