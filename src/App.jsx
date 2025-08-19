import "./App.css";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import OurProducts from "./components/OurProducts";
import Topbar from "./shared-components/Topbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>      
      <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/products" element={<OurProducts />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
