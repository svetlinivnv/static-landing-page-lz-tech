import "./styles.css";

export default function Hero() {
  return (
    <section
      className="hero"
      id="hero"
    >
      <div className="hero-content">
        <h1>
          Building the Future of <span className="highlight">Software</span>
        </h1>
        <p>
          Lazer-tech delivers cutting-edge digital solutions to launch your
          business into tomorrow.
        </p>
        <div className="hero-buttons">
          <a
            href="#services"
            className="btn primary"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="btn secondary"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
