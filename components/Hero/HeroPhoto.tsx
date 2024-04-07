"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroPhoto = () => {
  const [currentPizza, setCurrentPizza] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the current pizza image number
      setCurrentPizza((prevPizza) => (prevPizza % 4) + 1);
    }, 3000); // Change pizza every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);
  
  return (
    <div className="relative w-full max-w-[600px] h-[75vh] md:h-[600px] mx-auto">
      <div className="rounded-full overflow-hidden h-full w-full shadow-lg transform hover:scale-105 transition-transform duration-300">
        <Image
          src={`/Pizza${currentPizza}.jpg`}
          layout="fill"
          objectFit="cover"
          alt="pizza"
        />
      </div>
    </div>
  );
};

export default HeroPhoto;
