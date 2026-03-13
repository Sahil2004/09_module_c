import Image from "next/image";
import "./nav.css";

export default function Navigation() {
  return (
    <header className="w-full">
      <a href="#" className="nav-logo">
        <div className="nav-logo-icon">🌿</div>
        <div className="nav-logo-text">
          Green Agra
          <span>Green City Mission 2030</span>
        </div>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#impact">Initiatives</a>
        </li>
        <li>
          <a href="#pillars">Lakes Restoration</a>
        </li>
        <li>
          <a href="#">Events</a>
        </li>
      </ul>
      <a href="#cta" className="btn-nav">Join the Movement</a>
    </header>
  );
}
