import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Portfolio from './Pages/Portfolio';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />}/>
         <Route path={"/about"} element={<About />}/>
        <Route path={"/contact"} element={<Contact />}/>
        <Route path={"/portfolio"} element={<Portfolio />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
