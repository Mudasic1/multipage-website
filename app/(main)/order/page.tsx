"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Sample cart data (Replace with actual cart state)
const initialCart = [
  {
    img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
    title: "Beats Studio 3",
    price: "$299.99",
    slug: "beats-studio-3",
    quantity: 1,
  },
  {
    img: "https://www.hyperx.com.pk/wp-content/uploads/2023/08/cloud-2-grey.png",
    title: "HyperX Cloud II",
    price: "$99.99",
    slug: "hyperx-cloud-ii",
    quantity: 1,
  },
];

const Order = () => {
  const [cart, setCart] = useState(initialCart);
  const router = useRouter();

  // Remove product from cart
  const removeFromCart = (slug: string) => {
    setCart(cart.filter((item) => item.slug !== slug));
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")),
    0
  );

  return (
    <div className="bg-slate-800 min-h-screen text-white p-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Order</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-300">Your cart is empty.</p>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center bg-gray-700 p-4 rounded-lg shadow-md"
                >
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-yellow-400">{item.price}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.slug)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-8 p-6 bg-gray-800 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p className="text-lg">
                Total:{" "}
                <span className="font-semibold text-yellow-400">
                  ${totalPrice.toFixed(2)}
                </span>
              </p>
              <button
                className="mt-4 bg-yellow-600 text-white py-2 px-6 rounded-lg w-full hover:bg-yellow-700 transition"
                onClick={() => alert("Order placed successfully!")}
              >
                Place Order
              </button>
            </div>
          </>
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
};

export default Order;
