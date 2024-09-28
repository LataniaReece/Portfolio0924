import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

function App() {
  return (
    <div className="main">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}

export default App;
