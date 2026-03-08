import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Problem } from "@/sections/Problem";
import { Story } from "@/sections/Story";
import { Proof } from "@/sections/Proof";
import { Services } from "@/sections/Services";
import { Audience } from "@/sections/Audience";
import { Team } from "@/sections/Team";
import { Contact } from "@/sections/Contact";

export function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Problem />
      <Story />
      <Proof />
      <Services />
      <Audience />
      <Team />
      <Contact />
      <Footer />
    </>
  );
}
