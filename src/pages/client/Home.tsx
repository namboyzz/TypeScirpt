import { useEffect, useState } from "react";
import type { Product } from "../../interface/products";
import axios from "axios";

 function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products');
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProducts();
    }, []);
  return (
    <div className="space-y-16">
      {/* Banner */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center py-24 rounded-lg shadow-md">
        <h1 className="text-5xl font-bold mb-4">Chào mừng đến với MyShop 🛍️</h1>
        <p className="text-lg mb-6">Khám phá sản phẩm chất lượng với giá cực tốt!</p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-full hover:bg-blue-100 transition">
          Mua sắm ngay
        </button>
      </section>

      {/* Thanh tìm kiếm */}
      <section className="flex justify-center">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full md:w-1/2 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
        />
      </section>

      {/* Danh mục */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Danh mục nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Thời trang", "Điện tử", "Phụ kiện", "Đồ gia dụng"].map((category) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow hover:shadow-lg transition text-center py-8 cursor-pointer hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-xl font-semibold">{category}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Sản phẩm nổi bật */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-center hover:-translate-y-1"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-blue-600 font-bold mb-3">{product.price}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default Home;
