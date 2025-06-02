import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/acceuil/HeroSection";
import Presentation from "@/app/acceuil/Presentation";
import Projects from "@/app/acceuil/Projects";
import Contacts from "@/app/acceuil/Contacts";

import SubSkills from "@/app/components/SubSkills";
import Project from "@/app/components/Project";

export default function Home() {
  return (
      <div>
          <Navbar />
          <HeroSection />
          <Presentation />
          <Projects />
          <Contacts />
      </div>
  );
}
