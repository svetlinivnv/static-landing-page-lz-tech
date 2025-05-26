import { useState } from "react";
import "./styles.css";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section
      className="contact-section"
      id="contact"
    >
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>We’d love to hear from you — reach out anytime.</p>

        {submitted ? (
          <p className="success-message">Thank you! We'll be in touch soon.</p>
        ) : (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
            />

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
