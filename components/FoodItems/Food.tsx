import Image from "next/image";

type FoodProps = {
  title: string;
  icon: string;
  description: string;
  price: string;
};

const Food = ({ title, icon, description, price }: FoodProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-4"> {/* Added flex and items-center classes */}
        <div className="rounded-full bg-green-100 overflow-hidden" style={{ width: '170px', height: '100px' }}>
          <Image
            src={icon}
            alt={title}
            width={40}
            height={40}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <h2 className="font-bold text-lg capitalize ml-3">{title}</h2> {/* Added ml-3 class for left margin */}
      </div>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
      <h1 className="text-green-500 font-bold text-lg mt-2">
        Price: <span className="font-mono font-bold text-orange-600">{price}</span>
      </h1>
    </li>
  );
};

export default Food;
