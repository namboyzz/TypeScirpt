import { Link, useLocation } from "react-router-dom";

 function Sidebar() {
  const { pathname } = useLocation();
  const linkClass = (path: string) =>
    `block px-4 py-2 rounded-lg font-medium ${
      pathname === path
        ? "bg-blue-600 text-white"
        : "text-gray-700 hover:bg-blue-100"
    }`;

  return (
    <aside className="w-64 bg-white shadow-lg h-screen fixed top-0 left-0 flex flex-col">
      <div className="px-6 py-4 text-2xl font-bold text-blue-600 border-b">
        🛠️ Admin
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <Link to="/admin" className={linkClass("/admin")}>
          📊 Dashboard
        </Link>
        <Link to="/admin/products" className={linkClass("/admin/products")}>
          📦 Quản lý sản phẩm
        </Link>
        <Link to="/admin/users" className={linkClass("/admin/users")}>
          👤 Quản lý người dùng
        </Link>
        <Link to="/admin/orders" className={linkClass("/admin/orders")}>
          🧾 Quản lý đơn hàng
        </Link>
      </nav>
      <div className="px-6 py-4 border-t text-sm text-gray-500">
        © 2025 Admin Panel
      </div>
    </aside>
  );
}

export default Sidebar;