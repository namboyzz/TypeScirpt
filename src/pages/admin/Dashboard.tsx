export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">📊 Bảng điều khiển</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 mb-2">Tổng sản phẩm</h2>
          <p className="text-4xl font-bold text-blue-600">128</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 mb-2">Tổng đơn hàng</h2>
          <p className="text-4xl font-bold text-green-600">342</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <h2 className="text-gray-500 mb-2">Người dùng</h2>
          <p className="text-4xl font-bold text-purple-600">89</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">📈 Biểu đồ doanh thu (giả lập)</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          [Biểu đồ sẽ đặt ở đây sau 📊]
        </div>
      </div>
    </div>
  );
}
