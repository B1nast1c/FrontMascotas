import React from 'react'
import { Carrito } from './Carrito';

export const Productos = () => {
    const newProducts = [0, 0, 0, 0, 0, 0, 0, 0];
    return (
        <section class="padding-y bg-light">
            <div className="container">
                <div className="row">
                    {newProducts.map((product) => (
                        <Carrito />
                    ))}
                </div>
            </div>
        </section>
    )
}
