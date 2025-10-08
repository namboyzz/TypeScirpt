import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// 🧪 Schema đăng ký
const registerSchema = z.object({
  name: z.string().min(3, "Tên phải có ít nhất 3 ký tự"),
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

// 🧪 Schema đăng nhập
const loginSchema = z.object({
  email: z.string().email("Email không hợp lệ"),
  password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

type RegisterFormData = z.infer<typeof registerSchema>;
type LoginFormData = z.infer<typeof loginSchema>;

const Auth = () => {
  const nav = useNavigate();
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  // Form đăng ký
  const {
    register: registerRegister,
    handleSubmit: handleSubmitRegister,
    formState: { errors: registerErrors },
    reset: resetRegister,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });
    

  // Form đăng nhập
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: loginErrors },
    reset: resetLogin,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // Submit đăng ký
  const onSubmitRegister = async (data: RegisterFormData) => {
    try {
      const res = await axios.post(`http://localhost:3000/users`, data);
      if (res.status === 201) {
        alert("Đăng ký thành công");
        setActiveTab("login");
      }
    }catch (err) {
      alert("Đăng ký thất bại");
      console.log(err);
    }
    resetRegister();
  };

  // Submit đăng nhập
  const onSubmitLogin = async(data: LoginFormData) => {
    try{
      const res = await axios.get(`http://localhost:3000/users?email=${data.email}`);
      if(res.data.length === 0){
        alert("Tài khoản không tồn tại");
        return;
      }
      const user = res.data[0];
      if(user.password !== data.password){
        alert("Mật khẩu không đúng");
        return;
      }
        alert("Đăng nhập thành công");
        // Lưu token vào localStorage
        localStorage.setItem("user", JSON.stringify(user));
        // Chuyển hướng về trang chủ
        nav("/");
    }catch(err){
      alert("Đăng nhập thất bại hoặc tài khoản không tồn tại");
      console.log(err);
    }
    resetLogin();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white w-full max-w-md shadow-xl rounded-2xl p-8">
        {/* Tabs */}
        <div className="flex mb-6 border-b">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-2 text-center font-semibold ${
              activeTab === "login"
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Đăng nhập
          </button>
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-2 text-center font-semibold ${
              activeTab === "register"
                ? "border-b-4 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Đăng ký
          </button>
        </div>

        {/* Form đăng nhập */}
        {activeTab === "login" && (
          <form onSubmit={handleSubmitLogin(onSubmitLogin)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...registerLogin("email")}
                placeholder="Nhập email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  loginErrors.email ? "border-red-500" : ""
                }`}
              />
              {loginErrors.email && (
                <p className="text-red-500 text-sm mt-1">{loginErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mật khẩu</label>
              <input
                type="password"
                {...registerLogin("password")}
                placeholder="Nhập mật khẩu"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  loginErrors.password ? "border-red-500" : ""
                }`}
              />
              {loginErrors.password && (
                <p className="text-red-500 text-sm mt-1">{loginErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              🔐 Đăng nhập
            </button>
          </form>
        )}

        {/* Form đăng ký */}
        {activeTab === "register" && (
          <form onSubmit={handleSubmitRegister(onSubmitRegister)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium mb-2">Họ và tên</label>
              <input
                type="text"
                {...registerRegister("name")}
                placeholder="Nhập họ tên"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  registerErrors.name ? "border-red-500" : ""
                }`}
              />
              {registerErrors.name && (
                <p className="text-red-500 text-sm mt-1">{registerErrors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                {...registerRegister("email")}
                placeholder="Nhập email"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  registerErrors.email ? "border-red-500" : ""
                }`}
              />
              {registerErrors.email && (
                <p className="text-red-500 text-sm mt-1">{registerErrors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Mật khẩu</label>
              <input
                type="password"
                {...registerRegister("password")}
                placeholder="Nhập mật khẩu"
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  registerErrors.password ? "border-red-500" : ""
                }`}
              />
              {registerErrors.password && (
                <p className="text-red-500 text-sm mt-1">{registerErrors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              📝 Đăng ký
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
