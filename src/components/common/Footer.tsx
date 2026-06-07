import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-secondary border-t border-border-dark/30">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div>
            <h3 className="text-lg font-bold font-mono text-accent-teal mb-2">
              Claude_Design
            </h3>
            <p className="text-text-muted text-sm">
              Building scalable software and innovative solutions.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-primary hover:bg-accent-teal/20 transition-colors text-text-secondary hover:text-accent-teal"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-dark-primary hover:bg-accent-teal/20 transition-colors text-text-secondary hover:text-accent-teal"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jordan.bhar@icloud.com"
              className="p-2 rounded-lg bg-dark-primary hover:bg-accent-teal/20 transition-colors text-text-secondary hover:text-accent-teal"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right Section */}
          <div className="text-right text-text-muted text-sm">
            <p>&copy; {currentYear} Claude Design. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
