import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const productSchema = z.object({
  title: z.string(),
  price: z.number().min(1000, "Giá phải lớn hơn hoặc bằng 1000 VNĐ"),
  category: z.enum(["ao", "quan", "giay"],{message: "Danh mục không hợp lệ"}),
  description: z.string().optional(),
})
type ProductForm = z.infer<typeof productSchema>;
const EditProduct = () => {
  const {id}= useParams();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ProductForm>({
    resolver: zodResolver(productSchema)
  });
  const nav = useNavigate();
  useEffect(() =>{
    const fetchProduct = async () => {
      const res = await axios.get(`http://localhost:3000/products/${id}`);
      // Đảm bảo price là số
      reset(res.data);
      
    }
    fetchProduct();

  },[id, reset])
  const onSubmit = async (data: ProductForm) => {
    try{
      const res = await axios.put(`http://localhost:3000/products/${id}`, data);
      if(res.status === 200){
        alert(" add product successfully");
        nav("/admin/products");
      }
    }catch(err){
      alert("Failed to add product");
      console.log(err);
    }
  }
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">🛍️ Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Tên sản phẩm */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700" >Tên sản phẩm</label>
          <input
          {...register("title")}
            type="text"
            name="title"
            placeholder="Nhập tên sản phẩm"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required

          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

        {/* Giá */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Giá (VNĐ)</label>
          <input
          {...register("price", { valueAsNumber: true })}
            type="number"
            name="price"
            placeholder="Nhập giá sản phẩm"
            
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
        </div>

        {/* Danh mục */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Danh mục</label>
          <select
          {...register("category")}
            name="category"
            
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="ao">Áo</option>
            <option value="quan">Quần</option>
            <option value="giay">Giày</option>
          </select>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        {/* Mô tả */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Mô tả sản phẩm</label>
          <textarea
          {...register("description")}
            name="description"
            placeholder="Nhập mô tả sản phẩm..."
            
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

        </div>

        {/* Ảnh */}
        {/* <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">URL ảnh</label>
          <input
          {...register("image")}
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div> */}

        {/* Preview ảnh */}
        {/*formData.image && (
          <div className="mt-4">
            <p className="text-sm text-gray-600 mb-2">📸 Xem trước ảnh:</p>
            <img
              src={formData.image}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* Nút submit */}
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          🛍️ Edit Product
        </button>
      </form>
    </div>
  );
}

export default EditProduct  
