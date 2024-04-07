// Import Food component as a React component
import { FoodMenu } from "@/constants";
import Food from "./Food";
import Image from "next/image";

const FoodItems = () => {
  return (
    <section id="menu" className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/Chinise.jpg"
            alt="phone"
            width={440}
            height={1000}
            className="feature-Chinise absolute top-[13%] z-10 hidden max-w-[1500px] rotate-[15deg] md:-left-16 lg:flex 3xl:left-20 filter brightness-90 border-20 transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/chef.png"
              alt="chef"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Tasty Dishes</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FoodMenu.map((food) => (
              // Pass props to Food component
              <Food
                key={food.title}
                title={food.title}
                icon={food.icon}
                description={food.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodItems;
