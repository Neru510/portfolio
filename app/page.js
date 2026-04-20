import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/accueil/HeroSection";
import Presentation from "@/app/accueil/Presentation";
import Projects from "@/app/accueil/Projects";
import Contacts from "@/app/accueil/Contacts";

export default function Home() {
  return (
      <div id="main-content">
          <Navbar />
          <HeroSection />
          <Presentation />
          <Projects />
          <Contacts />
      </div>
  );
}
