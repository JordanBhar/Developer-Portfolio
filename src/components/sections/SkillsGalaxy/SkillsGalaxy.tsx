import { skillsByCategory } from '@/data/skills';

const SkillsGalaxy = () => {
  const categories = ['mobile', 'frontend', 'backend', 'cloud', 'ai'] as const;

  return (
    <section id="skills" className="min-h-screen bg-dark-primary py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-accent-teal">
          Skills_Galaxy
        </h2>

        <div className="space-y-8">
          {categories.map((category) => {
            const categorySkills = skillsByCategory(category);
            const categoryLabels = {
              mobile: 'Mobile Development',
              frontend: 'Frontend',
              backend: 'Backend',
              cloud: 'Cloud & DevOps',
              ai: 'AI & ML',
            };

            return (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-mono text-accent-cyan mb-4 capitalize">
                  {categoryLabels[category]}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-4 rounded-lg border border-border-dark/30 bg-card-darker hover:border-accent-teal/50 hover:bg-card-dark transition-all duration-300 group cursor-pointer"
                    >
                      <div className="font-mono text-sm text-text-primary group-hover:text-accent-teal transition-colors">
                        {skill.name}
                      </div>
                      <div className="text-xs text-text-muted mt-2">
                        {skill.experience}y • {skill.proficiency}
                      </div>
                      <div className="mt-3 h-1 bg-border-dark rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent-teal to-accent-cyan transition-all duration-300"
                          style={{
                            width: {
                              beginner: '25%',
                              intermediate: '50%',
                              advanced: '75%',
                              expert: '100%',
                            }[skill.proficiency],
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsGalaxy;
