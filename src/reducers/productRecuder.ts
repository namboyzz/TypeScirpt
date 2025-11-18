import type { Product } from "../interface/products";


type ProductState = {
    products: Product[];
}

type ProductAction =
    | { type: "SET_PRODUCTS"; payload: Product[] }
    | { type: "ADD_PRODUCT"; payload: Product }
    | { type: "UPDATE_PRODUCT"; payload: Product }
    | { type: "DELETE_PRODUCT"; payload: number | string };

const productReducer = (state: ProductState, action: ProductAction) => {
    switch (action.type) {
        case "SET_PRODUCTS":
            return { ...state, products: action.payload };
        case "ADD_PRODUCT":
            return { ...state, products: [...state.products, action.payload] };
        case "UPDATE_PRODUCT":
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload : product
                ),
            };
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.products.filter(
                    (product) => product.id !== action.payload
                ),
            };
        default:
            return state;
    }
}

export default productReducer