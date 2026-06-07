import { aboutData } from '../../../../data/about';
import '../styles/terminal.css';

const MissionProfileContent = () => {
  const mission = aboutData.missionProfile;

  return (
    <div className="space-y-6 mt-2">
      {/* Mission Summary */}
      <div className="mission-summary">
        <div className="mission-title">MISSION_PROFILE</div>
        <p className="mission-body">{mission.summary}</p>
      </div>

      {/* Specializations */}
      <div className="terminal-section">
        <div className="terminal-prompt">SPECIALIZATIONS</div>
        <ul className="terminal-list">
          {mission.specializations.map((spec) => (
            <li key={spec} className="terminal-list-item">
              {spec.toUpperCase().replace(/\s+/g, '_')}
            </li>
          ))}
        </ul>
      </div>

      {/* Current Objectives */}
      <div className="terminal-section">
        <div className="terminal-prompt">CURRENT_OBJECTIVES</div>
        <div className="terminal-content space-y-2">
          {mission.objectives.map((obj) => (
            <div key={obj.title} className="data-readout">
              <span>{obj.title}</span>
              <span className="data-value">{obj.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Engineering Focus */}
      <div className="terminal-section">
        <div className="terminal-prompt">ENGINEERING_FOCUS</div>
        <ul className="terminal-list">
          {mission.engineeringFocus.map((focus) => (
            <li key={focus} className="terminal-list-item">
              {focus.toUpperCase().replace(/\s+/g, '_')}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MissionProfileContent;
