import { NavLink } from "react-router"
import { Categorie_cart } from "./Categorie_cart"

const valid_Cat: {name:string,image:string}[] = [{name:"kids",image:"https://images.pexels.com/photos/6261900/pexels-photo-6261900.jpeg"},{name:"woman",image:"https://images.pexels.com/photos/22724351/pexels-photo-22724351.jpeg"},{name:"men",image:"https://images.pexels.com/photos/14384301/pexels-photo-14384301.jpeg"}]

export function Categories() {

    return (
        <>
        <div className="text-3xl mt-5">CATEGORIES</div>
        <NavLink to="/shop" className="w-full flex justify-around my-5">
            {

                valid_Cat.map((element)=>{return <Categorie_cart key={element.name} name={element.name} image={element.image}/>})

            }
        </NavLink>
        </>
    )
}