import NavbarMain from "./components/Navbar/NavbarMain";
import HeroMain from "./components/HeroSection.jsx/HeroMain";
import SubHeroSection from "./components/HeroSection.jsx/SubHeroSection";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";
import SkillsMain from "./components/SkillsSection/SkillsMain";
import SubSkills from "./components/SkillsSection/SubSkills";
import ProjectMain from "./components/ProjectSection/ProjectMain";
import HelperSection from "./components/HelperSection";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ProjectMain />
      <HelperSection />
    </main>
  );
}

export default App;
