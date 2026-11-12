import { useSearchParams, type SetURLSearchParams } from "react-router";
import { Categories } from "./Categories";
import { ShopGallery } from "./Shop_gallery";

export function Shop() {

    const [Category, set_Category]: [URLSearchParams, SetURLSearchParams] = useSearchParams();


    return (

        <div className="content flex-col" >
            <div className="text-3xl mt-5 p-5">EXPLORE ALL PRODUCTS</div>
            <Categories Category={Category} set_Category={set_Category}/>
            <ShopGallery Category={Category}  />
        </div>


    )
}