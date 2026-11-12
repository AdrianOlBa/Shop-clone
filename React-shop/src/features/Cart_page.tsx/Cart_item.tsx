import { memo, useEffect, useState } from "react"
import type { Product_Basic_Data } from "../../types/Product"
import { Counter_product } from "../../components/Counter"
import type { CounterProps } from "../../components/types/CounterProps"


export const Cart_item = memo(function ({ Id, initial_value, onUpdatePrice }: { Id: string, initial_value: number, onUpdatePrice: (Id: string, Price: number) => void }) {
    const [Product, setProduct] = useState<Product_Basic_Data>()
    const [totalPrice, settotalPrice] = useState<number>(0)
    console.log(Product)
    useEffect(() => {
        const fetchData = async () => {
            console.log("effect")
            try {
                //pedir el producto en cuestion
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products/" + Id);
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.error("Error in products api", error);
            }
            console.log("fetching datas")
        };

        fetchData();

    }, [])

    useEffect(() => {
        console.log(totalPrice)
        onUpdatePrice(Id, totalPrice);
    }, [totalPrice])

    if (!Product) {
        return
    }


    const currentPrice = Product.discountedPrice ?? Product.price;




    const Counter_props: CounterProps = {
        initial_value,
        stock: Product.stock,
        onUpdate: (amount: number) => {
            settotalPrice(amount * currentPrice)
        }
    }

    return (
        <div className="my-1 flex flex-row  justify-between p-2 bg-white border border-gray-200 rounded-lg shadow-sm gap-4">
            
            <img
                src={Product.image}
                alt={Product.title}
                className="h-24 md:h-36 aspect-square object-cover rounded-md flex-shrink-0 bg-gray-50"
            />

           
            <div className="flex-1 p-3">
                <h4 className="text-xl font-medium text-black truncated">{Product.title}</h4>
                <p className="text-lg text-gray-500 ">Category: {Product.category}</p>
                <div className="text-xl font-semibold text-gray-800 mt-1">
                    ${currentPrice}
                </div>
            </div>
            
            <div className="flex flex-row items-center p-3 h-15 text-right">
                <Counter_product props={Counter_props} />
                <div className="text-sm font-bold text-gray-900 min-w-[70px]">
                    ${totalPrice.toFixed(2)}
                </div>
            </div>



        </div>
    );
})