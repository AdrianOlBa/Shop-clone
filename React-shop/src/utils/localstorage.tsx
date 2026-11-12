export const Products = (): void => { localStorage.getItem('products'); }


export const all_products = (): { [index: string]: string } => {
    return JSON.parse(localStorage.getItem("products") || "{}")
}



//cantidad de un producto en el carrito
export const Product_quantity = (id: number): number => {
    const request_product: { [index: string]: number } = JSON.parse(localStorage.getItem('products') || '{}')
    console.log(request_product[id])
    console.log("cantidad")
    if (!request_product[id]) {
        console.log("producto no en carrito")
        return 0
    } else {
        console.log("zfx")
        console.log("producto en carrito")
        return (request_product[id] || 0)
    }

}

export const ChangeAmount = (id: number, Amount: number): void => {
    console.log("cantidad cambiada")
    let productos: { [index: string]: Number } = JSON.parse(localStorage.getItem('products') || '{}');

    if (Amount == 0) {
        delete productos[id]
    } else {
        productos[id] = Amount
    }

    localStorage.setItem('products', JSON.stringify(productos))

}
