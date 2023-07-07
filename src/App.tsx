import { useState, useEffect } from "react"
import "./styles.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductList } from './components/Productlist'
import './components/Product'

export default function App() {

  const [products, setProducts] = useState<Product[]>([]); 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res.products);
        setProducts(res.products);

      });
  }, [])



  return (
    <>
      <div className="container">
        <div className="row">
          <Header value='PRODUCTS' />
          {products.map((item) => (
            <ProductList title={item.title} description={item.description} key={item.key} image={item.images[0]}/>
          ))}
          <Footer textValue="Footer" />
        </div>
      </div>


    </>
  )
}