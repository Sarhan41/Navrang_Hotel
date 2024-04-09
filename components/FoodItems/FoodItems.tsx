"use client";
import { useState } from 'react';
import { FoodMenu } from '@/constants';
import Food from './Food';
import Image from 'next/image';

const FoodItems = () => {
  const [selectedCategory, setSelectedCategory] = useState('Chinese');

  const handleCategoryChange = (category :string) => {
    setSelectedCategory(category);
  };

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
              src="/Chef.png"
              alt=""
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 mt-4 lg:bold-64">Our Tasty Dishes</h2>
          </div>

          <div className="mt-10 ">
            <div className="flex flex-wrap gap-2 ">
              {FoodMenu.map((category) => (
                <button
                  key={category.category}
                  className={`mr-4 px-4 py-2 rounded-lg font-mono mb-4 ${selectedCategory === category.category ? 'bg-slate-300' : 'bg-gray-100 hover:bg-gray-200 '}`}
                  onClick={() => handleCategoryChange(category.category)}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          <ul className="grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20">
            {FoodMenu.find((category) => category.category === selectedCategory)?.items.map((food) => (
              <Food
                key={food.title}
                title={food.title}
                icon={food.icon}
                description={food.description}
                price={food.price}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodItems;
