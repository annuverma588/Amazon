import React from 'react'

function Product() {
  return (
    <div>
      <div className="p-6">

      {/* Top Image */}
      <img
        src="https://via.placeholder.com/1200x300"
        alt="banner"
        className="w-full mb-6 rounded"
      />

      {/* Heading */}
      <h1 className="text-5xl font-bold text-center mb-6">
        Our Products
      </h1>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">

        {/* Product Card */}
        <div className="border p-3">
          <img src="/bouquet2.jpg" alt="Bouquet" />
          <h2>Product 1</h2>
          <p>₹999</p>
        </div>

        <div className="border p-3">
          <img src="/bouquet3.jpg" alt="Bouquet" />
          <h2>Product 2</h2>
          <p>₹999</p>
        </div>


        <div className="border p-3">
          <img src="/bouquet5.jpg" alt="Bouquet" />
          <h2>Product 3</h2>
          <p>₹999</p>
        </div>
        <div className="border p-3">
          <img src="https://i.pinimg.com/736x/4f/d3/68/4fd36825727d4fb9bc73bc73bd72845e.jpg" alt="Bouquet" />
          <h2>Product 4</h2>
          <p>₹999</p>
        </div>
             </div>
{/* -----------------second line--------------- */}
<h1 className="text-3xl font-bold text-center mb-6 mt-20">
        Keychains
      </h1>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">

        {/* Product Card */}
        <div className="border p-3">
          <img src="/tulip.jpg" alt="Keychains" />
          <h2>Product 1</h2>
          <p>₹100</p>
        </div>

        <div className="border p-3">
          <img src="/Bouquet.jpg" alt="Keychains" />
          <h2>Product 2</h2>
          <p>₹100</p>
        </div>


        <div className="border p-3">
          <img src="/flowers.jpg" alt="Keychains" />
          <h2>Product 3</h2>
          <p>₹100</p>
        </div>
        <div className="border p-3">
          <img src="https://uttarakhandhaat.com/wp-content/uploads/2025/06/Evil-Eye-Keychain-1.jpeg" alt="Bouquet" />
          <h2>Product 4</h2>
          <p>₹100</p>
        </div>
             </div>
{/* ------------------------third line------------------ */}

<h1 className="text-3xl font-bold text-center mb-6 mt-20">
        Soft toys
      </h1>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">

        {/* Product Card */}

        <div className="border p-3">
          <img src="/taddy2.jpg" alt="woolen Soft toys" />
          <h2>Product 1</h2>
          <p>₹500</p>
        </div>

        <div className="border p-3">
          <img src="/taddy1.jpg" alt="woolen Soft toys" />
          <h2>Product 2</h2>
          <p>₹500</p>
        </div>

        <div className="border p-3">
          <img src="/rabbit2.jpg" alt="Bouquet" />
          <h2>Product 3</h2>
          <p>₹500</p>
        </div>
        <div className="border p-3">
          <img src="/rabbit.jpg" alt="woolen Soft toys" />
          <h2>Product 4</h2>
          <p>₹500</p>
        </div>
             </div>
{/* -----------------------------forth line------------------------- */}


<h1 className="text-3xl font-bold text-center mb-6 mt-20">
        Woolen Wall Hanging
      </h1>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">

        {/* Product Card */}

        <div className="border p-3">
          <img src="/wall1.jpg" alt="woolen wall hanging" />
          <h2>Product 1</h2>
          <p>₹700</p>
        </div>

        <div className="border p-3">
          <img src="/wall2.jpg" alt="woolen wall hanging" />
          <h2>Product 2</h2>
          <p>₹700</p>
        </div>

        <div className="border p-3">
          <img src="/wall.png" alt="woolen wall hanging" />
          <h2>Product 3</h2>
          <p>₹700</p>
        </div>
        <div className="border p-3">
          <img src="/wall4.jpg" alt="woolen wall hanging" />
          <h2>Product 4</h2>
          <p>₹700</p>
        </div>
             </div>
{/* -------------------------fifth line----------------------------- */}

<h1 className="text-3xl font-bold text-center mb-6 mt-20">
        Woolen Scarf
      </h1>

      {/* Products */}
      <div className="grid grid-cols-4 gap-4">

        {/* Product Card */}

        <div className="border p-3">
          <img src="/scarf1.jpg" alt="Woolen Scarf" />
          <h2>Product 1</h2>
          <p>₹1200</p>
        </div>

        <div className="border p-3">
          <img src="/scarf2.jpg" alt="Woolen Scarf" />
          <h2>Product 2</h2>
          <p>₹1200</p>
        </div>

        <div className="border p-3">
          <img src="https://i.pinimg.com/736x/84/70/29/847029386aa688ddc809a2c1908475e5.jpg" alt="Woolen Scarf" />
          <h2>Product 3</h2>
          <p>₹1200</p>
        </div>
        <div className="border p-3">
          <img src="/scarf4.jpg" alt="Woolen Scarf" />
          <h2>Product 4</h2>
          <p>₹1200</p>
        </div>
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
  

    </div>
  )
}

export default Product
