import { useEffect, useRef, useState } from "react";
import { Product_Cart } from "../../../components/Product-Cart/Product";
import { useProducts } from "../../../hooks/useProducts";


/*debido a limitaciones de la api no se pueden consultar productos por categoria
por lo que se hace es traer todos los productos y guardalos y filtrarlos cuando es necesario en el front, => ya que la api no tiene un endpoint para filtrar productos por categoria y no hay sentido en hacer una consulta que traiga los mismos 30 productos en cada cambio...
esto no es lo ideal pero es lo que hay,el flujo termina asi:
- se traen todos los productos en un estado y un estado controla cuantos productos se deben mostrar por pantalla => ya que no esta la comodidad de hacer consultas por categoria este estado tambien se usa para controlar los productos que se deben mostrar cuando se hace un filtrado ... 
- 
**/

export function ShopGallery({ Category }: { Category: URLSearchParams }) {
    console.log("rendering gallery")
    //categorias
    const filters = Category.get("category")

    const { Productos } = useProducts(true)


    //cantidad de productos mostrados
    const [showedProducts, setShowedProducts] = useState<number>(10)

    //acceso a la variable showedProducts desde el observer
    const showedProductsRef: React.RefObject<number> = useRef(showedProducts);

    console.log(Productos)
    console.log("showedProducts", showedProducts)

    //sincronizar 
    useEffect(() => {
        showedProductsRef.current = showedProducts;
    });

    useEffect(() => {
        //si hay un filtro se debe mostrar todos los productos disponibles de esa categoria, si no hay filtro se muestran los productos de 10 en 10
        console.log("filters", filters)
        filters && setShowedProducts(30)
        filters || setShowedProducts(10)

    }, [filters])



    const loaderRef: React.RefObject<HTMLDivElement | null> = useRef(null)

    //al cargar el componente se agrega un observer 
    //tambien se agrega el observer cuando se cambia el filtro
    //si no hay filtro se activa el observer
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
        filters == null && loaderRef.current && observer.observe(loaderRef.current);


        return () => {
            observer.disconnect();
        };


    }, [filters]);

    return (
        <>
            <div className="w-full flex flex-row flex-wrap justify-center content-start gap-4 min-h-screen h-auto">
                {
                    Productos && (Productos.data.slice(0, showedProducts).map((element, index) => {
                        if (filters && filters !== element.category) {
                            return null;
                        }
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


