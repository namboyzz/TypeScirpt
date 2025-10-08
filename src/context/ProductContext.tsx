/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import type { Product } from "../interface/products";
import { useEffect, useState } from "react";
import axios from "axios";

type ProductContextType = {
    products: Product[];
    handleRemove: (id: number) => void;
    onSubmitProduct: (data: Product) => void;
    fetchProducts: () => Promise<void>;

};
export const ProductContext = createContext<ProductContextType>({} as ProductContextType);

export const ProductProvider = ({children} : {children: React.ReactNode}) => {
    const [products, setProducts] = useState<Product[]>([]);
    const fetchProducts = async () => {
            const {data} = await axios.get(`http://localhost:3000/products`);
            setProducts(data);
        }
    
    useEffect(() => {
        fetchProducts();
    },[]);
    const handleRemove = async (id: number) => {
        if(confirm("Bạn có chắc chắn muốn xóa không?")){
            await axios.delete(`http://localhost:3000/products/${id}`);
            setProducts(prev => prev.filter(item => item.id !== id));
        }
    }
    const onSubmitProduct = async (data: Product) => {
       try{
         if(data.id ){
            await axios.patch(`http://localhost:3000/products/${data.id}`, data);
        }else{
            await axios.post(`http://localhost:3000/products`, data);
        }
        await fetchProducts();

       }catch(err){
        console.log(err);
        }
    }
    return(
    <ProductContext.Provider value={{products, handleRemove, onSubmitProduct, fetchProducts}}>
        {children}
    </ProductContext.Provider>
        )
}