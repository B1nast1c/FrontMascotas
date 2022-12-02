import React from 'react'
import Product from '../components/Admin/Productos/Product'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminProductoEditar = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Product />
            </div>
        </div>
    )
}

export default AdminProductoEditar