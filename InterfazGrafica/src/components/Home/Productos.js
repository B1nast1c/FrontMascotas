import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Carrito } from './Carrito'
import { Filter } from '../Filter'

export const Productos = ({ categoria }) => {
    const [arr, setData] = useState([]);

    const getProducts = (setData) => {
        if (categoria !== 0) {
            axios
                .get("http://localhost:8080/productos/categoria/" + categoria) //Editar usuarios normales SOLAMENTE
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
                    let array = data.data
                    if (array.length > 8) {
                        array = data.data.slice(0, 8) //Recorta 8 elementos solo si es mayor                        
                    }
                    setData(array)
                })
                .catch(err => console.log(err))
        }
    }

    useEffect(() => {
        getProducts(setData)
    }, [setData]);

    //Obtener todos los productos dentro de la base de dato
    return (
        <section className="padding-y bg-light" >
            <Filter />
            <div className="container">
                <div className="row">
                    {arr.map((product) => {
                        return <Carrito product={product} key={product.producto.id} />
                    }
                    )
                    }
                </div>
            </div>
        </section >
    )
}
