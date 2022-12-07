import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Carrito } from './Carrito'
import { Filter } from '../Filter'

//Obtener todos los productos dentro de la base de datos
const getProducts = (setData, id) => {
    if (id !== 0) {
        axios
            .get("http://localhost:8080/productos/categoria/" + id) //Editar usuarios normales SOLAMENTE
            .then(data => {
                const sorted = data.data

                //Funcion de Sorting
                if (localStorage.getItem("sort") !== "-1") {
                    if (localStorage.getItem("sort") === "1") {
                        sorted.sort((a, b) => (a.name > b.monto) ? -1 : ((b.monto > a.monto) ? 1 : 0));
                        setData(sorted)
                    } else {
                        sorted.sort((a, b) => (a.name > b.monto) ? 1 : ((b.monto > a.monto) ? -1 : 0));
                        setData(sorted)
                    }
                }

                setData(sorted)
            })
            .catch(err => {
                console.log(err)
            })
    } else {
        axios
            .get("http://localhost:8080/productos/")
            .then(data => {
                setData(data.data.slice(0, 8))
                const sorted = data.data
                const cant = sorted.length
                localStorage.setItem("cantidad", cant)
            })
            .catch(err => console.log(err))
    }
}


export const Productos = ({ categoria }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProducts(setData, categoria)
    }, [setData, categoria]);

    return (
        <section className="padding-y bg-light" >
            <Filter />
            <div className="container">
                <div className="row">
                    {data.map((product) => (
                        <Carrito product={product} />
                    ))}
                </div>
            </div>
        </section >
    )
}
