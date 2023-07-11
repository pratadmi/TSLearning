import { useEffect, useState } from "react";
import { Product } from "./Product"

export const ProductList = () => {

    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                console.log(res.products);
                setProducts(res.products);
            });
    }, []);

    return (
        <>
            {products.map((item) => (
                <Product title={item.title} description={item.description} key={item.id} image={item.images[0]} />
            ))}
        </>
    );
}
