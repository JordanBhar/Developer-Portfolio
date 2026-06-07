const MissionProfileContent = () => {
  return (
    <div className="space-y-8">
      {/* Mission Summary */}
      <div className="space-y-3">
        <h3 className="text-xl font-mono text-accent-teal">MISSION_SUMMARY</h3>
        <p className="text-text-secondary leading-relaxed">
          Computer Science graduate with a passion for building scalable software solutions and innovative cloud-based systems. Experience spans mobile development, full-stack engineering, and modern cloud infrastructure.
        </p>
      </div>

      {/* Specializations */}
      <div className="space-y-3">
        <h3 className="text-xl font-mono text-accent-cyan">SPECIALIZATIONS</h3>
        <p className="text-text-secondary leading-relaxed">
          iOS Development • Cloud Platforms (AWS, Azure) • Full-Stack Engineering • AI Infrastructure • Cloud Architecture
        </p>
      </div>

      {/* Current Objectives */}
      <div className="space-y-3">
        <h3 className="text-xl font-mono text-accent-light-cyan">CURRENT_OBJECTIVES</h3>
        <p className="text-text-secondary leading-relaxed">
          Architect innovative cloud solutions, expand expertise in AI/ML infrastructure, and contribute to mission-critical systems that drive technological advancement.
        </p>
      </div>

      {/* Engineering Focus */}
      <div className="space-y-3">
        <h3 className="text-xl font-mono text-accent-teal">ENGINEERING_FOCUS</h3>
        <p className="text-text-secondary leading-relaxed">
          Scalable backend systems • Cloud infrastructure • Real-time applications • AI/ML deployment • Mobile-first design
        </p>
      </div>
    </div>
  );
};

export default MissionProfileContent;
