import { useEffect, useState } from "react";
import type { Product } from "../../interface/products";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductForm = () => {
    const [products, setProducts] = useState<Product[]>([]);

   useEffect(() =>{
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products');
            setProducts(response.data.products);
        } catch (error) {
            console.error(error);
        }
    }
    fetchProducts();
   },[])
   const handleDelete = async (id: number) => {
       if(confirm("Are you sure to delete this product?")){
        try{
            const res = await axios.delete(`http://localhost:3000/products/${id}`);
            if(res.status === 200){
                setProducts(products.filter(product => product.id !== id));
                alert("Product deleted successfully");
            }
        }catch(error){
            console.error(error);
        }
   } 
   }

  return (
    <>
        <div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Des
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {products.map((product)=>(
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {product.title}
                </th>
                <td className="px-6 py-4">
                    {product.description}
                </td>
                <td className="px-6 py-4">
                    {product.category}
                </td>
                <td className="px-6 py-4">
                    {product.price}
                </td>
                <td className="px-6 py-4">
                    <Link to={`/admin/products/${product.id}`} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Edit</Link>
                    <button onClick={()=> handleDelete( product.id)} type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
                </td>
            </tr>
            ))}
            
        </tbody>
    </table>
        </div>
    </>
  )
}

export default ProductForm
