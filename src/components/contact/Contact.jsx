import "./styles.css";

export default function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you — reach out anytime.</p>
        <div className="contact-info">
          <div>
            <h4>Email</h4>
            <a href="mailto:contact@lz-tech.org">contact@lz-tech.org</a>
          </div>
          <div>
            <h4>Phone</h4>
            <a href="tel:+359877650591">+359 877 650 591</a>
          </div>
        </div>
      </div>
    </section>
  );
}
