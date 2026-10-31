import type { Product_Basic_Data } from "../../types/Product";
import { Primary_button } from "../Elements/Primary-button";

export function Product_Cart({ product }: { product: Product_Basic_Data }) {

  const {
    title,
    price,
    image,
    discountedPrice,
    stock
  } = product;

  return (
    <div className="min-w-60 flex-1 relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">


      <div className="relative w-full h-64 bg-gray-100 overflow-hidden flex items-center justify-center p-4">
        <img
          src={image}
          alt={title}
          className="h-full object-cover"
        />


        {stock <= 15 && stock > 0 && (
          <span className="absolute bottom-2 left-2 bg-white text-red-600  border border-red-600 text-sm font-semibold px-2 py-0.5 rounded">
            ¡Quedan {stock}!
          </span>
        )}
      </div>


      <div className="p-4 flex flex-col">
        <div>

          <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 ">
            {title}
          </h3>


          <div className="flex items-center gap-2 mt-2">

            {discountedPrice ?
              (
                <>
                  <span className="font-bold text-gray-900 text-base">
                    ${discountedPrice}
                  </span>
                  <span className="text-gray-400 text-sm line-through">
                    ${price}
                  </span>
                </>
              ) :
              (
                <span className="font-bold text-gray-900 text-base">
                  ${price}
                </span>
              )}

          </div>

        </div>

        <Primary_button disabled={stock === 0}>
          {stock === 0 ? "Agotado" : "Añadir al carrito"}
        </Primary_button>




      </div>

    </div>
  );
}