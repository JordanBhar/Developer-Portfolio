import '../styles/career-timeline.css';

const CareerTimeline = () => {
  const milestones = [
    {
      year: '2020',
      title: 'Computer Science Student',
      description: 'Began academic journey in software engineering and systems design',
      icon: '▸',
    },
    {
      year: '2022',
      title: 'Mobile Developer',
      description: 'Specialized in iOS development and mobile application architecture',
      icon: '◆',
    },
    {
      year: '2023',
      title: 'Sheridan Graduate',
      description: 'Graduated with expertise in modern software development practices',
      icon: '✦',
    },
    {
      year: '2024',
      title: 'Cloud Engineer',
      description: 'Architected scalable cloud infrastructure and deployment pipelines',
      icon: '★',
    },
    {
      year: '2025',
      title: 'AI/ML Infrastructure',
      description: 'Expanding expertise in machine learning systems and AI deployment',
      icon: '◈',
    },
  ];

  return (
    <div className="career-timeline-container">
      <div className="timeline-header">
        <span className="timeline-label">MISSION_TRAJECTORY</span>
      </div>

      <div className="constellation-timeline">
        {milestones.map((milestone, index) => (
          <div key={milestone.year} className="timeline-node">
            {/* Connecting line */}
            {index < milestones.length - 1 && <div className="node-connector" />}

            {/* Node circle with icon */}
            <div className="node-circle">
              <span className="node-icon">{milestone.icon}</span>
            </div>

            {/* Content container */}
            <div className="node-content">
              <div className="node-year">{milestone.year}</div>
              <div className="node-title">{milestone.title}</div>
              <div className="node-description">{milestone.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
