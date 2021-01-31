import { FC } from "react";
import { Hero } from "../components/Home/Hero";
import { Features } from "../components/Home/Features";
import { Team } from "../components/Home/Team";
import { Stats } from "../components/Home/Stats";
import { Footer } from "../components/Footer";
import { FooterCTA } from "../components/Home/FooterCTA";

export const Home: FC = () => (
  <div>
    <Hero />
    <Stats />
    <Features />
    <Team />
    <FooterCTA />
    <Footer border={false} />
  </div>
);
