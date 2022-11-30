import React from 'react'
import Widgetizquierda from './Widgetizquierda'
import '../styles/adminhome.css'
import Sidebar from '../Sidebar'
import Widgetderecha from './Widgetderecha'
import Chart from './Chart'
import { userData } from "../scripts/data";

const Adminhome = () => {
    return (
        <div className="layout">
            <Sidebar />
            <div className="home">
                <Chart data={userData} title="Estadísticas de Usuarios" grid dataKey="Active User" />
                <div className="homeWidgets">
                    <Widgetizquierda />
                    <Widgetderecha />
                </div>
            </div>
        </div>
    )
}

export default Adminhome