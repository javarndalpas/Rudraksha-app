import { useState } from 'react'
import './App.css'
import React from 'react'

import { AllRoutes } from './routes/AllRoutes'
import { Header } from './components/Layout/Header'
import { ProductCard } from './components/Element/ProductCard'
import { Footer } from './components/Layout/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      {/* <ProductCard/> */}
      <AllRoutes />
      <Footer />
    </>
  )
}

export default App
