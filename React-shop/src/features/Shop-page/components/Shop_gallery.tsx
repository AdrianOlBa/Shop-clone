import { useEffect, useRef, useState } from "react";
import { Product_Cart } from "../../../components/Product-Cart/Product";
import { useProducts } from "../../../hooks/useProducts";
import type { Product_Basic_Data } from "../../../types/Product";




export function ShopGallery() {
console.log("rendering gallery")
    const { Productos } = useProducts(true)

    const [showedProducts, setShowedProducts] = useState<number>(10)


    function loadMoreProducts() {
        Productos && setShowedProducts(showedProducts + 10)
    }


    const loaderRef: React.RefObject<HTMLDivElement | null> = useRef(null)
    //al cargar el componente se 
    useEffect(() => {
     
        const options = {
            root: null,
            rootMargin: "0px",
            scrollMargin: "0px",
            threshold: 0.2,
        };

        const observer = new IntersectionObserver((entries, observer) => { loadMoreProducts() }, options);

        loaderRef.current && observer.observe(loaderRef.current);

    }, [loadMoreProducts]);

    return (
        <>
            <div className="w-full flex flex-row flex-wrap justify-center  gap-4 ">
                {
                    Productos && (Productos.data.slice(0, showedProducts).map((element, index) => {
                        return <Product_Cart key={element._id} product={element} />
                    }))
                }

            </div>
            <div className="observer" ref={loaderRef}>
                cargarndo mas productos
            </div>
        </>
    )

}


