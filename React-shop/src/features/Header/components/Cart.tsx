import { Link, NavLink } from 'react-router';
import carritoIcon from '../assets/carrito.png';

export const Carrito = () => {
  return <NavLink
    to="/cart"
    className="flex items-center gap-2 transition "
  >
    <img
      src={carritoIcon}
      alt="Carrito de compras"
      className="w-5 h-5 object-contain"
    />

  </NavLink>
};