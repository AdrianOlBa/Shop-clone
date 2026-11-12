import { useEffect, useMemo, useReducer, useState } from "react";
import { all_products } from "../../utils/localstorage";
import { Cart_item } from "./Cart_item";

export function CartPage() {

    //primero se examina la cantiudad inicial de productos en el carrito
    const Products = useMemo(() => { return all_products() }, [])
    const [Price_list, set_Price_list] = useState<{ [index: string]: number | {} }>({})
    const Product_lenght = Object.keys(Products).length

    //controla que pasara cuando un item  actualize su cantidad //reenviar el precio total 
    const OnUpdatePrice = (Id:string,Price:number):void => {
        console.log(Id)
        console.log(Price)
    }

    return (
        <div className="content h-auto flex flex-row flex-wrap w-full mt-3 p-3">

            {/*Listado de productos del carrito*/}
            <div className="rounded-2xl w-full h-[60vh] lg:h-[80vh] lg:w-2/3 bg-gray-100 border border-gray-300 p-1 md:p-3 shadow-xl overflow-scroll scrollbar-none">
                {
                    Product_lenght ? Object.entries(Products).map(([Id, Amount], index) => { return <Cart_item key={Id} Id={Id} initial_value={Number(Amount)} onUpdatePrice={OnUpdatePrice}/> }) : "Agrega mas productos desde la tienda"

                }
            </div>

            {/*Checkout*/}
            <div className="w-full lg:w-1/3 ">

            </div>

        </div>
    );
}