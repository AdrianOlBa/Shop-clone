import type { ReactNode } from "react";



export function Primary_button({ children, disabled }: { children: ReactNode , disabled:boolean }) : ReactNode {


    return (
        <button disabled={disabled}
            className={`mt-4 w-full py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2 bg-black text-white hover:bg-primary`}>
            {children}
        </button>


    )
}