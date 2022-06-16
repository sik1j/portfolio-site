import React, { useEffect, useState } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";

function App() {
  const [scrollPos, setScrollPos] = useState(0);
  const handleScroll = () => {
    const pos = window.scrollY;
    console.log(pos);
    setScrollPos(pos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App sen">
      <Hero />
      <About scrollPos={scrollPos} />
      <Work scrollPos={scrollPos} />
      <div className="below">
        <Skills scrollPos={scrollPos} />
        <Contact />
      </div>
    </div>
  );
}

export default App;
