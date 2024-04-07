import { link } from "fs";

// NAVIGATION
export const NAV_LINKS = [
  { url: "/", key: "home", name: "Home" },
  { url: "#food", key: "Food", name: "Food" },
  { url: "#bhajiPau", key: "Taste", name: "Taste" },
  { url: "#menu", key: "Menu", name: "Menu" },
  { url: "#contact", key: "contact_us", name: "Contact Us" },
];

// CAMP SECTION
export const PEOPLE_URL = [
  "/person-1.png",
  "/person-2.png",
  "/person-3.png",
  "/person-4.png",
];
// FOOD SECTION
export const FOOD_ITEMS = [
  {
    title: "Italian Pizza [6 inches]",
    subtitle: "Navarang Fastood, Ahmedabad",
    peopleJoined: "5000+ Orders Served",
  },
];

// FEATURES SECTION
export const FoodMenu = [
  {
    title: "Manchurian Noodles",
    icon: "/manchurian-noodles.jpg",
    description:
      "Delicious noodles tossed with vegetables and Manchurian sauce, a perfect blend of spicy and tangy flavors.",
    price: "₹130",
  },
  {
    title: "Paneer Noodles",
    icon: "/paneer-noodles.jpg",
    description:
      "Tempting noodles cooked with succulent pieces of paneer (Indian cottage cheese) and aromatic spices.",
    price: "₹145",
  },
  {
    title: "Schezwan Noodles",
    icon: "/schezwan-noodles.jpg",
    description:
      "Spicy and flavorful noodles prepared with Schezwan sauce and assorted vegetables, a favorite among spice lovers.",
    price: "₹115",
  },
  {
    title: "Bombay Chinese Bhel",
    icon: "/chinice-bhel.jpg",
    description:
      "A unique fusion snack combining the flavors of Indian and Chinese cuisines, featuring crispy noodles, vegetables, and tangy sauces.",
    price: "₹170",
  },
];
// FOOTER SECTION

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Owner", value: "123-456-789" },
    { label: "Staff", value: "123-456-789" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "/facebook.svg", link: "https://www.facebook.com/" },
    {icon: "/instagram.svg", link: "https://www.instagram.com/" },
    {icon:"/twitter.svg", link: "https://www.twitter.com/"},
   {icon: "/youtube.svg", link: "https://www.youtube.com/"},
   
  ],
};
