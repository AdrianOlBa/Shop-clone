import { NavLink } from "react-router"
import { Categorie_cart } from "./Categorie_cart"
import type { ValidCategory } from "../types/Categories"

const valid_Cat: ValidCategory[] = [
    { name: "kids", image: "https://images.pexels.com/photos/6261900/pexels-photo-6261900.jpeg",link: "/shop/?category=kids" },
    { name: "women", image: "https://images.pexels.com/photos/22724351/pexels-photo-22724351.jpeg" ,link: "/shop/?category=women"},
    { name: "men", image: "https://images.pexels.com/photos/14384301/pexels-photo-14384301.jpeg" ,link: "/shop/?category=men"},
]

export function Categories() {

    return (
        <>
            <div className="text-center text-3xl mt-5">CATEGORIES</div>
            <div className="w-full flex justify-around my-5">
                {

                    valid_Cat.map((element) => { return <Categorie_cart key={element.name} element={element}/> })

                }
            </div>
        </>
    )
}