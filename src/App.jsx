import NavbarMain from "./components/Navbar/NavbarMain";
import HeroMain from "./components/HeroSection.jsx/HeroMain";
import SubHeroSection from "./components/HeroSection.jsx/SubHeroSection";
import AboutMeMain from "./components/AboutMeSection/AboutMeMain";

function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain />
      <SubHeroSection />
      <AboutMeMain />
    </main>
  );
}

export default App;
