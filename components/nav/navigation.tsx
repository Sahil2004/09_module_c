import Image from "next/image";
import "./nav.css";
import type { Dispatch, MouseEventHandler, SetStateAction } from "react";

export default function Navigation({ dialogOpenHandler }: { dialogOpenHandler: Dispatch<SetStateAction<boolean>>}) {
  const handleOpening: MouseEventHandler<HTMLAnchorElement> = (e: any) => {
    e.preventDefault()
    dialogOpenHandler(true)
  }
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
      <a href="#" className="btn-nav" onClick={handleOpening}>Join the Movement</a>
    </header>
  );
}
