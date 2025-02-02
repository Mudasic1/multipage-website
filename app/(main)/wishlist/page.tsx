"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const initialWishlist = [
  {
    img: "https://cdn.mos.cms.futurecdn.net/XMDNCcbVWnrYj3zdapKrGb-1200-80.jpg",
    title: "Bose QuietComfort 45",
    price: "$329.99",
    slug: "bose-quietcomfort-45",
  },
  {
    img: "https://www.aorus.com/image/gallery/gallery-1625046643.jpg",
    title: "Anker Soundcore Life Q20",
    price: "$59.99",
    slug: "anker-soundcore-life-q20",
  },
];

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState(initialWishlist);

  const removeFromWishlist = (slug: string) => {
    setWishlist(wishlist.filter((item) => item.slug !== slug));
  };

  return (
    <div className="bg-slate-800 min-h-screen text-white p-6">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <p className="text-center text-gray-300">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((item) => (
              <div
                key={item.slug}
                className="bg-gray-700 p-4 rounded-lg shadow-md text-center"
              >
                <Link href={`/product/${item.slug}`} className="block">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="rounded-lg object-cover mx-auto"
                  />
                  <h2 className="text-lg font-semibold mt-2">{item.title}</h2>
                  <p className="text-yellow-400">{item.price}</p>
                </Link>
                <button
                  onClick={() => removeFromWishlist(item.slug)}
                  className="mt-3 bg-red-600 text-white py-1 px-4 rounded-lg w-full hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Back to Shop */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-blue-400 hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
