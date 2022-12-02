import React from 'react'
import Productlist from '../components/Admin/Productos/ProductList'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminProductos = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Productlist />
            </div>
        </div>
    )
}

export default AdminProductos