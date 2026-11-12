export function Checkout({ prices }: { prices: { [index: string]: number } }) {

    let subtotal: number = 0;
    for (let price of Object.values(prices)) {
        subtotal += price;
        console.log(price)
    }

    const tax = subtotal * 0.18;

    // Total final
    const total = subtotal + tax;

    return (
        <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-xl flex flex-col gap-4">
            <h3 className="text-xl font-bold text-black">
                Resumen del pedido
            </h3>
            <hr className="w-full"></hr>

           
            <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Subtotal del pedido</span>
                    <span className="font-semibold text-gray-800">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Impuestos (18%)</span>
                    <span className="font-semibold text-gray-800">${tax.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-sm border-b border-gray-100 pb-3">
                    <span className="text-gray-500">Envío</span>
                    <span className="text-green-600 font-medium">Gratis</span>
                </div>

                <div className="flex justify-between text-lg font-bold text-gray-900 pt-1">
                    <span>Total a pagar</span>
                    <span className="text-black">${total.toFixed(2)}</span>
                </div>
            </div>

            {/* Botón de compra */}
            <button
                className="w-full bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors cursor-pointer shadow-md mt-1"
            >
                Proceder a la compra
            </button>
            <hr className="mt-3 w-full"></hr>

            {/* Sugerencias y notas adicionales */}
            <div className="rounded-xl p-3.5 text-xs text-gray-500 flex flex-col gap-2 ">
                <span className="font-semibold text-gray-700">Beneficios para ti:</span>
                <ul className="list-disc list-inside space-y-1 text-gray-500">
                    <li>Envío express garantizado en 24/48 horas.</li>
                    <li>Garantía de devolución de 30 días sin complicaciones.</li>
                </ul>
            </div>
        </div>
    );
}