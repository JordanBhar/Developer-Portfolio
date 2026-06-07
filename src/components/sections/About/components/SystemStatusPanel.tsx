import '../styles/system-status.css';

const SystemStatusPanel = () => {
  const metrics = [
    { label: 'Projects Deployed', value: '15+', accentClass: 'teal', progress: 75 },
    { label: 'Cloud Systems Online', value: '2', accentClass: 'cyan', progress: 100 },
    { label: 'Technologies Mastered', value: '20+', accentClass: 'light-cyan', progress: 85 },
    { label: 'Mission Status', value: 'ACTIVE', accentClass: 'cyan', progress: 100 },
  ];

  return (
    <div className="space-y-4">
      {/* System Diagnostics Header */}
      <div className="system-diagnostics-header" />

      {/* Status Modules */}
      <div className="space-y-3">
        {metrics.map((metric) => (
          <div key={metric.label} className="status-module">
            <div className="module-index">
              {metric.label}
            </div>
            <div className={`module-value ${metric.accentClass}`}>
              {metric.value}
            </div>
            <div className="progress-bar-container">
              <div className="progress-bar-label">OPERATIONAL</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ '--progress-width': `${metric.progress}%` } as React.CSSProperties}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Operational Status */}
      <div className="operational-status">
        <div className="status-title">SYSTEM_STATUS</div>
        <div className="status-indicator-container">
          <div className="status-indicator-dot" />
          <span className="status-text">All Systems Operational</span>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPanel;
