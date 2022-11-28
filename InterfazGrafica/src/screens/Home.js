import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MainHeader from '../components/Home/MainHeader'
import { Productos } from '../components/Home/Productos'
import Recomendacion from '../components/Home/Recomendacion'

function Home() {
    return (
        <div>
            <Header />
            <div>
                <MainHeader />
                <section className="padding-y bg-light">
                    <Productos />
                    <Recomendacion />
                </section>
            </div>
            <Footer />
        </div>
    )
}

export default Home