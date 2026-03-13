import CtaSection from "@/components/ctaSection/ctaSection";
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero/hero";
import Impact from "@/components/impact/impact";
import Navigation from "@/components/nav/navigation";
import Pillars from "@/components/pillars/pillars";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <svg
          className="wave-divider"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"
            fill="#1a3a2a"
          ></path>
        </svg>
        <Impact />
        <svg
          className="wave-divider bg-[#1a3a2a]"
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C360,0 1080,0 1440,60 L1440,0 L0,0 Z"
            fill="#f5f0e8"
          ></path>
        </svg>
        <Pillars />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
