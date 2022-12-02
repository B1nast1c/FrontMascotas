import React from 'react'
import Sidebar from '../components/Sidebar'
import TopbarAdmin from '../components/TopbarAdmin'
import Adduser from '../components/Admin/Users/Createuser'

const Createuser = () => {
    return (
        <div>
            <TopbarAdmin />
            <div className='layout'>
                <Sidebar />
                <Adduser />
            </div>
        </div>
    )
}

export default Createuser