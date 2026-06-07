import '../styles/atmosphere.css';

const AtmosphereLayer = () => {
  return (
    <div className="atmosphere-background">
      {/* Nebula Layer - Background */}
      <div className="nebula-layer nebula-1" />
      <div className="nebula-layer nebula-2" />
      <div className="nebula-layer nebula-3" />

      {/* Distant Planet */}
      <div className="distant-planet" />

      {/* Space Dust Particles */}
      <div className="space-dust">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="dust-particle" style={{ '--delay': `${i * 0.2}s` } as React.CSSProperties} />
        ))}
      </div>

      {/* Atmospheric Glow */}
      <div className="atmospheric-glow" />
    </div>
  );
};

export default AtmosphereLayer;
