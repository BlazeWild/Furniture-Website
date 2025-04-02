import React from "react";
import CategoryLayout from "../components/CategoryLayout";

const bedroomProducts = [
  {
    id: "king-size-bed",
    name: "King Size Bed",
    description:
      "Elegant king size bed with upholstered headboard and sturdy wooden frame.",
    price: 52000,
    image: "/categories/bedroom/bed.jpg",
  },
  {
    id: "nightstand",
    name: "Nightstand",
    description:
      "Modern nightstand with built-in USB ports and wireless charging pad.",
    price: 12500,
    image: "/categories/bedroom/nightstand.jpg",
  },
  {
    id: "dresser",
    name: "Dresser",
    description: "Spacious dresser with soft-close drawers and mirror set.",
    price: 42000,
    image: "/categories/bedroom/dresser.jpg",
  },
  {
    id: "wardrobe",
    name: "Wardrobe",
    description: "Full-size wardrobe with sliding doors and built-in lighting.",
    price: 65000,
    image: "/categories/bedroom/wardrobe.jpg",
  },
  {
    id: "vanity-set",
    name: "Vanity Set",
    description: "Elegant vanity set with stool and LED mirror.",
    price: 28500,
    image: "/categories/bedroom/vanity.jpg",
  },
  {
    id: "bedside-lamp",
    name: "Bedside Lamp",
    description:
      "Modern LED bedside lamp with adjustable brightness and color temperature.",
    price: 4500,
    image: "/categories/bedroom/lamp.jpg",
  },
];

const Bedroom = () => {
  return (
    <CategoryLayout
      title="Bedroom Collection"
      description="Create your perfect sanctuary with our selection of premium bedroom furniture designed for comfort and style."
      products={bedroomProducts}
    />
  );
};

export default Bedroom;
