import { Routes, Route } from 'react-router';
import { Header } from './features/Header/components/Header';
import './App.css'
import { Home } from './features/Home-page/components/Home';
import { Shop } from './features/Shop-page/components/Shop';

export function App() {
    return (
        <>
            <div className="h-auto w-full flex flex-col items-center  bg-gray-50">
                <Header />
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="/shop" element={<Shop/>} />
                </Routes>
            </div>
        </>
    );
}


