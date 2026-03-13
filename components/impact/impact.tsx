import Image from "next/image";
import "./impact.css";

export default function Impact() {
  return (
    <section className="impact-section" id="impact">
  <p className="section-label">— Our Impact</p>
  <h2 className="section-title">Numbers That Tell the Story</h2>
  <div className="impact-grid">
    <div className="impact-card">
      <span className="impact-icon">🌳</span>
      <div className="impact-number">50K<span className="suf">+</span></div>
      <div className="impact-name">Trees Planted</div>
      <div className="impact-sub">Across all AMC zones</div>
    </div>
    <div className="impact-card">
      <span className="impact-icon">💧</span>
      <div className="impact-number">12<span className="suf">+</span></div>
      <div className="impact-name">Lakes Restored</div>
      <div className="impact-sub">Including Keetham Lake &amp; Brahma Sarovar</div>
    </div>
    <div className="impact-card">
      <span className="impact-icon">♻️</span>
      <div className="impact-number">30<span className="suf-gold">%</span></div>
      <div className="impact-name">Waste Recycled</div>
      <div className="impact-sub">Leading smart city index in 2023</div>
    </div>
    <div className="impact-card">
      <span className="impact-icon">🌿</span>
      <div className="impact-number">200<span className="suf">+</span></div>
      <div className="impact-name">Green Zones</div>
      <div className="impact-sub">Parks, pocket forests, &amp; habitats</div>
    </div>
  </div>
</section>
  )
}