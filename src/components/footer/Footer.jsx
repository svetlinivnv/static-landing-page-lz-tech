import "./styles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Lazer-tech</h3>
          <p>Helping businesses shine online.</p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>
            Email: <a href="mailto:contact@lz-tech.org">contact@lz-tech.org</a>
          </p>
          <p>
            Phone: <a href="tel:+359877650591">+359 877 650 591</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Lazer-tech. All rights reserved.</p>
      </div>
    </footer>
  );
}
