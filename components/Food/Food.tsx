import { FOOD_ITEMS } from "@/constants";
import Image from "next/image";
import FoodSite from "./FoodSite";

const Food = () => {
  return (
    <section id="food" className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        {FOOD_ITEMS.map((item, index) => (
          <FoodSite key={index} {...item} />
        ))}
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Hungry?</strong> Let's Satisfy Your Cravings!
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from delicious pizzas to mouthwatering burgers, we've got you covered. Join us and indulge in a culinary experience like no other.
          </p>
          <div className="relative group">
            <Image 
              src="/quote.svg"
              alt="quote"
              width={186}
              height={219}
              className="food-quote transition-transform duration-300 transform group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Food;