import { useEffect, useMemo, useRef, useState, type ChangeEvent, type ChangeEventHandler, type InputEvent, type InputEventHandler, type MouseEventHandler, type ReactNode } from "react";
import type { Product_Basic_Data } from "../../types/Product"; // Ajusta la ruta según tu proyecto
import { NavLink, useParams } from "react-router";
import { Product_quantity } from "../../utils/localstorage";
import { Primary_button } from "../../components/Elements/Primary-button";
import { useAmount } from "./hooks/useAmount";
import { Counter_product } from "../../components/Counter";
import type { CounterProps } from "../../components/types/CounterProps";
import { Star } from "../../components/Product-Cart/star";


export function Product_Page(): ReactNode {
    console.log("rendirazion product page --------------")
    const { id } = useParams()
    //estado para controlar el producto
    const [product, setProduct] = useState<Product_Basic_Data | null>()
    //conexion con el carrito en localstorage
    const { counter_register, Add_to_cart } = useAmount(Number(id))
    const initial_cart_value: number = useMemo(() => { return Product_quantity(Number(id)) || 1 }, [])



    const CounterProps: CounterProps = {
        initial_value: initial_cart_value,
        stock: product && product.stock || null,
        onUpdate: (new_value: number): void => {
            console.log("updateado")
            console.log(new_value)
            counter_register.current = new_value
            console.log(counter_register.current)
        },

    }

    //cargar datos iniciales
    useEffect(() => {
        const fetchData = async () => {
            console.log("effect")
            try {
                //pedir el producto en cuestion
                const response = await fetch("https://fakestoreapi.noksha.dev/api/products/" + id);
                const json = await response.json();
                setProduct(json);
            } catch (error) {
                console.error("Error in products api", error);
            }
        };

        fetchData();
    }, [])


    if (!product || Object.entries(product).length === 0) {
        return null
    }





    return (
        <div className=" text-start content w-full flex flex-col text-black">


            <div className="w-full   p-4 flex items-center">
                <NavLink to="/shop"
                    className="flex  gap-2 text-black  cursor-pointer"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                    <span className="text-sm font-medium">Volver</span>
                </NavLink>
            </div>


            <div className="flex flex-col md:flex-row  p-4 gap-10 w-full">


                <div className="w-full md:w-1/2  flex justify-center  rounded-xl p-4">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="h-90 m-0  md:h-[600px] object-contain"
                    />
                </div>


                <div className="w-full md:w-1/2 flex flex-col gap-1 mx-auto">

                    {/* Título*/}
                    <div className="flex flex-col ">
                        <span className=" text-gray-500 text-2xl uppercase ">{product.category} - {product.type}</span>
                        <h1 className=" text-3xl font-bold text-black uppercase mt-0">{product.title}</h1>
                    </div>

                    {/* Precio y rate */}
                    <div className="flex items-center gap-4  ">
                        <div className="text-2xl font-bold text-gray-900 ">${

                            product.discountedPrice ?
                                (
                                    <>
                                        <span className=" font-bold text-gray-900 ">
                                            {product.discountedPrice}
                                        </span>
                                        <span className="ms-1 text-gray-400 text-xl line-through">
                                            {product.price}
                                        </span>
                                    </>
                                ) :
                                (
                                    <span className="font-bold text-gray-900 text-base">
                                        {product.price}
                                    </span>
                                )

                        }</div>

                        <Star rate={product.rating} />
                    </div>

                    <div className="text-gray-700 mb-5">{product.description}</div>


                    <div className="text-base font-bold text-black mt-2">
                        Stock disponible: <span className="font-semibold text-gray-500">{product.stock} unidades</span>
                    </div>
                    <Counter_product props={CounterProps}></Counter_product>


                    <Primary_button disabled={false} click={Add_to_cart}>

                        "Add to cart"

                    </Primary_button>

                </div>

            </div>
        </div>
    );
}