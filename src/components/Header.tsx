import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);

  // Lấy user từ localStorage
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null;

  const handleUserClick = () => {
    setUserDropdown((prev) => !prev);
    if (!user) {
      // Nếu chưa đăng nhập thì mở dropdown đăng nhập
      setUserDropdown(true);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🛍️ MyShop
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium items-center">
          <Link to="/" className="hover:text-blue-600 transition">Trang chủ</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Sản phẩm</Link>
          <Link to="/blog" className="hover:text-blue-600 transition">Blog</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Liên hệ</Link>
          {/* Icon giỏ hàng */}
          <Link to="/cart" className="text-2xl hover:text-blue-600 transition ml-2">🛒</Link>
          {/* Icon user */}
          <div className="relative">
            <button
              className="text-2xl hover:text-blue-600 transition ml-2"
              onClick={handleUserClick}
            >
              👤
            </button>
            {/* Dropdown user info hoặc đăng nhập */}
            {userDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                {!user ? (
                  <Link
                    to="/auth"
                    className="block px-4 py-2 hover:bg-gray-100 text-blue-600 font-semibold"
                    onClick={() => setUserDropdown(false)}
                  >
                    Đăng nhập
                  </Link>
                ) : (
                  <>
                    <div className="px-4 py-2 border-b">
                      <div className="font-semibold">{user.name}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </div>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserDropdown(false)}
                    >
                      Thông tin tài khoản
                    </Link>
                    <Link
                      to="/orders"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserDropdown(false)}
                    >
                      Đơn hàng của tôi
                    </Link>
                    <Link
                      to="/change-password"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={() => setUserDropdown(false)}
                    >
                      Đổi mật khẩu
                    </Link>
                    <button
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
                    >
                      Đăng xuất
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Nút menu mobile */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-inner px-6 pb-4 space-y-3 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Trang chủ</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Sản phẩm</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Blog</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Liên hệ</Link>
          <span className="block text-2xl mt-2">🛒
            <button
              className="ml-2"
              onClick={handleUserClick}
              style={{ background: "none", border: "none" }}
            >
              👤
            </button>
          </span>
        </div>
      )}
    </header>
  );
}
