import Image from "next/image";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-badge">
            Green City Mission 2030 &nbsp;·&nbsp; AMC Initiative
          </div>
          <h1 className="hero-title">
            Building a<br />
            <span className="accent">Greener</span>
            <br />
            Agra
          </h1>
          <p className="hero-desc">
            The Agra Municipal Corporation, in partnership with the Government
            of Uttar Pradesh, is restoring rivers, planting forests, and
            building a city that breathes — one green zone at a time.
          </p>
          <div className="hero-buttons">
            <a href="#pillars" className="btn-primary">
              Explore Initiatives →
            </a>
            <a href="#pillars" className="btn-outline">
              View Lakes ◎
            </a>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">
              50K<span className="plus">+</span>
            </div>
            <div className="stat-label">Trees Planted</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              12<span className="plus">+</span>
            </div>
            <div className="stat-label">Lakes Restored</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              30<span className="pct">%</span>
            </div>
            <div className="stat-label">Waste Recycled</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">
              200<span className="plus">+</span>
            </div>
            <div className="stat-label">Green Zones</div>
          </div>
        </div>
      </div>
    </section>
  );
}
