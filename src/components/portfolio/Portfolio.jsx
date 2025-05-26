import "./styles.css";

export default function Portfolio() {
  const projects = [
    {
      name: "NovaPOS",
      description:
        "A modern point-of-sale system built with Laravel and React.",
      image:
        "https://arirms.com/wp-content/uploads/2020/05/Retail-Management-Software.png",
      tech: ["Laravel", "React"],
    },
    {
      name: "PulseApp",
      description: "A cross-platform fitness tracker built with React Native.",
      image: "https://kean.blog/images/posts/pulse-app-store/promo-1.png",
      tech: ["React Native"],
    },
    {
      name: "Tracklytics",
      description:
        "Web-based analytics dashboard for business KPIs and customer insights.",
      image:
        "https://cdn.dribbble.com/userupload/17454525/file/original-aa4cfea1c2eb4d0056e121e919321872.jpg",
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
