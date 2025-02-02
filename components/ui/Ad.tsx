"use client";
import Image from "next/image";

const Ad = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-800 py-32 px-10 relative mb-4">
            <Image
              alt="Exclusive Deals"
              className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
              width={1000}
              height={1000}
              src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-white font-medium title-font mb-2">
                Exclusive Deals Await!
              </h2>
              <p className="leading-relaxed">
                Discover unbeatable offers on premium products. Don&apos;t miss out!
              </p>
              <a
                className="mt-3 text-indigo-300 inline-flex items-center"
                href="#"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                  alt="Shop Categories"
                  className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1487014679447-9f8336841d58?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Explore Categories
                  </h2>
                  <p className="leading-relaxed">
                    Browse through a variety of categories to find what you
                    love.
                  </p>
                  <a
                    className="mt-3 text-indigo-300 inline-flex items-center"
                    href="#"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-800 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                  alt="Trending Products"
                  className="w-full object-cover h-full object-center block opacity-40 absolute inset-0"
                  width={400}
                  height={400}
                  src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-white font-medium title-font mb-2">
                    Trending Now
                  </h2>
                  <p className="leading-relaxed">
                    Stay ahead with the latest trending products in the market.
                  </p>
                  <a
                    className="mt-3 text-indigo-300 inline-flex items-center"
                    href="#"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ad;
