import { memo, useEffect, useState } from "react"
import type { Product_Basic_Data } from "../../types/Product"
import { Counter_product } from "../../components/Counter"
import type { CounterProps } from "../../components/types/CounterProps"


export const Cart_item = memo(function ({ Id, initial_value, onUpdateProduct }: { Id: string, initial_value: number, onUpdateProduct: (Id: string, new_Amount: number, Price: number, delete_pr?: boolean) => void }) {
    const [Product, setProduct] = useState<Product_Basic_Data>()
    const [totalPrice, settotalPrice] = useState<number | null>(null)


    useEffect(() => {
        console.log("producto montado")

        const fetchData = async () => {

            try {
                //pedir el producto en cuestion
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products/" + Id);
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.error("Error in products api", error);
            }

        };

        fetchData();

    }, [])


    if (!Product) {
        return
    }


    const currentPrice = Product.discountedPrice ?? Product.price;




    const Counter_props: CounterProps = {
        initial_value,
        stock: Product.stock,
        onUpdate: (amount: number) => {

            let new_price = amount * currentPrice
            settotalPrice(new_price)

            onUpdateProduct(Id, amount, new_price);


        }
    }

    return (
        <div className="my-1 flex  flex-row  p-2 bg-white border border-gray-200 rounded-lg shadow-sm gap-4">

            <img
                src={Product.image}
                alt={Product.title}
                className="h-48 md:h-36 aspect-square object-cover rounded-md  bg-gray-50"
            />

            <div className="flex flex-col md:flex-row lg:justify-between w-full">
                <div className="flex-1 p-3">
                    <h4 className="text-xl font-medium text-black truncated">{Product.title}</h4>
                    <p className="text-lg text-gray-500 ">Category: {Product.category}</p>
                    <div className="text-xl font-semibold text-gray-800 mt-1">
                        ${currentPrice}
                    </div>
                </div>
                <div className="flex  flex-row md:flex-col justify-between p-3 h-full ">
                    <div className="flex flex-row lg:pt-2 gap-2 h-15 text-right">
                        <Counter_product props={Counter_props} />
                        <div className="text-xl font-bold text-gray-900 min-w-[70px]">
                            ${!(totalPrice === null) && (totalPrice.toFixed(2))}
                        </div>
                    </div>
                    <svg onClick={() => { console.log("sadasd"); onUpdateProduct(Id, 0, 0, true) }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  me-1 self-center md:self-end cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>


                </div>
            </div>


        </div>
    );
})