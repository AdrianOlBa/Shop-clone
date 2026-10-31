import { Link, NavLink } from 'react-router';
import { Carrito } from './Cart';
import { Item } from './Item';

export const Header = () => {
  return (
    <header className=" w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 h-16 flex items-center justify-between">

        {/* Logotipo */}
        <Link to="/" className="text-xl font-bold">
          <span className="text-primary">Fake Store</span>
        </Link>

        {/* Navegación con React Router */}
        <nav className="flex items-center space-x-6">
          <Item navigate='/' text="Inicio" />
          <Item navigate='/shop' text="Tienda" />
          <Carrito />


        </nav>

      </div>
    </header>
  );
};