import Image from "next/image";

const BhajiPau = () => {
  return (
    <section id="bhajiPau" className="flexCenter flex-col bg-gray-100 py-16 lg:py-24">
      <div className="padding-container max-container w-full mb-12">
        <div className="flex items-center mb-8">
          <Image src="/chef.png" alt="chef" width={50} height={50} />
          <h3 className="uppercase regular-18 ml-3 text-green-500">
            Taste Our Yummy Food
          </h3>
        </div>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Enjoy Delicious Meals
          </h2>
          <p className="regular-16 text-gray-600 xl:max-w-[520px]">
            Start a yummy hunger killer journey with navrang. No need to worry
            about getting Hungry - we've got your choice! Gather your friends
            and family, and come enjoy our tasty dishes at our
            delicious-smelling restaurant.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full rounded-lg overflow-hidden">
        <Image
          src="/BhajiPav.jpg"
          alt="boat"
          width={1440}
          height={480}
          className="w-full object-cover object-center rounded-lg shadow-xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex flex-col">
            <div className="flex flex-col">
              <div className="flex justify-between items-center">
                <p className="regular-16 text-gray-600">Destination</p>
                <p className="bold-16 text-green-500">Your Mouth</p>
              </div>
              <p className="bold-20 mt-2">Tasty Pau-Bhaji</p>
            </div>

            <div className="flex flex-col mt-4">
              <p className="regular-16 text-gray-600">Start track</p>
              <h4 className="bold-20 mt-2">From Our Clean Kitchen</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BhajiPau;
