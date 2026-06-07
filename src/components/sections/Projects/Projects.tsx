import { projects } from '@/data/projects';
import { ArrowUpRight } from 'lucide-react';

const Projects = () => {

  return (
    <section id="projects" className="min-h-screen bg-dark-primary py-20" style={{ opacity: 0 }}>
      <div className="max-w-7xl mx-auto my-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-accent-teal">
          Projects_Showcase
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden border border-border-dark/30 bg-card-darker hover:border-accent-teal/50 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-accent-teal/20 to-accent-cyan/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl opacity-20">📦</div>
                  <p className="text-text-muted text-sm mt-2">{project.title}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold font-mono text-text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-text-muted text-sm mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full bg-accent-teal/20 text-accent-teal border border-accent-teal/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-text-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="text-xs text-text-muted mb-4 space-y-1">
                    {project.metrics.map((metric) => (
                      <div key={metric}>✓ {metric}</div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-teal hover:text-accent-cyan transition-colors flex items-center gap-1"
                    >
                      GitHub <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-accent-cyan hover:text-accent-light-cyan transition-colors flex items-center gap-1"
                    >
                      Demo <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
