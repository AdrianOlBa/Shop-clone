import { NavLink } from 'react-router';


export function Item({ navigate, text }: { navigate: string, text: string }) {


    return (
        <NavLink to={navigate} className={({ isActive }: { isActive: boolean }) =>
            isActive ? "text-primary font-semibold" : "text-gray-600 hover:text-gray-900 transition"}>
            {text}
        </NavLink>
    )

}