import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

export const AccesoriosExterior = () => {
    const [keyword, setKeyword] = useState("")

    return (
        <div>
            <Header keyword={setKeyword} />
            <Productos categoria={3} keyword={keyword} />
            <Footer />
        </div>
    )
}
