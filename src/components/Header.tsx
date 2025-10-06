import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🛍️ MyShop
        </Link>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Trang chủ</Link>
          <Link to="/products" className="hover:text-blue-600 transition">Sản phẩm</Link>
          <Link to="/auth" className="hover:text-blue-600 transition">Đăng nhập</Link>
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
          <Link to="/login" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Đăng nhập</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="block hover:text-blue-600">Đăng ký</Link>
        </div>
      )}
    </header>
  );
}
