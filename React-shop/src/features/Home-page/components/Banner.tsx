import type { ReactNode } from "react";
import banner from "../assets/banner.jpg"

export function Banner({ children }: { children: ReactNode }) {


    return (
        <div
            className="relative flex justify-center  items-center w-full h-96 bg-cover bg-center  bg-no-repeat"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <div className="absolute bg-black opacity-50 h-96 w-full"></div>
            <div className=" relative text-white text-5xl font-bold">
                {children}
            </div>

        </div>
    )
}