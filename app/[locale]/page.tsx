"use client";

import Hero from "../components/Hero";
import LatestPosts from "../components/LatestPosts";
import Categories from "../components/Categories";
import Progres from "../components/Progres";
import Reveal from "./_components/Reveal";
import CardChannel from "../components/CardChannel";

export default function Page() {
  return (
    <div>
      <Reveal dir="up">
        <Hero />
      </Reveal>

      <Reveal dir="left" delay={0.05}>
        <LatestPosts />
      </Reveal>

      <Reveal dir="right" delay={0.07}>
        <Categories />
      </Reveal>
       
      <Reveal dir="up" delay={0.1}>
        <CardChannel />
      </Reveal>

      <Reveal dir="up" delay={0.1}>
        <Progres />
      </Reveal>
    </div>
  );
}