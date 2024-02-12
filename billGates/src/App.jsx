import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Money from './components/Money'
import Product from './components/Product'

function App() {
  const [totalMoney,setTotalMoney] = useState(100000000000)
  return (
    <>
    <Header/>
    <Money totalMoney = {totalMoney}/>
    <Product/>
    </>
  )
}

export default App
