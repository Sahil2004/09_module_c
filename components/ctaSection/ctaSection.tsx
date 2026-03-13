import "./ctaSection.css";

export default function CtaSection() {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-content">
        <p className="cta-label">— Be the Change</p>
        <h2 className="cta-title">Agra Needs Your Green Thumb</h2>
        <p className="cta-desc">
          Volunteer for lake clean-ups, tree planting drives and waste awareness
          campaigns. Every action plants the seed of a greener future.
        </p>
      </div>
      <a href="#" className="btn-cta">
        Join the Movement →
      </a>
    </section>
  );
}
