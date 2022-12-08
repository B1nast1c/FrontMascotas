import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

//Alimentos es la categoría 1
export const Alimentos = () => {
    const [keyword, setKeyword] = useState("")

    return (
        <div>
            <Header keyword={setKeyword} />
            <Productos categoria={1} keyword={keyword} />
            <Footer />
        </div>
    )
}
