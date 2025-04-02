import React from "react";
import CategoryLayout from "../components/CategoryLayout";

const bedroomProducts = [
  {
    id: 1,
    name: "Queen Size Bed",
    description:
      "Elegant queen size bed with upholstered headboard and sturdy wooden frame.",
    price: 999.99,
    image: "/categories/bedroom/bed.jpg",
  },
  {
    id: 2,
    name: "Nightstand",
    description:
      "Modern nightstand with built-in USB ports and wireless charging pad.",
    price: 199.99,
    image: "/categories/bedroom/nightstand.jpg",
  },
  {
    id: 3,
    name: "Dresser",
    description: "Spacious dresser with soft-close drawers and mirror set.",
    price: 699.99,
    image: "/categories/bedroom/dresser.jpg",
  },
  {
    id: 4,
    name: "Wardrobe",
    description: "Full-size wardrobe with sliding doors and built-in lighting.",
    price: 1299.99,
    image: "/categories/bedroom/wardrobe.jpg",
  },
  {
    id: 5,
    name: "Vanity Set",
    description: "Elegant vanity set with stool and LED mirror.",
    price: 499.99,
    image: "/categories/bedroom/vanity.jpg",
  },
  {
    id: 6,
    name: "Bedside Lamp",
    description:
      "Modern LED bedside lamp with adjustable brightness and color temperature.",
    price: 79.99,
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
