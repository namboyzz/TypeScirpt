
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductForm from './pages/admin/ProductForm'

function App() {
  return (
    <>
    <Routes>
      <Route path='/admin/products' element={<ProductForm/>}/>
    </Routes>
    </>
  )
}

export default App
