import Image from 'next/image';
import Button from './Button';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-28 pb-32 md:gap-48 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative  flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88 font-serif">Navarang Fasftood</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Discover the delicious world of Navarang Fastood. Savor mouthwatering flavors that will tantalize your taste buds. Join us on a culinary journey you'll never forget.
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
          <Link target="_blank"  href={"https://www.zomato.com/ahmedabad/navrang-sandwich-pizza-sabarmati/order"}>
          
          <Button 
            type="button" 
            title="Hungry? Order Now" 
            variant="btn_green" 
          />
          </Link>
       
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
