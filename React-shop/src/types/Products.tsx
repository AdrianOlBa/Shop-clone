import type { Product_Basic_Data } from "./Product";


export interface Products {
    data : Product_Basic_Data []
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    perPage: number;
}