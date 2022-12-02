import React from 'react'
import Category from '../components/Admin/Categorias/AdminCategoria'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'
import '../components/styles/category.css'

const AdminCategoriaEditar = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Category />
            </div>
        </div>
    )
}

export default AdminCategoriaEditar