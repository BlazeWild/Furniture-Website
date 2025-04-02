import React from "react";
import CategoryLayout from "../components/CategoryLayout";

const livingRoomProducts = [
  {
    id: 1,
    name: "Modern Sofa",
    description:
      "Elegant and comfortable 3-seater sofa with premium upholstery and sturdy wooden frame.",
    price: 1299.99,
    image: "/categories/living-room/sofa.jpg",
  },
  {
    id: 2,
    name: "Coffee Table",
    description:
      "Contemporary coffee table with glass top and metal frame, perfect for modern living spaces.",
    price: 299.99,
    image: "/categories/living-room/coffee-table.jpg",
  },
  {
    id: 3,
    name: "TV Unit",
    description:
      "Stylish TV unit with built-in storage and cable management system.",
    price: 399.99,
    image: "/categories/living-room/tv-unit.jpg",
  },
  {
    id: 4,
    name: "Accent Chair",
    description:
      "Comfortable accent chair with premium fabric and ergonomic design.",
    price: 499.99,
    image: "/categories/living-room/accent-chair.jpg",
  },
  {
    id: 5,
    name: "Bookshelf",
    description:
      "Modern bookshelf with adjustable shelves and built-in lighting.",
    price: 599.99,
    image: "/categories/living-room/bookshelf.jpg",
  },
  {
    id: 6,
    name: "Area Rug",
    description:
      "Luxurious area rug with modern geometric pattern and soft texture.",
    price: 199.99,
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
