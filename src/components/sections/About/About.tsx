import { Images } from '../../../constants/app';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-dark-secondary py-20" style={{ opacity: 0 }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-accent-teal">
          About_Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="w-100 h-100 bg-gradient-to-br from-accent-teal to-accent-cyan rounded-lg mx-auto md:mx-0 animate-float">
              <img
                src= {Images.aboutMe}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg border-4 border-border-light"
              />
            </div>
          </div>

          <div>
            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              I'm a Computer Science graduate with a passion for building scalable software solutions and innovative cloud-based systems. My journey spans across mobile development, full-stack engineering, and modern cloud infrastructure.
            </p>

            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              With experience in iOS development, cloud platforms like AWS and Azure, and AI infrastructure, I bring a comprehensive perspective to software engineering challenges.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-card-darker rounded-lg border border-border-dark/30">
                <div className="text-2xl font-bold text-accent-teal">15+</div>
                <div className="text-text-muted text-sm">Projects Built</div>
              </div>
              <div className="p-4 bg-card-darker rounded-lg border border-border-dark/30">
                <div className="text-2xl font-bold text-accent-cyan">2</div>
                <div className="text-text-muted text-sm">Cloud Platforms</div>
              </div>
              <div className="p-4 bg-card-darker rounded-lg border border-border-dark/30">
                <div className="text-2xl font-bold text-accent-light-cyan">20+</div>
                <div className="text-text-muted text-sm">Technologies</div>
              </div>
              <div className="p-4 bg-card-darker rounded-lg border border-border-dark/30">
                <div className="text-2xl font-bold text-accent-teal">2024</div>
                <div className="text-text-muted text-sm">Graduation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
