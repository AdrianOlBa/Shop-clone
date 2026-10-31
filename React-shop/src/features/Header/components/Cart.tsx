import { Link, NavLink } from 'react-router';
import carritoIcon from '../assets/carrito.png'; 

export const Carrito = () => {
return <NavLink 
            to="/cart" 
            className={({ isActive }: { isActive: boolean }) => 
              `flex items-center gap-2 transition ${
                isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
              }`
            }
          >
            <img 
              src={carritoIcon} 
              alt="Carrito de compras" 
              className="w-5 h-5 object-contain" 
            />
            
          </NavLink>
};