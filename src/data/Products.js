export const products = [
  {
    id: 1,
    title: "Iphone",
    img: "https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710183290/iphone.png",
    desc: "Marca Apple",
    price: 1000,
    category: "Celulares",
  },
  {
    id: 2,
    title: "Auriculares Samsung",
    img: "https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710183290/headphones.jpg",
    desc: "Inalámbrico",
    price: 1350,
    category: "Auriculares",
  },
  {
    id: 3,
    title: "Camara de fotos Xerox",
    img: "https://res.cloudinary.com/dv9a5qgfw/image/upload/v1710183290/camera.jpg",
    desc: "Contiene flash",
    price: 1280,
    category: "Camaras",
  },
];

export const TotalProducts = products.length;

export const Products = products.reduce((acc, product) => {
  if (!acc[product.category]) {
    acc[product.category] = [];
  }

  acc[product.category] = [...acc[product.category], product];

  return acc;
}, {});
