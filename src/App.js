import React from "react";
import Navbar from "./components/Navbar"; // Corrected import statement
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import ContactMe from "./components/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default App;
