export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">🛍️ MyShop</h2>
          <p className="text-sm">
            Cửa hàng trực tuyến cung cấp sản phẩm chất lượng, giá cả hợp lý và dịch vụ tận tâm.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Liên kết</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-400">Trang chủ</a></li>
            <li><a href="/products" className="hover:text-blue-400">Sản phẩm</a></li>
            <li><a href="/login" className="hover:text-blue-400">Đăng nhập</a></li>
            <li><a href="/register" className="hover:text-blue-400">Đăng ký</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Hỗ trợ</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Chính sách bảo hành</a></li>
            <li><a href="#" className="hover:text-blue-400">Chính sách hoàn trả</a></li>
            <li><a href="#" className="hover:text-blue-400">Liên hệ hỗ trợ</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Theo dõi chúng tôi</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-blue-500">🌐</a>
            <a href="#" className="hover:text-blue-500">📘</a>
            <a href="#" className="hover:text-blue-500">📸</a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  );
}
