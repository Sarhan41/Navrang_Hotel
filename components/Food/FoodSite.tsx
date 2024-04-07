import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface FoodSiteProps {
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const FoodSite = ({ title, subtitle, peopleJoined }: FoodSiteProps) => {
  return (
    <div
      className="h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl"
      style={{ backgroundImage: `url(/ItalianPizza.jpg)` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image
              src="/fork-knife.svg"
              alt="restaurant"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          {PEOPLE_URL.map((url, index) => (
            <div key={index} className="rounded-full border-4 border-white overflow-hidden">
              <Image
                src={url}
                alt="person"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          ))}
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodSite;