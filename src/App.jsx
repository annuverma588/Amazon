import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import About from './Component/About'
import Contact from './Component/Pages/Contact'
import Product from './Component/Pages/Product'

function App() {
  return (
    <div>
       <Navbar/>

<Routes>
  <Route path='/about' element={<About/>}/>
  <Route path='/' element={<Hero/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/product' element={<Product/>}/>
</Routes>


    </div>
  )
}

export default App
