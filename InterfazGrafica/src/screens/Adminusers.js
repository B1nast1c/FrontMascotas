import React from 'react'
import Userlist from '../components/Admin/Users/Userlist'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'

const Adminusers = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Userlist />
            </div>
        </div>
    )

}

export default Adminusers