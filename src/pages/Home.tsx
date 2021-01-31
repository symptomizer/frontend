import { FC } from "react";
import { Hero } from "../components/Home/Hero";
import { Features } from "../components/Home/Features";
import { Team } from "../components/Home/Team";
import { Stats } from "../components/Home/Stats";
import { Footer } from "../components/Footer";

export const Home: FC = () => (
  <div>
    <Hero />
    <Stats />
    <Features />
    <Team />
    <Footer />
  </div>
);
