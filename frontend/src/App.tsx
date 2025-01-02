import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./renderer/views/index/Index";
import About from "./renderer/views/aboutus/About";
import Contact from "./renderer/views/contactus/Contact";
import CoverLetter from "./renderer/views/typer/LearningTyper";
import LearningTyper from "./renderer/views/typer/LearningTyper";
import ProjectDetail from "./renderer/views/projects/ProjectsDetail";
import Projects from "./renderer/views/projects/Project";
import Header from "./renderer/components/Header";

function App() {



  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/home/coverletter/*" element={<CoverLetter />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/learningTyper" element={<LearningTyper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
