import { useEffect, useRef, useState } from "react";
import { Product_Cart } from "../../../components/Product-Cart/Product";
import { useProducts } from "../../../hooks/useProducts";



export function ShopGallery() {
    console.log("rendering gallery")
    //productos totales
    const { Productos } = useProducts(true)
    //cantidad de productos mostrados
    const [showedProducts, setShowedProducts] = useState<number>(10)

    //acceso a la variable showedProducts desde el observer
    const showedProductsRef : React.RefObject<number> = useRef(showedProducts);

    console.log(Productos)
    console.log("showedProducts", showedProducts)

    //sincronizar 
    useEffect(() => {
        showedProductsRef.current = showedProducts;
    });



    const loaderRef: React.RefObject<HTMLDivElement | null> = useRef(null)

    //al cargar el componente se 
    useEffect(() => {
        console.log("useEffect creation")
        console.log(loaderRef.current)
        function loadMoreProducts() {
            console.log("elemento obrservado")
            if (showedProductsRef.current >= 30) {
                observer.disconnect();
                return;
            }
            setShowedProducts(showedProducts => showedProducts + 10)
        }

        const options = {
            root: null,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 0.5,
        };

        const observer = new IntersectionObserver((entries) => {


            if (entries[0].isIntersecting) {
                loadMoreProducts();
            }

        }, options);
        //si hay productos mostrados y el loaderRef.current existe, se observa el loaderRef.current
        loaderRef.current && observer.observe(loaderRef.current);


        return () => {
            observer.disconnect();
        };


    }, []);

    return (
        <>
            <div className="w-full flex flex-row flex-wrap justify-center content-start gap-4 min-h-[80rem]">
                {
                    Productos && (Productos.data.slice(0, showedProducts).map((element, index) => {
                        return (
                            <Product_Cart key={element._id} product={element} />
                        )
                    }))

                }

            </div>

            <div className="observer" ref={loaderRef}>
                cargando mas productos
            </div>

        </>
    )

}


