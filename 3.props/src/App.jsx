import { useState } from 'react'
import './App.css'
import Product from './Product'

function App() {

const productName= "freezer";

  return (
  <div>
    <Product productName= "shoe" price= {3000} />
    <hr/>
    <Product productName={productName} price= {2000}/>
  </div>
  )
}

export default App
