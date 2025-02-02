"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Dummy product data
const products = [
  {
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    category: "Wireless",
    title: "Beats Studio 3",
    price: "$299.99",
    description: "High-performance wireless noise-canceling headphones.",
    slug: "beats-studio-3",
  },
  {
    img: "https://www.hyperx.com.pk/wp-content/uploads/2023/08/cloud-2-grey.png",
    category: "Gaming",
    title: "HyperX Cloud II",
    price: "$99.99",
    description: "Premium gaming headset with virtual 7.1 surround sound.",
    slug: "hyperx-cloud-ii",
  },
  {
    img: "https://image.made-in-china.com/202f0j00cgukqozbZdcp/Vtex-Popular-All-in-One-Computers-3840-2160-UHD-4K-Aio-PC-Office-Design-Touch-Desktop-Computer-All-in-One-with-UPS.webp",
    category: "Noise Cancelling",
    title: "Sony WH-1000XM4",
    price: "$349.99",
    description:
      "Industry-leading noise cancellation with superior sound quality.",
    slug: "sony-wh-1000xm4",
  },
  {
    img: "https://cdn.mos.cms.futurecdn.net/XMDNCcbVWnrYj3zdapKrGb-1200-80.jpg",
    category: "Premium Sound",
    title: "Bose QuietComfort 45",
    price: "$329.99",
    description: "Comfortable and powerful noise-canceling headphones.",
    slug: "bose-quietcomfort-45",
  },
  {
    img: "https://www.aorus.com/image/gallery/gallery-1625046643.jpg",
    category: "Budget",
    title: "Anker Soundcore Life Q20",
    price: "$59.99",
    description: "Affordable wireless headphones with active noise canceling.",
    slug: "anker-soundcore-life-q20",
  },
];

const ProductDetail = () => {
  const router = useRouter();
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [cart, setCart] = useState<any[]>([]);

  const addToCart = () => {
    if (product) {
      setCart([...cart, product]);
      alert(`${product.title} added to cart!`);
    }
  };

  if (!product)
    return <p className="text-white text-center py-20">Product not found</p>;

  return (
    <div className="bg-slate-800 min-h-screen text-white p-6">
      {/* Product Details Section */}
      <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-8">
        <Image
          src={product.img}
          alt={product.title}
          width={400}
          height={400}
          className="rounded-lg shadow-lg object-cover w-full md:w-1/2"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-300 mb-4">{product.category}</p>
          <p className="text-lg mb-4">{product.description}</p>
          <p className="text-xl font-semibold">{product.price}</p>

          <button
            className="py-2 px-6 bg-yellow-600 rounded-xl mt-4 hover:bg-yellow-700 transition"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>

      {/* Other Products Section */}
      <div className="mt-12 container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-4">Other Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products
            .filter((p) => p.slug !== slug)
            .map((p) => (
              <Link key={p.slug} href={`/product/${p.slug}`} className="block">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={200}
                  height={200}
                  className="rounded-lg shadow-md object-cover w-full hover:scale-105 transition-transform"
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
