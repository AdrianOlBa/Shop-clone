import { NavLink } from "react-router/internal/react-server-client";
import type { ValidCategory } from "../types/Categories";


export function Categorie_cart( {element} : {element:ValidCategory}) {
    return (
        <NavLink to={element.link}
            className="relative aspect-square w-38 md:w-52 rounded-full overflow-hidden cursor-pointer shadow-md bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: `url(${element.image})` }}
        >
       
            <div className="aspect-square w-64 absolute bg-black opacity-50 transition-opacity hover:opacity-30"></div>

            <span className="relative  text-white text-2xl font-semibold text-center pointer-events-none">
                {element.name}
            </span>
        </NavLink>
    );
}