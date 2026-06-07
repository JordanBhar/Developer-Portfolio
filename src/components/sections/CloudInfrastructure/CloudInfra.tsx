const CloudInfra = () => {

  return (
    <section className="min-h-screen bg-dark-secondary py-20">
      <div className="max-w-7xl mx-auto my-10 px-6">
        <h2 className="text-4xl md:text-5xl font-bold font-mono mb-12 text-accent-teal">
          Cloud_Infrastructure
        </h2>

        <div className="relative h-96 bg-card-darker rounded-lg border border-border-dark/30 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl opacity-20 mb-4">☁️</div>
            <p className="text-text-muted">3D Cloud Architecture Scene - Coming Soon</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg border border-border-dark/30 bg-card-darker">
            <h3 className="text-lg font-mono text-accent-teal mb-2">Services</h3>
            <p className="text-text-muted text-sm">
              Load Balancers, API Gateways, Microservices, Databases, Caching, CI/CD
            </p>
          </div>
          <div className="p-6 rounded-lg border border-border-dark/30 bg-card-darker">
            <h3 className="text-lg font-mono text-accent-cyan mb-2">Platforms</h3>
            <p className="text-text-muted text-sm">
              AWS, Azure, Docker, Kubernetes, Terraform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudInfra;
