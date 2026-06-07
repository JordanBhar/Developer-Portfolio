import '../styles/data-connections.css';

const DataConnections = () => {
  return (
    <svg className="data-connections-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
      {/* Define gradients and patterns */}
      <defs>
        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(6, 182, 212, 0.6)', stopOpacity: 1 }} />
          <stop offset="50%" style={{ stopColor: 'rgba(20, 184, 166, 0.4)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(34, 211, 238, 0.6)', stopOpacity: 1 }} />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Connection Lines - Profile to Timeline */}
      <path
        className="connection-line"
        d="M 200 300 Q 400 400, 600 500"
        stroke="url(#connectionGradient)"
        strokeWidth="1"
        fill="none"
        filter="url(#glow)"
      />

      {/* Connection Lines - Timeline to Status Panel */}
      <path
        className="connection-line"
        d="M 600 500 Q 800 400, 1000 300"
        stroke="url(#connectionGradient)"
        strokeWidth="1"
        fill="none"
        filter="url(#glow)"
      />

      {/* Data Stream Pulse Points */}
      <circle className="pulse-point pulse-1" cx="200" cy="300" r="3" fill="#06b6d4" />
      <circle className="pulse-point pulse-2" cx="600" cy="500" r="3" fill="#14b8a6" />
      <circle className="pulse-point pulse-3" cx="1000" cy="300" r="3" fill="#22d3ee" />

      {/* Energy Conduit Tubes */}
      <path
        className="energy-conduit"
        d="M 200 300 Q 400 400, 600 500"
        stroke="none"
        strokeWidth="4"
        fill="none"
      />
      <path
        className="energy-conduit"
        d="M 600 500 Q 800 400, 1000 300"
        stroke="none"
        strokeWidth="4"
        fill="none"
      />

      {/* Data Nodes */}
      <g className="data-node node-1">
        <circle cx="200" cy="300" r="8" className="node-core" />
        <circle cx="200" cy="300" r="12" className="node-ring" />
      </g>

      <g className="data-node node-2">
        <circle cx="600" cy="500" r="8" className="node-core" />
        <circle cx="600" cy="500" r="12" className="node-ring" />
      </g>

      <g className="data-node node-3">
        <circle cx="1000" cy="300" r="8" className="node-core" />
        <circle cx="1000" cy="300" r="12" className="node-ring" />
      </g>

      {/* Animated Data Particle Paths */}
      <g className="particle-path">
        <circle className="particle particle-1" r="1.5" />
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#path1" />
        </animateMotion>
      </g>

      <g className="particle-path">
        <circle className="particle particle-2" r="1.5" />
        <animateMotion dur="4s" repeatCount="indefinite">
          <mpath href="#path2" />
        </animateMotion>
      </g>
    </svg>
  );
};

export default DataConnections;
