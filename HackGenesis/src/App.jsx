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
import Marquee2 from "./components/Marquee2";
import { Analytics } from "@vercel/analytics/react";
import Sponsers from "./components/Sponsers";
import TeamCategories from "./components/TeamCategories";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Marquee />
      <Marquee2 />
      <Section />
      <Tracks />
      <Schedule />
      <Sponsers />
      {/* <Banner /> */}
      <FAQ />
      <TeamCategories />
      <Footer />
    </div>
  );
}

export default App;
