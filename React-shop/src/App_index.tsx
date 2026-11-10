import { Routes, Route } from 'react-router';
import { Header } from './features/Header/components/Header';
import './App.css'
import { Home } from './features/Home-page/components/Home';
import { Shop } from './features/Shop-page/components/Shop';
import { CartPage } from './features/Cart_page.tsx/Cart_page';
import { Product_Page } from './features/Product_Page/Product_Page';

export function App() {
    return (
        <>
            <div className="h-auto w-full flex flex-col items-center  bg-gray-50 min-h-screen">
                <Header />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/cart" element={<CartPage/>} />
                    <Route path="/product/:id" element={<Product_Page/>}/>
                </Routes>
            </div>
        </>
    );
}


