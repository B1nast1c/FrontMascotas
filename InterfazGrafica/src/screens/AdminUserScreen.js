import React from 'react'
import User from '../components/Admin/Users/User'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const AdminUserScreen = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <User />
            </div>
        </div>
    )
}

export default AdminUserScreen