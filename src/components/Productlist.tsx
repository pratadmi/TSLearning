import { useEffect, useState } from "react";
import { Product } from "./Product";

type ProductRes = {
    products: ProductType[];
}

type ProductType = {
    id: number
    title: string
    description: string;
    images: string[];
    price: number;
}

const add = (a: number, b: number): number => a + b

export const ProductList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(res => {
                const data = res as ProductRes
                console.log(data.products);

                setProducts(data.products);

            });
    }, []);

    const filterProducts = () => {
        console.log("filtered")
        setProducts((prevState) => {
            const result: ProductType[] = []
            for (let i = 0; i < prevState.length; i++) {
                if (prevState[i].price < 100) {
                    result.push(prevState[i])
                }
            }
            return result

        });

    }

    const filterProducts2 = () => {
        console.log("filtered2")
        setProducts((prevState) => {
            const result: ProductType[] = []
            for (const product of prevState) {
                if (product.price < 100) {
                    result.push(product)
                }
            }

            return result

        });

    }

    const filterProducts3 = () => {
        console.log("filtered3")
        setProducts((prevState) => {
            const result: ProductType[] = []
            prevState.forEach((product)=>{
                if(product.price < 100){
                    result.push(product)
                }
            })

            return result

        });

    }


    return (
        <>
            <div>
                <button onClick={() => filterProducts3()} type="button">Filter under 100</button>

            </div>
            <div>
                {products.map((item) => (
                    <Product
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        productId={item.id}
                        image={item.images[0]}
                        price={item.price}
                    />
                ))}
            </div>
        </>
    );
}
