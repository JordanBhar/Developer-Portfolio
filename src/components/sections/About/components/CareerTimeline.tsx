import { aboutData } from '../../../../data/about';
import '../styles/career-timeline.css';

const CareerTimeline = () => {
  const milestones = aboutData.careerTimeline;

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
