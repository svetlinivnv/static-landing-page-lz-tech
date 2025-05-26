import "./styles.css";

export default function Portfolio() {
  const projects = [
    {
      name: "NovaPOS",
      description:
        "A modern point-of-sale system built with Laravel and React.",
      image:
        "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80",
      tech: ["Laravel", "React"],
    },
    {
      name: "PulseApp",
      description: "A cross-platform fitness tracker built with React Native.",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/e8/86/42/e886424a-dbb8-4abc-3683-683aa351cadb/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
      tech: ["React Native"],
    },
    {
      name: "Tracklytics",
      description:
        "Web-based analytics dashboard for business KPIs and customer insights.",
      image:
        "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
      tech: ["React", "Laravel"],
    },
  ];

  return (
    <section
      className="portfolio"
      id="portfolio"
    >
      <div className="portfolio-header">
        <h2>Our Work</h2>
        <p>Some of the latest digital experiences we've crafted.</p>
      </div>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div
            className="project-card"
            key={idx}
          >
            <div className="project-image">
              <img
                src={project.image}
                alt={project.name}
              />
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="tech-tags">
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
