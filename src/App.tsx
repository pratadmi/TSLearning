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
<div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 mb-12 text-center">
      <div className="title">
      <img className="logo-left" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" />
        <h1>PRODUCTS</h1>
        <img className="logo-right" src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" />
      </div>
    </div>
    {products.map((item, index) => (
      <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title">{item.title}</h4>
            <h6 className="card-description">{item.description}</h6>
          </div>
        </div>
      </div>
    ))}
    <div className="col-lg-12 col-md-12 mb-12 text-center">
      <div className="footer">
        <h3>FOOTER</h3>
      </div>
    </div>
  </div>
</div>


  </>
)
}