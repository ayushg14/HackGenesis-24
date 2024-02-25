import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Banner from "./components/Banner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Marquee />
      <Section />
      <Tracks />
      <Schedule />
      {/* <Banner /> */}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
