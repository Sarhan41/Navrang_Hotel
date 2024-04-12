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

export const FoodMenu = [
  {
    category: "Chinese",
    items: [
      {
        title: "Manchurian Noodles",
        icon: "/manchurian-noodles.jpg",
        description:
          "Delicious noodles tossed with vegetables and Manchurian sauce, a perfect blend of spicy and tangy flavors.",
        price: "₹120",
      },
      {
        title: "Paneer Noodles",
        icon: "/paneer-noodles.jpg",
        description:
          "Tempting noodles cooked with succulent pieces of paneer (Indian cottage cheese) and aromatic spices.",
        price: "₹150",
      },
      {
        title: "Schezwan Noodles",
        icon: "/schezwan-noodles.jpg",
        description:
          "Spicy and flavorful noodles prepared with Schezwan sauce and assorted vegetables, a favorite among spice lovers.",
        price: "₹130",
      },
      {
        title: "Bombay Chinese Bhel",
        icon: "/bombay-chinese-bhel.jpg",
        description:
          "A unique fusion snack combining the flavors of Indian and Chinese cuisines, featuring crispy noodles, vegetables, and tangy sauces.",
        price: "₹160",
      },
    ],
  },
  {
    category: "Sandwiches",
    items: [
      {
        title: "Veg. Sandwich",
        icon: "/veg-sandwich.jpg",
        description:
          "A classic vegetarian sandwich filled with fresh vegetables and seasoned with herbs and spices.",
        price: "₹50",
      },
      {
        title: "Aloo Mutter Sandwich",
        icon: "/aloo-mutter-sandwich.jpg",
        description:
          "A delicious sandwich stuffed with a flavorful mixture of potatoes and peas, seasoned with aromatic spices.",
        price: "₹60",
      },
      {
        title: "Cheese Jam Sandwich",
        icon: "/cheese-jam-sandwich.jpg",
        description:
          "A delightful combination of creamy cheese and sweet jam, sandwiched between slices of soft bread.",
        price: "₹100",
      },
      {
        title: "Butter Jam Sandwich",
        icon: "/butter-jam-sandwich.jpg",
        description:
          "A simple yet satisfying sandwich with creamy butter and sweet jam spread generously over soft bread slices.",
        price: "₹50",
      },
    ],
  },
  {
    category: "Pizzas",
    items: [
      {
        title: "Italian Pizza",
        icon: "/italian-pizza.jpg",
        description:
          "Authentic Italian pizza topped with a savory tomato sauce, melted cheese, and a selection of classic toppings.",
        price: "₹130",
      },
      {
        title: "Paneer Pizza",
        icon: "/paneer-pizza.jpg",
        description:
          "A fusion twist on the classic pizza, featuring paneer (Indian cottage cheese) as a flavorful topping along with traditional pizza ingredients.",
        price: "₹130",
      },
      {
        title: "SP. Jain Pizza",
        icon: "/sp-jain-pizza.jpg",
        description:
          "A specialty pizza named after a unique recipe, topped with a delicious combination of ingredients inspired by Jain cuisine.",
        price: "₹130",
      },
      {
        title: "Double Cheese Pizza",
        icon: "/double-cheese-pizza.jpg",
        description:
          "Indulge in the richness of this pizza with double the amount of cheese, providing a gooey and satisfying experience with every bite.",
        price: "₹150",
      },
    ],
  },
  {
    category: "Paneer",
    items: [
      {
        title: "SP. Navrang Paneer",
        icon: "/sp-navrang-paneer.jpg",
        description:
          "A special dish featuring paneer cooked in a vibrant medley of colorful spices and flavors.",
        price: "₹150",
      },
      {
        title: "Handi Paneer",
        icon: "/handi-paneer.jpg",
        description:
          "Paneer (Indian cottage cheese) cooked in a traditional handi (clay pot) with a rich and creamy gravy, bursting with aromatic spices.",
        price: "₹190",
      },
      {
        title: "Kadai Paneer",
        icon: "/kadai-paneer.jpg",
        description:
          "A classic North Indian dish featuring paneer (Indian cottage cheese) cooked with bell peppers, onions, tomatoes, and aromatic spices in a kadai (wok).",
        price: "₹190",
      },
      {
        title: "Paneer Tikka fry",
        icon: "/paneer-tikka-fry.jpg",
        description:
          "Tender paneer (Indian cottage cheese) marinated in spices and yogurt, skewered, and grilled to perfection, offering a smoky and flavorful experience.",
        price: "₹165",
      },
    ],
  },
];

// FOOTER SECTION

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Owner", value: "7041044294" },
    { label: "Staff", value: "7405099030" },
  ],
};

export const SOCIALS = {
  title: "Social",
  links: [
    { icon: "/facebook.svg", link: "" },
    { icon: "/instagram.svg", link: "" },
    { icon: "/twitter.svg", link: "" },
    { icon: "/youtube.svg", link: "" },
  ],
};
