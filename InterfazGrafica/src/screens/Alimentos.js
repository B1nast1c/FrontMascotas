import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Productos } from '../components/Home/Productos'


//Alimentos es la categoría 1
export const Alimentos = () => {
    return (
        <div>
            <Header />
            <Productos categoria={1} />
            <Footer />
        </div>
    )
}
