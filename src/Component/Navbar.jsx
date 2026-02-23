import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'

function Navbar() {
  return (
    <div>
     <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
<div className="max-w-7xl mx-auto flex items-center justify-between p-4">
<div>
  <h2 className="text-3xl font-bold text-black  ml-3 items-center">
            My<span className="text-emerald-800">Wool</span>
          </h2>
</div>


{/* Desktop Menu */}
<ul className="hidden md:flex gap-6 text-lg">
  <Link to="/">
<li className="hover:text-emerald-600 cursor-pointer">Home</li>
</Link>
<Link to={"/about"}>
<li className="hover:text-emerald-600 cursor-pointer">About</li>
</Link>
<Link to={"/product"}>
<li className="hover:text-emerald-600 cursor-pointer">Product</li>
</Link>
<Link to="/contact">
<li className="hover:text-emerald-600 cursor-pointer">Contact</li>
</Link>
</ul>

 {/* <button className=' font-bold '>
        Login
      </button> */}
</div>
</nav>
    </div>
  )
}

export default Navbar
