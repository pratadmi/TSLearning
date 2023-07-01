import { useState } from "react"
import "./styles.css"
let productName = "test2"
let data: any;

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(res => {
    data = res;
   
    productHandler(data);
  });

function productHandler(data: { products: any[] }) {
  //console.log(data);
  data.products.forEach((element: any) => {
    
    console.log(element.title);
    setProduct(element.title);

  });
  
}

export default function App(){

  const [productName, setProduct] = useState("")
  //setProduct("test");

  return(
    <>
   <table>
  <tr>
    <td>Product1</td>
    <td>{productName}</td>
    <td>Product2</td>
  </tr>
</table>
  
  </> 
)
}
