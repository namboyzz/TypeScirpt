
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductForm from './pages/admin/ProductForm'
import FormCreateProduct from './pages/admin/FormCreateProduct'
import Home from './pages/client/Home'
import MainLayout from './layout/MainLayout'
import Products from './pages/client/Products'

function App() {
  return (
    <>
    <Routes>
      <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Route>
      <Route path='/admin/products' element={<ProductForm/>}/>
      <Route path='/admin/products/create' element={<FormCreateProduct/>}/>
    </Routes>
    </>
  )
}

export default App
