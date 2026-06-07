import '../styles/terminal.css';

const MissionProfileContent = () => {
  return (
    <div className="space-y-6">
      {/* Mission Summary */}
      <div className="mission-summary">
        <div className="mission-title">MISSION_PROFILE</div>
        <p className="mission-body">
          Computer Science graduate with a passion for building <span className="terminal-keyword">scalable software solutions</span> and <span className="terminal-keyword">innovative cloud-based systems</span>. Experience spans mobile development, full-stack engineering, and modern cloud infrastructure.
        </p>
      </div>

      {/* Specializations */}
      <div className="terminal-section">
        <div className="terminal-prompt">SPECIALIZATIONS</div>
        <ul className="terminal-list">
          <li className="terminal-list-item">iOS_DEV</li>
          <li className="terminal-list-item">CLOUD_NATIVE</li>
          <li className="terminal-list-item">FULL_STACK</li>
          <li className="terminal-list-item">AI_OPS</li>
          <li className="terminal-list-item">INFRASTRUCTURE</li>
        </ul>
        <p className="terminal-content mt-3">
          AWS • Azure • React • TypeScript • Python • Go • Kubernetes
        </p>
      </div>

      {/* Current Objectives */}
      <div className="terminal-section">
        <div className="terminal-prompt">CURRENT_OBJECTIVES</div>
        <div className="terminal-content space-y-2">
          <div className="data-readout">
            <span>Architect</span>
            <span className="data-value">innovative cloud solutions</span>
          </div>
          <div className="data-readout">
            <span>Expand</span>
            <span className="data-value">AI/ML infrastructure expertise</span>
          </div>
          <div className="data-readout">
            <span>Contribute</span>
            <span className="data-value">mission-critical systems</span>
          </div>
        </div>
      </div>

      {/* Engineering Focus */}
      <div className="terminal-section">
        <div className="terminal-prompt">ENGINEERING_FOCUS</div>
        <ul className="terminal-list">
          <li className="terminal-list-item">SCALABLE_SYSTEMS</li>
          <li className="terminal-list-item">CLOUD_INFRA</li>
          <li className="terminal-list-item">REAL_TIME_APPS</li>
          <li className="terminal-list-item">ML_DEPLOYMENT</li>
          <li className="terminal-list-item">MOBILE_FIRST</li>
        </ul>
      </div>
    </div>
  );
};

export default MissionProfileContent;
