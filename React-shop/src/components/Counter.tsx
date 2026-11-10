import { useEffect, useState } from "react";
import type { CounterProps } from "./types/CounterProps";

export function Counter_product({ props }: { props: CounterProps }) {

    const { initial_value, stock, onUpdate, } = props
    const [Amount, setAmount] = useState<number>(initial_value)
    useEffect(() => { onUpdate(Amount) }, [Amount])

    return (
        <div className="flex w-fit overflow-hidden border border-black rounded-lg bg-white text-black shadow-sm">
        
            <button
                onClick={() => {
                    setAmount(
                        (A) => {
                            if ((A - 1) < 0) {
                                return 0
                            }
                            return A - 1
                        }

                    )
                }}
                className="w-[40px] py-3 px-3  text-black hover:bg-gray-100 select-none cursor-pointer"
                aria-label="Disminuir cantidad"
            >
                -
            </button>

            <input
                name="nummber"
                type="number"
                value={Amount}
                onChange={(event) => {
                    console.log("xdadsasd")
                    console.log(event.target.value)
                    if (Number(event.target.value) >= 0) {
                        setAmount(Number(event.target.value))
                    } else {
                        return
                    }
                }}
                className=" w-[70px] py-3 text-center text-sm font-medium focus:outline-none bg-transparent  [&::-webkit--spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                min={0}
                max={Number(stock)}
            />

    
            <button
                onClick={() => {
                    setAmount(A => A + 1)
                }}
                className="w-[40px] py-3 px-3  text-black hover:bg-gray-100 select-none cursor-pointer"
                aria-label="Aumentar cantidad"
            >
                +
            </button>
        </div>
    );

}