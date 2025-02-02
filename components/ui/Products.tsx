import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {[
            {
              img: "https://images.unsplash.com/photo-1546435770-a3e426bf472b",
              category: "Wireless",
              title: "Beats Studio 3",
              price: "$299.99",
              slug: "beats-studio-3",
            },
            {
              img: "https://www.hyperx.com.pk/wp-content/uploads/2023/08/cloud-2-grey.png",
              category: "Gaming",
              title: "HyperX Cloud II",
              price: "$99.99",
              slug: "hyperx-cloud-ii",
            },
            {
              img: "https://image.made-in-china.com/202f0j00cgukqozbZdcp/Vtex-Popular-All-in-One-Computers-3840-2160-UHD-4K-Aio-PC-Office-Design-Touch-Desktop-Computer-All-in-One-with-UPS.webp",
              category: "Noise Cancelling",
              title: "Sony WH-1000XM4",
              price: "$349.99",
              slug: "sony-wh-1000xm4",
            },
            {
              img: "https://cdn.mos.cms.futurecdn.net/XMDNCcbVWnrYj3zdapKrGb-1200-80.jpg",
              category: "Premium Sound",
              title: "Bose QuietComfort 45",
              price: "$329.99",
              slug: "bose-quietcomfort-45",
            },
            {
              img: "https://www.aorus.com/image/gallery/gallery-1625046643.jpg",
              category: "Budget",
              title: "Anker Soundcore Life Q20",
              price: "$59.99",
              slug: "anker-soundcore-life-q20",
            },
            {
              img: "https://www.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-siteCatalog_JB_US_Imported/default/dw1801b701/stagexd.jpg?sw=800&sh=400",
              category: "Studio",
              title: "Audio-Technica ATH-M50X",
              price: "$149.99",
              slug: "audio-technica-ath-m50x",
            },
            {
              img: "https://proaudio.com.pk/wp-content/uploads/2020/05/1545210908_IMG_1113657.jpg",
              category: "Sports",
              title: "JBL Tune 700BT",
              price: "$79.99",
              slug: "jbl-tune-700bt",
            },
            {
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPuL70bf-5buLBMu_JtUz_ScEfXeZSxDw67A&s",
              category: "Luxury",
              title: "Bang & Olufsen Beoplay H95",
              price: "$899.99",
              slug: "bang-olufsen-beoplay-h95",
            },
          ].map((product, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link
                href={`/products/${product.slug}`}
                className="block relative h-48 rounded overflow-hidden"
              >
                <Image
                  alt={product.title}
                  className="object-cover object-center w-full h-full block"
                  src={product.img}
                />
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  {product.title}
                </h2>
                <p className="mt-1">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
