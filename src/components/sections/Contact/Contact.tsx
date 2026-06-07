import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '../../ui/Button';
import { GlassContainer } from '../../ui/GlassContainer';

const Contact = () => {

  return (
    <section id="contact" className="min-h-screen bg-dark-secondary py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-teal rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-center text-accent-teal">
          Contact_Me
        </h2>

        <GlassContainer glow interactive className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-text-primary">
            Let's Build Something Great Together
          </h3>

          <p className="text-text-secondary mb-8 leading-relaxed">
            I'm always interested in hearing about new projects, exciting opportunities, and novel ideas. If you have something interesting to discuss, feel free to reach out!
          </p>

          {/* Contact Info */}
          <div className="space-y-4 mb-8">
            <a
              href="mailto:jordan.bhar@icloud.com"
              className="flex items-center justify-center gap-2 text-accent-teal hover:text-accent-cyan transition-colors"
            >
              <Mail size={20} />
              jordan.bhar@icloud.com
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-primary hover:bg-accent-teal/20 transition-colors text-text-secondary hover:text-accent-teal"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-dark-primary hover:bg-accent-teal/20 transition-colors text-text-secondary hover:text-accent-teal"
            >
              <Linkedin size={24} />
            </a>
          </div>

          {/* CTA Button */}
          <Button variant="primary" size="lg" className="mb-6">
            Send Email
          </Button>

          {/* Resume Download */}
          <div className="border-t border-border-dark/30 pt-6">
            <p className="text-text-muted text-sm mb-3">Prefer to review my background first?</p>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 text-accent-cyan hover:text-accent-light-cyan transition-colors"
            >
              Download Resume <ArrowUpRight size={16} />
            </a>
          </div>
        </GlassContainer>
      </div>
    </section>
  );
};

export default Contact;
