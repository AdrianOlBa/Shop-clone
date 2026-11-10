import type { MouseEventHandler, ReactNode } from "react";



export function Primary_button({ children, click, disabled }: { children: ReactNode, click: MouseEventHandler, disabled: boolean }): ReactNode {


    return (
        <button
            onClick={click}
            disabled={disabled}
            className={`mt-4 w-full py-2 px-4 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2 bg-black text-white hover:bg-primary`}>
            {children}
        </button>


    )
}