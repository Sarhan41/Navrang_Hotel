import Food from "@/components/Food/Food";
import Hero from "@/components/Hero/Hero";
import BhajiPau from "@/components/BhajiPau/BhaiPau";
import FoodItems from "@/components/FoodItems/FoodItems";
import Contact from "@/components/Contact/Contact";


export default function Home() {
  return (
    <>
     <Hero />
     <Food /> 
    <BhajiPau /> 
    <FoodItems />
    <Contact /> 
  </>
  );
}
