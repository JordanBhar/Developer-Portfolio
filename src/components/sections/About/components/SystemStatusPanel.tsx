const SystemStatusPanel = () => {
  const metrics = [
    { label: 'Projects Deployed', value: '15+', accentClass: 'text-accent-teal' },
    { label: 'Cloud Systems Online', value: '2', accentClass: 'text-accent-cyan' },
    { label: 'Technologies Mastered', value: '20+', accentClass: 'text-accent-light-cyan' },
    { label: 'Mission Status', value: 'Active', accentClass: 'text-accent-teal' },
  ];

  return (
    <div className="space-y-4">
      {/* System Header */}
      <div className="text-accent-cyan text-sm font-mono mb-6">SYSTEM_DIAGNOSTICS</div>

      {/* Status Modules */}
      <div className="space-y-3">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="p-4 bg-card-darker border border-border-dark/30 rounded-lg hover:border-border-dark/60 transition-colors"
          >
            <div className="text-xs font-mono text-text-muted mb-2">
              [{index + 1}] {metric.label}
            </div>
            <div className={`text-2xl font-bold ${metric.accentClass}`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>

      {/* Operational Status */}
      <div className="mt-6 p-4 bg-card-darker border border-accent-teal/30 rounded-lg">
        <div className="text-accent-teal text-sm font-mono mb-2">STATUS</div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-accent-teal rounded-full animate-pulse"></div>
          <span className="text-text-secondary text-sm">All Systems Operational</span>
        </div>
      </div>
    </div>
  );
};

export default SystemStatusPanel;
