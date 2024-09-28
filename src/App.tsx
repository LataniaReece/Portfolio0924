import { ToastContainer } from "react-toastify";

import ContactSection from "./components/ContactSection/ContactSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Navbar />
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </div>
      <ToastContainer
        hideProgressBar={true}
        position="bottom-left"
        autoClose={3000}
      />
    </>
  );
}

export default App;
