import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>

        {/* Main Pages */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        
        {/* Projects */}
        <Route path="projects">
          <Route index element={<Projects />} />
          <Route path=":id" element={<ProjectDetails />} />
        </Route>

        {/* Contact */}
        <Route path="contact" element={<Contact />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
}

export default App;