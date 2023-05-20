import Contact from './pages/Contact'
import Home from './pages/Home';
import Proyects from './pages/Proyects';
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom";

import './App.css'


function App() {


  
    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<h1>No found</h1>} />
                <Route path="/home" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    )
}

export default App
