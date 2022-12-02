import React from 'react'
import Categorylist from '../components/Admin/Categorias/AdminCategorias'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminCategorias = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Categorylist />
            </div>
        </div>
    )
}

export default AdminCategorias