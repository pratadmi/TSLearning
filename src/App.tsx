import { useState, useEffect } from "react"
import "./styles.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductList } from './components/Productlist'

export default function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <Header value='PRODUCTS' />
          <ProductList />
          <Footer textValue="Footer" />
        </div>
      </div>


    </>
  )
}