import './App.css'
import List from "./pages/List.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Create from "./pages/Create.jsx";
import Single from "./pages/Single.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="banner" to="/"><img className="logo" src="/logo.svg" alt="Creature Creator"/></Link>
      </header>
      <nav className="navbar">
        <ul className="links">
          <li>
            <Link to={"/create"}>Create</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Navigate to="/creatures?page=1" replace/>}/>
        <Route path="/creatures" element={<List/>}/>
        <Route path="/creature/:id" element={<Single/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      <footer>
        <a className="website" href="https://octopusdragon.tech/"><img className="icon"
                                                                       src="https://octopusdragon.tech/favicon.ico"
                                                                       alt="OctopusDragonTech icon"/></a>
        <p className="copyright">&#169; 2024 OctopusDragonTech</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
