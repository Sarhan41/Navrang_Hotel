import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from '../Button';
import Link from 'next/link';
import HeroPhoto from './HeroPhoto';

const Hero = () => {


  return (
    <section className="max-container padding-container flex flex-col gap-20 py-28 pb-32 md:gap-48 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative  flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/chef.png"
          alt="chef"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 font-serif">Navarang Sandwich & Pizza</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Dive into the world of Navarang Sandwich & Pizza, where cravings meet satisfaction. Experience the fulfillment of your hunger with every bite. From savory sandwiches to mouthwatering pizzas.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            Rocking since 
            <span className="regular-16 lg:regular-20 ml-1"> 2004</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Link target="_blank" href={"https://www.zomato.com/ahmedabad/navrang-sandwich-pizza-sabarmati/order"}>
            <Button 
              type="button" 
              title="Hungry? Order Now" 
              variant="btn_green" 
            />
          </Link>
        </div>
      </div>

    <HeroPhoto />
    </section>
  );
};

export default Hero;
