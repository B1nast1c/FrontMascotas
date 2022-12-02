import React from 'react'
import AddProduct from '../components/Admin/Productos/CreateProduct'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminProductoCrear = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <AddProduct />
            </div>
        </div>
    )
}

export default AdminProductoCrear