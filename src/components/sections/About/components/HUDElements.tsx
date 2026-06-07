import '../styles/hud.css';

const HUDElements = () => {
  return (
    <div className="hud-elements-container">
      {/* Top-Left: Mission Status Indicator */}
      <div className="hud-widget hud-top-left">
        <div className="hud-corner-bracket hud-top-left-bracket" />
        <div className="hud-content">
          <div className="hud-label">MISSION</div>
          <div className="hud-value">ACTIVE</div>
        </div>
      </div>

      {/* Top-Right: System Clock */}
      <div className="hud-widget hud-top-right">
        <div className="hud-corner-bracket hud-top-right-bracket" />
        <div className="hud-content">
          <div className="hud-label">UPTIME</div>
          <div className="hud-value">100%</div>
        </div>
      </div>

      {/* Bottom-Left: Diagnostic Status */}
      <div className="hud-widget hud-bottom-left">
        <div className="hud-corner-bracket hud-bottom-left-bracket" />
        <div className="hud-content">
          <div className="hud-label">SYSTEMS</div>
          <div className="hud-value">ONLINE</div>
        </div>
      </div>

      {/* Bottom-Right: Signal Strength */}
      <div className="hud-widget hud-bottom-right">
        <div className="hud-corner-bracket hud-bottom-right-bracket" />
        <div className="hud-content">
          <div className="hud-label">SIGNAL</div>
          <div className="hud-value">STRONG</div>
        </div>
      </div>

      {/* Floating Data Labels */}
      <div className="floating-labels">
        <div className="floating-label label-1">
          <span className="label-bracket">[</span> PAYLOAD <span className="label-bracket">]</span>
        </div>
        <div className="floating-label label-2">
          <span className="label-bracket">[</span> READY <span className="label-bracket">]</span>
        </div>
        <div className="floating-label label-3">
          <span className="label-bracket">[</span> LOCKED <span className="label-bracket">]</span>
        </div>
      </div>
    </div>
  );
};

export default HUDElements;
