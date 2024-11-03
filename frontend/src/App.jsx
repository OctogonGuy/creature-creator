import './App.css'
import List from "./pages/List.jsx";
import {BrowserRouter, Link, Navigate, Route, Routes} from "react-router-dom";
import Create from "./pages/Create.jsx";

function App() {
  return (
    <BrowserRouter>
      <Link to="/"><h1>Creature Creator</h1></Link>
      <Routes>
        <Route path="/" element={<Navigate to="/0" replace/>}/>
        <Route path="/:page" element={<List/>}/>
        <Route path="/create" element={<Create/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
