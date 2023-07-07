import { useState, useEffect } from "react"
import "./styles.css"
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ProductList } from './components/Productlist'


export default function App() {

  const [products, setProducts] = useState<any[]>([]); // tady any se mi nelibi, ale jinak :never

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
            <ProductList title={item.title} desc={item.description} id={item.key} image={item.images[0]}/>
          ))}
          <Footer textValue="Footer" />
        </div>
      </div>


    </>
  )
}