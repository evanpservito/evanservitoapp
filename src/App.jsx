import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
