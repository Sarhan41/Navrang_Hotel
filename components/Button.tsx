import Image from "next/image";

type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string | JSX.Element;
  variant: string;
  full?: boolean;
}

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-3 rounded-full border ${variant} ${full ? 'w-full' : ''}`}
      type={type}
    >
      {typeof icon === 'string' ? <Image src={icon} alt={title} width={24} height={24} /> : icon}
      <label className="font-bold text-sm whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;
