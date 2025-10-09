import { useEffect, useState } from "react";
import type { Product } from "../../interface/products";
import axios from "axios";

 function Products() {
    const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(""); // "asc" | "desc" | ""

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

  // Lọc sản phẩm
  let filtered = products.filter(product =>
    product.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? product.category === category : true)
  );
  if (price === "asc") {
    filtered = filtered.slice().sort((a, b) => a.price - b.price);
  }
  if (price === "desc") {
    filtered = filtered.slice().sort((a, b) => b.price - a.price);
  }

  // Lấy danh sách danh mục duy nhất
  const categories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="space-y-16">
      

      {/* Thanh tìm kiếm & bộ lọc */}
      <section className="flex flex-col md:flex-row gap-4 justify-center items-center">
        <input
          type="text"
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full md:w-1/3 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none shadow-sm"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select
          className="px-4 py-3 rounded-full border border-gray-300"
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Tất cả danh mục</option>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          className="px-4 py-3 rounded-full border border-gray-300"
          value={price}
          onChange={e => setPrice(e.target.value)}
        >
          <option value="">Sắp xếp giá</option>
          <option value="asc">Giá tăng dần</option>
          <option value="desc">Giá giảm dần</option>
        </select>
      </section>

      {/* Danh mục */}
      

      {/* Sản phẩm nổi bật */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filtered.map((product) => (
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
export default Products;
