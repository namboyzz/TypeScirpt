
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductForm from './pages/admin/product/ProductForm'
import FormCreateProduct from './pages/admin/product/FormCreateProduct'
import Home from './pages/client/Home'
import MainLayout from './layout/MainLayout'
import Products from './pages/client/Products'
import AdminLayout from './layout/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import EditProduct from './pages/admin/product/EditProduct'
import Auth from './pages/Auth'
import ListUser from './pages/admin/user/ListUser'

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='/admin/products' element={<ProductForm/>}/>
          <Route path='/admin/products/add' element={<FormCreateProduct/>}/>
          <Route path='/admin/products/:id' element={<EditProduct/>}/>
          <Route path="/admin/users" element={<ListUser />} />
        </Route>
        <Route path="/auth" element={<Auth />} />
      
    </Routes>
    </>
  )
}

export default App
