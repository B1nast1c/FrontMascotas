import React from 'react'
import AdminCrearCategoria from '../components/Admin/Categorias/AdminCrearCategoria'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'
import '../components/styles/createcategory.css'

const AdminCategoriaCrear = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <AdminCrearCategoria />
            </div>
        </div>
    )
}

export default AdminCategoriaCrear