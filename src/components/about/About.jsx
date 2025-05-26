import "./styles.css";
import teamworkImage from "../../assets/images/teamwork.jpg";

export default function About() {
  return (
    <section
      className="about-section"
      id="about"
    >
      <div className="about-container">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>
            We're <strong>Lazer-tech</strong>, a fresh startup based in{" "}
            <strong>Veliko Tarnovo, Bulgaria</strong>. We're four friends united
            by a passion for modern tech and clean design.
          </p>
          <p>
            Our mission is to help businesses shine online — whether it's
            through a beautifully crafted website, a lightning-fast app, or a
            complete digital presence.
          </p>
          <p>
            We specialize in <strong>Laravel</strong>, <strong>React</strong>,
            and <strong>React Native</strong>.
          </p>
        </div>
        <div className="about-image">
          <img
            src={teamworkImage}
            alt="Team working together"
          />
        </div>
      </div>
    </section>
  );
}
