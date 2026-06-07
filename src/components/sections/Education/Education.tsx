import { education } from '@/data/education';

const Education = () => {

  return (
    <section className="min-h-screen bg-dark-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-accent-teal">
          Education_Timeline
        </h2>

        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-4 h-4 bg-accent-teal rounded-full -translate-x-2 animate-glowPulse" />

              {/* Timeline card */}
              <div className="ml-8 p-6 rounded-lg border border-border-dark/30 bg-card-darker">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold font-mono text-text-primary">
                      {edu.institution}
                    </h3>
                    <p className="text-accent-teal font-mono text-sm mt-1">
                      {edu.startYear} - {edu.endYear}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-text-secondary font-semibold">{edu.degree}</p>
                  <p className="text-text-muted text-sm">Focus: {edu.field}</p>
                </div>

                {edu.coursework && (
                  <div className="mb-4">
                    <p className="text-text-muted text-sm font-semibold mb-2">Key Coursework:</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span
                          key={course}
                          className="text-xs px-2 py-1 rounded-full bg-accent-teal/20 text-accent-teal border border-accent-teal/30"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
