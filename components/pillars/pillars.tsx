import Image from "next/image";
import "./pillars.css";

export default function Pillars() {
  return (
    <section className="pillars-section" id="pillars">
      <div className="pillars-header">
        <div>
          <p className="section-label text-left">— What We Do</p>
          <h2 className="pillars-title">
            Three Pillars of
            <br />a Greener City
          </h2>
        </div>
        <p className="pillars-desc">
          From reviving the Yamuna's banks to planting a million trees, Agra's
          transformation is driven by science, community, and an unstoppable
          commitment to a sustainable future.
        </p>
      </div>

      <div className="pillars-grid">
        <div className="pillar-card featured">
          <span className="pillar-badge">Most Active</span>
          <div className="pillar-img">
            <img
              src="/Lake-Restoration.jpeg"
              alt="Lake Restoration"
            />
          </div>
          <div className="pillar-body">
            <div className="pillar-category">💧 Water Bodies</div>
            <h3 className="pillar-title">Lake Restoration</h3>
            <p className="pillar-desc">
              Reviving Agra's iconic water bodies through desilting, ghats
              restoration and wetland regeneration — restoring ecological
              balance and beloved public spaces along the Yamuna.
            </p>
            <ul className="pillar-list">
              <li>8 water bodies fully desilted &amp; restored</li>
              <li>Keetham Lake water quality up 35%</li>
              <li>Yamuna ghat beautification underway</li>
              <li>Bird sanctuary at Sur Sarovar expanded</li>
            </ul>
            <a href="#" className="btn-pillar">
              Get Involved →
            </a>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-img">
            <img
              src="/Urban-Forestry.jpeg"
              alt="Urban Forestry"
            />
          </div>
          <div className="pillar-body">
            <div className="pillar-category">🌲 Forestry</div>
            <h3 className="pillar-title">Urban Forestry</h3>
            <p className="pillar-desc">
              Building a city-wide green canopy through strategic tree planting,
              avenue greening and Miyawaki forests to fight the urban heat
              island effect across Agra's heritage zones.
            </p>
            <ul className="pillar-list">
              <li>50,000+ trees planted city-wide</li>
              <li>Taj Mahal buffer zone fully greened</li>
              <li>Miyawaki forests at 10 locations</li>
              <li>Native species priority policy</li>
            </ul>
            <a href="#" className="btn-pillar">
              Get Involved →
            </a>
          </div>
        </div>

        <div className="pillar-card">
          <div className="pillar-img">
            <img
              src="/Waste-Management.jpeg"
              alt="Waste Management"
            />
          </div>
          <div className="pillar-body">
            <div className="pillar-category">♻️ Sustainability</div>
            <h3 className="pillar-title">Waste Management</h3>
            <p className="pillar-desc">
              Transforming Agra's waste into a resource through source
              segregation, composting and cutting-edge processing across all AMC
              wards — keeping heritage sites spotless.
            </p>
            <ul className="pillar-list">
              <li>30% waste now composted / recycled</li>
              <li>Dry waste centres in every ward</li>
              <li>Bio-methanation at 4 major markets</li>
              <li>Zero-waste ward programme launched</li>
            </ul>
            <a href="#" className="btn-pillar">
              Get Involved →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
