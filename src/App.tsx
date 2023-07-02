import { useState, useEffect } from "react"
import "./styles.css"


export default function App(){

  const [products, setProducts] = useState([]);

  useEffect(()=> {
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(res => {
      console.log(res.products);
      setProducts(res.products);
     
    });
  ``
  },[])
  


  return(
    <>
    <div className="product-container">
      {products.map((item, index) => (
        <div className="product-item" key={item.id}>{item.title}</div>
      ))}
    </div>
  </>
)
}