//solo se registraran los datos que se usaran...
export interface Product_Basic_Data {
    _id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    type: string;
    stock: number;
    image: string;
    isNew?: boolean;
    oldPrice?: string;
    discountedPrice?: number;
    brand?: string;
    size?: string[];
    rating?: number;
}