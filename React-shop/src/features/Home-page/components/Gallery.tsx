import { NavLink } from "react-router";
import { Product_Cart } from "../../../components/Product-Cart/Product";
import { useProducts } from "../../../hooks/useProducts";


export function Gallery() {

    const { Productos } = useProducts()
    console.log("renders")
    return (
        <div className="w-full flex scroll-smooth flex-row flex-no-wrap overflow-x-scroll scrollbar-none gap-4 px-2">
            {
                Productos && (Productos.data.map((element, index) => {
                    if(index>=10){
                        return
                    }
                    return <Product_Cart key={element._id} product={element} />
                }))
            }
        </div>

    )


}