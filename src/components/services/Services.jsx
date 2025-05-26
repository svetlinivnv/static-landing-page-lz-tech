import "./styles.css";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, scalable websites and web apps using Laravel and React.",
      icon: "🌐",
    },
    {
      title: "Mobile Apps",
      description:
        "Cross-platform mobile apps with React Native for iOS and Android.",
      icon: "📱",
    },
    {
      title: "API & Backend",
      description:
        "Secure RESTful APIs, backend systems, and admin portals with Laravel.",
      icon: "🛠️",
    },
  ];

  return (
    <section
      className="services"
      id="services"
    >
      <div className="services-header">
        <h2>Our Services</h2>
        <p>End-to-end software solutions tailored to your business goals.</p>
      </div>
      <div className="services-grid">
        {services.map((service, idx) => (
          <div
            className="service-card"
            key={idx}
          >
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
