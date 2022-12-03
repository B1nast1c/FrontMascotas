import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from './screens/Home';
import { Alimentos } from './screens/Alimentos';
import { AccesoriosHogar } from './screens/AccesoriosHogar';
import { AccesoriosExterior } from './screens/AccesoriosExterior';
import { Higiene } from './screens/Higiene';
import { Juguetes } from './screens/Juguetes';
import { Register } from './screens/Register';
import Producto from './screens/Producto';
import Carrito from './screens/Carrito';
import AdminDashboard from './screens/AdminDashboard';
import Adminusers from './screens/Adminusers';
import AdminUserScreen from './screens/AdminUserScreen';
import AdminCreateuser from './screens/AdminCreateuser';
import AdminCategorias from './screens/AdminCategorias';
import AdminCategoriaEditar from './screens/AdminCategoriaEditar';
import AdminCategoriaCrear from './screens/AdminCategoriaCrear';
import AdminProductos from './screens/AdminProductos';
import AdminProductoEditar from './screens/AdminProductoEditar';
import AdminProductoCrear from './screens/AdminProductoCrear';
import UserProfile from './screens/UserProfile';
import ProtectedRoute from './components/scripts/ProtectedRoute';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alimentos" element={<Alimentos />} />
        <Route path="/hogar" element={<AccesoriosHogar />} />
        <Route path="/exteriores" element={<AccesoriosExterior />} />
        <Route path="/higiene-bienestar" element={<Higiene />} />
        <Route path="/juguetes" element={<Juguetes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producto" element={<Producto />} />
        <Route exact path="/carrito" element={<Carrito />} />
        <Route exact path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route exact path="/admin/usuarios" element={<ProtectedRoute><Adminusers /></ProtectedRoute>} /> //Rutas protegidas por autenticacion
        <Route exact path="/admin/usuario/:usuarioid" element={<ProtectedRoute><AdminUserScreen /></ProtectedRoute>} />
        <Route exact path="/admin/usuarios/crear" element={<ProtectedRoute><AdminCreateuser /></ProtectedRoute>} />
        <Route exact path="/admin/categorias" element={<ProtectedRoute><AdminCategorias /></ProtectedRoute>} />
        <Route exact path="/admin/categoria/:categoriaid" element={<ProtectedRoute><AdminCategoriaEditar /></ProtectedRoute>} />
        <Route exact path="/admin/categorias/crear" element={<ProtectedRoute><AdminCategoriaCrear /></ProtectedRoute>} />
        <Route exact path="/admin/productos" element={<ProtectedRoute><AdminProductos /></ProtectedRoute>} />
        <Route exact path="/admin/producto/:categoriaid" element={<ProtectedRoute><AdminProductoEditar /></ProtectedRoute>} />
        <Route exact path="/admin/productos/crear" element={<ProtectedRoute><AdminProductoCrear /></ProtectedRoute>} />
        <Route exact path="/perfil" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
