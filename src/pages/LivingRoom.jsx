import React from "react";
import CategoryLayout from "../components/CategoryLayout";

const livingRoomProducts = [
  {
    id: "modern-sofa",
    name: "Modern Sofa",
    description:
      "Elegant and comfortable 3-seater sofa with premium upholstery and sturdy wooden frame.",
    price: 75000,
    image: "/categories/living-room/sofa.jpg",
  },
  {
    id: "coffee-table",
    name: "Coffee Table",
    description:
      "Contemporary coffee table with glass top and metal frame, perfect for modern living spaces.",
    price: 18750,
    image: "/categories/living-room/coffee-table.jpg",
  },
  {
    id: "tv-unit",
    name: "TV Unit",
    description:
      "Stylish TV unit with built-in storage and cable management system.",
    price: 45000,
    image: "/categories/living-room/tv-unit.jpg",
  },
  {
    id: "accent-chair",
    name: "Accent Armchair",
    description:
      "Comfortable accent chair with premium fabric and ergonomic design.",
    price: 22500,
    image: "/categories/living-room/accent-chair.jpg",
  },
  {
    id: "bookshelf",
    name: "Bookshelf",
    description:
      "Modern bookshelf with adjustable shelves and built-in lighting.",
    price: 35000,
    image: "/categories/living-room/bookshelf.jpg",
  },
  {
    id: "area-rug",
    name: "Area Rug",
    description:
      "Luxurious area rug with modern geometric pattern and soft texture.",
    price: 12000,
    image: "/categories/living-room/area-rug.jpg",
  },
];

const LivingRoom = () => {
  return (
    <CategoryLayout
      title="Living Room Collection"
      description="Discover our curated selection of premium living room furniture that combines style, comfort, and functionality."
      products={livingRoomProducts}
    />
  );
};

export default LivingRoom;
