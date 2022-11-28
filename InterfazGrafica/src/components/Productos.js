import React from 'react'
import Filter from './Filter';
import { Carrito } from './Home/Carrito';

//Faltan pasar props al componente y renderizarlos uwu
const Productos = () => {
    const newProducts = [0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <div className="small-container">
            <Filter />
            <div className="row">
                {newProducts.map((product) => (
                    <Carrito />
                ))}
            </div>
        </div>
    )
}

export default Productos