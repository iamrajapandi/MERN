import Home from "./pages/Home";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Weblayout from "./layout/Weblayout";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Weblayout />}>
            <Route path="/" element={<Home />} />  
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
