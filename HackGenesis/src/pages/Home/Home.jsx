import React from "react";
import Hero from "../../components/Hero";
import Marquee from "../../components/Marquee";
import Marquee2 from "../../components/Marquee2";
import Section from "../../components/Section";
import Tracks from "../../components/Tracks";
import Schedule from "../../components/Schedule";
import Card from "../../components/Card";
import Sponsers from "../../components/Sponsers";
import FAQ from "../../components/FAQ";

const Home = () => {
  return (
    <div>
      <Hero />
      <Marquee />
      <Marquee2 />
      <Section />
      <Tracks />
      <Schedule />
      <Card />
      <Sponsers />
      <FAQ />
    </div>
  );
};

export default Home;
