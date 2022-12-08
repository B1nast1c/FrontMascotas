import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'

export const Higiene = () => {
    const [keyword, setKeyword] = useState("")

    return (
        <div>
            <Header keyword={setKeyword} />
            <Productos categoria={4} keyword={keyword} />
            <Footer />
        </div>
    )
}
