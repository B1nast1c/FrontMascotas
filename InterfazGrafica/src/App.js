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
      </Routes>
    </Router>
  );
}

export default App;
