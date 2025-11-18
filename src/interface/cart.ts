import type { Product } from "./products";

export interface Cart {
    id?: number | string;
    productID: number | string;
    product: Product[]; 
}