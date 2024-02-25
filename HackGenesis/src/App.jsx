import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Section2 from "./components/Section2";
import Marquee from "./components/Marquee";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Marquee />
      {/* <Section2 /> */}
      <Tracks />
      <Schedule />
      {/* <Banner /> */}
      <FAQ />
    </div>
  );
}

export default App;
