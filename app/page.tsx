import Food from "@/components/Food/Food";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero/Hero";


export default function Home() {
  return (
    <>
     <Hero />
     <Food /> 
    <Guide /> 
    <Features />
    <GetApp /> 
  </>
  );
}
