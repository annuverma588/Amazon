import React from 'react'
import { Link } from 'react-router-dom';

function Hero() {
  return (
       <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50">
       
    <section className="bg-gradient-to-br from-green-200 via-emerald-600 to-lime-50 text-black">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-sm font-semibold text-green-600 bg-emerald-100 rounded-full">
            100% Handmade Woolen Crafts
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-900 leading-tight">
            Warm Threads,
            <br />
            <span className="text-black">Cute Woolen Stories</span>
          </h1>

          <p className="mt-6 text-lg text-gray-900 max-w-xl">
            Discover beautiful handmade woolen keychains, cute cartoon dolls,
            and colorful woolen flowers — crafted with love and warmth.
          </p>

          <div className="mt-8 flex gap-4">
            <Link to={"/product"} >
            <button className="px-6 py-3 bg-emerald-900 hover:bg-green-800 text-white font-semibold rounded-xl shadow-lg transition">
              Shop Now
            </button>
            </Link>
            <Link to={"/product"} >
            <button className=" px-6 py-3 border-2 border-emerald-900 text-black hover:bg-green-200 font-semibold rounded-xl transition">
              View Collection
            </button>
            </Link>
            
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center">
          <div className="grid grid-cols-2 gap-6">
            <img
              src="https://uttarakhandhaat.com/wp-content/uploads/2025/06/Evil-Eye-Keychain-1.jpeg"
              alt="Woolen Keychain"
              className="w-44 h-44 object-cover rounded-3xl shadow-lg hover:scale-105 transition"
            />
            <img
              src="https://sundayscreative.shop/cdn/shop/files/1_a642de21-6fdd-4eac-850a-da2ba3dcfe2d.jpg?v=1710339755&width=1946"
              alt="Woolen Cartoon"
              className="w-44 h-44 object-cover rounded-3xl shadow-lg hover:scale-105 transition"
            />
            <img
              src="https://m.media-amazon.com/images/I/5128knZXatL._AC_UY350_.jpg"
              alt="Woolen Flower"
              className="w-44 h-44 object-cover rounded-3xl shadow-lg hover:scale-105 transition col-span-2 mx-auto"
            />
          </div>
        </div>

      </div>
    </section>
     <img
        src="/main.png"
        alt="banner"
        className=" max-w-7xl mx-auto px-6 py-20  mb-6 rounded"
      />
<div className="font-sans">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-200 via-emerald-600 to-lime-50 text-black py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Wool
        </h1>
        <p className="text-lg mb-6">
          Pure, Natural & Premium Wool Products
        </p>
         <Link to={"/product"}>
        <button className="bg-white text-green-700 px-6 py-2 rounded font-semibold">
          Shop Now
        </button>
        </Link>
      </section>

      {/* Features */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-green-700">
          Why Choose My Wool?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">100% Natural</h3>
            <p>High quality natural wool products.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Eco Friendly</h3>
            <p>Environment friendly & sustainable.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="font-semibold text-lg mb-2">Affordable</h3>
            <p>Best quality at best price.</p>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="bg-green-50 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-green-700">
          Our Products
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="border p-4 text-center">
            <img src="/rabbit2.jpg" className="h-40 w-full object-cover mb-3" />
            <p>Wool Product</p>
            <p className="font-bold">₹500</p>
          </div>

          <div className="border p-4 text-center">
            <img src="/sunflw.jpg" className="h-40 w-full object-cover mb-3" />
            <p>Wool Product</p>
            <p className="font-bold">₹100</p>
          </div>

          <div className="border p-4 text-center">
            <img src="/scarf2.jpg" className="h-40 w-full object-cover mb-3" />
            <p>Wool Product</p>
            <p className="font-bold">₹1200</p>
          </div>

          <div className="border p-4 text-center">
            <img src="/bouquet2.jpg" className="h-40 w-full object-cover mb-3" />
            <p>Wool Product</p>
            <p className="font-bold">₹999</p>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-gradient-to-br from-green-200 via-emerald-600 to-lime-50 text-black text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-4">
          Feel the Warmth of Pure Wool
        </h2>
        <Link to={"/product"}>
        <button className="bg-white text-green-700 px-6 py-2 rounded font-semibold">
          Explore Products
        </button>
        </Link>
      </section>

    </div>











































































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






















      
 </div>
  );
};
      

export default Hero
