import Story from "./pages/Story.js"
import Resume from "./pages/Resume.js";
import Projects from "./pages/Projects.js";
import Home from "./pages/Home.js";
import College from "./pages/College.js";
import Work from "./pages/Work.js";
import Hobbies from "./pages/Hobbies.js";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function Navbar () {
    return (<>
    <BrowserRouter>
        <nav className="navBar">
        <a href="/" className="site-title">Christian Urbach</a>
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="story">My Story</Link>
                </li>
                <li>
                    <Link to="resume">Resume'</Link>
                </li>
                <li>
                    <Link to="projects">Projects</Link>
                </li>
            </ul>
        </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/story/" element={<Story />}>
            <Route path="college" element={<College />} />
            <Route path="work" element={<Work />} />
            <Route path="hobbies" element={<Hobbies />} />
        </Route>        
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      </BrowserRouter>
    </>)  
}