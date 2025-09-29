
const FormCreateProduct = () => {


  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">🛍️ Thêm sản phẩm mới</h2>

      <form onSubmit={} className="space-y-5">
        {/* Tên sản phẩm */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            placeholder="Nhập tên sản phẩm"
            value={}
            onChange={}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Giá */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Giá (VNĐ)</label>
          <input
            type="number"
            name="price"
            placeholder="Nhập giá sản phẩm"
            value={}
            onChange={}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
        </div>

        {/* Danh mục */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Danh mục</label>
          <select
            name="category"
            value={}
            onChange={}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          >
            <option value="">-- Chọn danh mục --</option>
            <option value="ao">Áo</option>
            <option value="quan">Quần</option>
            <option value="giay">Giày</option>
          </select>
        </div>

        {/* Mô tả */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">Mô tả sản phẩm</label>
          <textarea
            name="description"
            placeholder="Nhập mô tả sản phẩm..."
            value={}
            onChange={}
            rows={4}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Ảnh */}
        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700">URL ảnh</label>
          <input
            type="text"
            name="image"
            placeholder="https://example.com/image.jpg"
            value={}
            onChange={}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

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
          ➕ Thêm sản phẩm
        </button>
      </form>
    </div>
  );
}

export default FormCreateProduct
