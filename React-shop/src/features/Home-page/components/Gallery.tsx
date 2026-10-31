import { Product_Cart } from "../../../components/Product-Cart/Product";
import { useProducts } from "../../../hooks/useProducts";


export function Gallery() {

    const { Productos } = useProducts()
    console.log("renders")
    return (
        <div className="w-full flex flex-row flex-wrap gap-4 px-2">
            {
                Productos && (Productos.data.map((element) => {
                    return <Product_Cart key={element._id} product={element} />
                }))
            }
        </div>

    )


}