import React from 'react'
import Pagoslist from '../components/Admin/Pagos/PagosList'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminPagos = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Pagoslist />
            </div>
        </div>
    )
}

export default AdminPagos