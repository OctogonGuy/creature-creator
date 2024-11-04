import './App.css'
import List from "./pages/List.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Create from "./pages/Create.jsx";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link className="banner" to="/"><img className="logo" src="/logo.svg" alt="Creature Creator"/></Link>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/0" replace/>}/>
        <Route path="/:page" element={<List/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
      <footer>
        <a className="website" href="https://octopusdragon.tech/"><img className="icon" src="https://octopusdragon.tech/favicon.ico" alt="OctopusDragonTech icon"/></a>
        <p className="copyright">&#169; 2024 OctopusDragonTech</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
