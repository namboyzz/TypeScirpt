/* eslint-disable react-refresh/only-export-components */
import { createContext, useReducer } from "react";
import type { Product } from "../interface/products";
import instance from "../config/api";
import productReducer from "../reducers/productRecuder";

type ProductContextType = {
    state : { products: Product[]};
    handleRemove: (id: number) => void;
    onSubmitProduct: (data: Product) => void;
    fetchProducts: () => void;
};
export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({children} : {children: React.ReactNode}) => {
    const [state, dispatch] = useReducer(productReducer, {products: []});
    const fetchProducts = async () => {
        const {data} = await instance.get("/products");
        dispatch({type: "SET_PRODUCTS", payload: data});
    }
    
    const handleRemove = async (id: number) => {
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
            await instance.delete(`/products/${id}`);
            alert("Xóa thành công");
            dispatch({type: "DELETE_PRODUCT", payload: id});
        }
    }
    const onSubmitProduct = async (data: Product) => {
       try{
         if(data.id ){
            await instance.patch(`/products/${data.id}`, data);
            dispatch({type: "UPDATE_PRODUCT", payload: data});
        }else{
            await instance.post(`/products`, data);
            dispatch({type: "ADD_PRODUCT", payload: data});
        }

       }catch(err){
        console.log(err);
        }
    }
    return(
    <ProductContext.Provider value={{state, handleRemove, onSubmitProduct, fetchProducts}}>
        {children}
    </ProductContext.Provider>
        )
}