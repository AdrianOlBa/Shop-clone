import { useEffect, useRef, useState } from "react";
import { ChangeAmount, Product_quantity } from "../../../utils/localstorage";



/**
 * Controlador de la cantidad de un producto
 * @param id 
 * @returns 
 */
export function useAmount(id: number) {

    const counter_register = useRef(0)

    const Add_to_cart = () => {
        console.log("anadir al carritoooo")
        console.log(counter_register.current)
        if (counter_register.current >= 0) {
            console.log(localStorage)
            ChangeAmount(id, counter_register.current)
            console.log(localStorage)
        }
    }

    return { counter_register, Add_to_cart }

}