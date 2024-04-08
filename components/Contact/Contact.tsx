"use client";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import Link from "next/link";
import {  FaWhatsapp } from "react-icons/fa";
import { PiPizza } from "react-icons/pi";

const Contact = () => {
  const [currentPizza, setCurrentPizza] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current pizza image number
      setCurrentPizza((prevPizza) => (prevPizza % 4) + 1);
    }, 3000); // Change pizza every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <section
      id="contact"
      className="relative py-16 bg-gray-900 bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(/Pizza${currentPizza}.jpg)` }} // Fixed image URL
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12 h-full rounded-lg overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center lg:items-start text-center lg:text-left text-white px-6">
          <h2 className="text-4xl lg:text-5xl font-bold z-30 text-white shadow-xl mb-4">
            Eat Your First Meal <br /> Today!
          </h2>
          <p className="text-lg lg:text-xl shadow-xl z-30 mb-6 font-mono  ">
            You'll feel fulfilled for the <br /> first time in your life.
          </p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0">
          <Link target="_blank" href={"https://www.zomato.com/ahmedabad/navrang-sandwich-pizza-sabarmati/order"}>
            <Button 
              type="button" 
              icon={<PiPizza className="h-10 w-14" />}
              title="Hungry? Order Now" 
              variant="btn_green" 
            />
          </Link>
          <Link target="_blank" href={`https://wa.me/917041044294`} passHref>
            <Button
              type="button"
              icon={<FaWhatsapp className="h-10 w-14" />}
              title="WhatsApp"
              variant="btn_green"
            />
          </Link>
          </div>
        </div>

        <div className="flex-1 bg-white items-center bg-opacity-75 mr-8 p-6 rounded-lg">
          <div className="aspect-w-16 aspect-h-9 items-center h-full ">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d229.39573794812551!2d72.59145472473367!3d23.08494642461101!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e83eb2a6135dd%3A0xeed7b3d161245588!2sShree%20Navrang%20Bhajipav%20Pulav%20%26%20Chinese!5e0!3m2!1sen!2sin!4v1712577779786!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
