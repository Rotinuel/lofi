import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Properties from "./pages/properties/Properties";
import Property from "./pages/property/Property";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/properties/:id" element={<Property />} />
      </Routes>
    </Router>
  )
}

export default App;
