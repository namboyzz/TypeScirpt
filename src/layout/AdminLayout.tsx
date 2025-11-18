import { Outlet } from "react-router-dom";
import Sidebar from "../pages/admin/SideBar";

export default function AdminLayout() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (!user || user.role !== "admin") {
    alert("Bạn không có quyền truy cập trang này");
    return null;
  }
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <main className="flex-1 ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
