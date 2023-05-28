import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import Projects from './pages/Proyects';
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
      <Analytics />
    </>

  );
}

export default App;
