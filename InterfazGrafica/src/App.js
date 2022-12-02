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
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/usuarios" element={<Adminusers />} />
        <Route path="/admin/usuario/:usuarioid" element={<AdminUserScreen />} />
        <Route path="/admin/usuarios/crear" element={<AdminCreateuser />} />
        <Route path="/admin/categorias" element={<AdminCategorias />} />
        <Route path="/admin/categoria/:categoriaid" element={<AdminCategoriaEditar />} />
        <Route path="/admin/categorias/crear" element={<AdminCategoriaCrear />} />
      </Routes>
    </Router>
  );
}

export default App;
