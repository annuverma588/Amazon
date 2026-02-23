import React, { useState } from "react";

export default function OrderContact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    product: "",
    quantity: 1,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", form);
    alert("Order Sent Successfully!");
  };

  return (
    <>
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('bg.jpg')" }}
    >"
      <div className="bg-white mt-15 z-10 w-full max-w-xl mr-[40%]  rounded-2xl shadow-2xl p-8  transition-all">
        <h1 className="text-3xl font-bold text-center ">Order / Contact Form</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full  p-3 rounded-xl border border-gray-300 focus:border-black outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-black outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Address</label>
            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-black outline-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Product</label>
            <input
              type="text"
              name="product"
              value={form.product}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-black outline-none"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Quantity</label>
            <input
              type="number"
              min="1"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              className="w-full p-3 rounded-xl border border-gray-300 focus:border-black outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-900 text-white py-3 rounded-xl text-lg font-semibold hover:bg-emerald-800 transition"
          >
            Submit Order
          </button>
        </form>
      </div>
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

</>      
    
  );
}
