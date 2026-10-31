import { useEffect, useState } from "react";
import type { Products } from "../types/Products";


export function useProducts(): { Productos: Products | null, setProductos: Function } {
    const [Productos, setProductos] = useState<Products | null>(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products");
                const json = await response.json();
                setProductos(json);
            } catch (error) {
                console.error("Error in products api", error);
            }
        };

        fetchData();
    }, []);



    return { Productos, setProductos }
}