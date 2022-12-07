import React, { useState } from 'react'
import '../../styles/createproduct.css'
import axios from 'axios';



const createProduct = (producto) => {
    const token = localStorage.getItem("token")

    console.log(token)
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    const newProducto = {
        productoR:{
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            detalles: producto.detalles,
            disponible: producto.disponible,
            categoria: {
                id: producto.categoria
            }
        },
        precioR:{
            precio: producto.precio,
            descuento: producto.descuento
        }
    }

    axios
        .post("http://localhost:8080/productos/", newProducto, { headers: headers })
        .then(data => console.log(data))
        .catch(err => console.error(err))

}

const AddProduct = () => {
    const [producto, setproducto] = useState(
        {
            nombre: "",
            cantidad: "",
            detalles: "",
            disponible: "true",
            categoria: "",
            precio: "",
            descuento: ""
        }

    )

    const handleInput = (event) => {
        const { name, value } = event.target
        setproducto({
            ...producto,
            [name]: value
        })
    }


    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nuevo Producto</h1>
                <form className="newUserForm" onSubmit={(e) => createProduct(producto)}>
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Mi nombre es..." name='nombre' value={producto.nombre || ''} onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Categoría</label>
                            <select></select>
                        </div>
                        <div className="newUserItem">
                            <label>Cantidad</label>
                            <input type="number" min="5" max="500" name='cantidad' value={producto.cantidad || ''} onChange={handleInput}/>
                        </div>
                        <div className="newUserItem">
                            <label>Precio</label>
                            <input type="number" min="5" max="500" name='precio' value={producto.precio || ''} onChange={handleInput}/>
                        </div>
                        <button className="newUserButton">Añadir Producto</button>
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Detalles</label>
                            <textarea rows="4" />
                            <input type="text" name='detalles' value={producto.detalles || ''} onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Disponibilidad</label>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                name="gender"
                                className="option"
                            />{" "}
                            <p>Disponible</p>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                name="gender"
                                className="option"
                            />{" "}
                            <p>No Disponible</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct