import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://i.ytimg.com/vi/BaEDrx6loUg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5hpDSk-vCu5Q_kL9JBu6dDIYaAA",
    title: "Woolen Keychains",
  },
  {
    src: "https://mymodernmet.com/wp/wp-content/uploads/2019/01/what-is-amigurumi-17.jpg",
    title: "Handmade Woolen Toys",
  },
  {
    src: "https://yarnspatterns.com/wp-content/uploads/2025/08/How-to-Crochet-a-Gorgeous-Red-Scarf-with-EASY-crochet-steps-14-21-screenshot.jpg",
    title: "Warm Woolen Scarf ",
  },
  {
    src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg9RdIr5KkmdnZIwdIel3HZsTV7ieby93rh9VMy0OSp4afxiNWF_u4O7L5wUd0q7yXOWCJIl8hGoJbsJ-ec-GYqeLcGxfSCDRaPvEg1AvFRibtTOVXpD5sJxeb5u2_jlbLJIbBa3cta88fBVMfntdAeQ85XEEdfnL41oz7BDMBRTc2KHUVwWKRWljiAjA/w1200-h630-p-k-no-nu/YouTube%20thumbnails-3.png",
    title: "Cute Woolen Teddies",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <section className="bg-emerald-50 py-20">
      <div className="max-6xlw- mx-auto px-6 text-center">

        {/* Image Slider */}
        <div className="relative w-full max-w-8xl  mx-auto">
          <img
            src={images[current].src}
            alt={images[current].title}
            className="w-full h-[600px] object-cover rounded-2xl "
          />

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-1 rounded-full text-sm font-semibold text-gray-700">
            {images[current].title}
          </span>
        </div>

        {/* About Content */}
        <div className="mt-40">
          <h2 className="text-6xl font-extrabold text-gray-800">
            About Our My<span className="text-emerald-800">Wool</span>  🧶
          </h2>

          <p className="mt-6 text-lg text-gray-800 max-w-4xl mx-auto">
            Our journey into handmade woolen crafts begins with a deep love for
            warmth, creativity, and tradition. Every woolen piece we create —
            from cute woolen keychains and playful cartoon toys to cozy scarves
            and lovable teddy bears — is carefully handcrafted using soft yarn
            and traditional techniques.
          </p>

          <p className="mt-4 text-lg text-gray-800 max-w-4xl mx-auto">
            Handmade woolen items are not just products; they are emotions woven
            with patience and care. Each stitch tells a story and every product
            brings comfort, warmth, and happiness.
          </p>
        </div>

      </div>
      </section>
     <footer className="bg-emerald-700 text-white mt-10">
      
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold text-black  ml-3 items-center">
            My<span className="text-white">Wool</span>
          </h2>
          <p className="text-sm">
            Pure & natural wool products for your comfort.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Products</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>FAQ</li>
            <li>Shipping</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <p className="text-sm">📞 +91 00000 00000</p>
          <p className="text-sm">✉️ info@mywool.com</p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 text-center text-sm py-3">
        © 2026 My Wool. All rights reserved.
      </div>

    </footer>
</>
  
  );
};

export default About;
