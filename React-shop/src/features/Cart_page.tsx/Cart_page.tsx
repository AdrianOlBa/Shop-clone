import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { all_products, ChangeAmount } from "../../utils/localstorage";
import { Cart_item } from "./Cart_item";
import type { Product_Basic_Data } from "../../types/Product";

export function CartPage() {
    console.log("cart pageee")
    //primero se examina la cantiudad inicial de productos en el carrito
    const [Products, setProducts] = useState<{ [index: string]: string }>(all_products())
    
    //id,precio
    const [Price_list, set_Price_list] = useState<{ [index: string]: number | {} }>({})
    const Product_lenght = Object.keys(Products).length

    //controla que pasara cuando un item  actualize su cantidad //reenviar el precio total 

    const OnUpdateProduct = useCallback((Id: string, new_amount: number, Price: number, delete_pr?: Boolean): void => {
        if (delete_pr) {
            //eliminar de localstorage
            ChangeAmount(Number(Id), 0)
            //eliminar del calculo de precios
            set_Price_list((x) => {
                let new_list = {...x};
                delete new_list[Id]
                return new_list
            })
            //eliminar de los productos que se renderizaran 
            setProducts((x) => {
                let new_list = {...x};
                delete new_list[Id]
                console.log(new_list)
                return new_list
            })
            return
        }
        //cambiar el localstorage
        ChangeAmount(Number(Id), new_amount)
        //cambiar los precios
        set_Price_list((x) => {
            let new_list = {...x};
            if (Price === 0) {
                delete new_list[Id]
            } else {
                new_list[Id] = Price;
            }
            console.log(new_list)
            return new_list
        })
    }, [])


    return (
        <div className="content h-auto flex flex-row flex-wrap w-full mt-3 p-3">

            {/*Listado de productos del carrito*/}
            <div className="rounded-2xl w-full h-[60vh] lg:h-[80vh] lg:w-2/3 bg-gray-100 border border-gray-300 p-1 md:p-3 shadow-xl overflow-scroll scrollbar-none">
                {
                    Product_lenght ? Object.entries(Products).map(([Id, Amount], index) => { return <Cart_item key={Id} Id={Id} initial_value={Number(Amount)} onUpdateProduct={OnUpdateProduct} /> }) : "Agrega mas productos desde la tienda"

                }
            </div>

            {/*Checkout*/}
            <div className="w-full lg:w-1/3 ">

            </div>

        </div>
    );
}