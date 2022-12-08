import React, { useState, useEffect, useCallback } from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axios from 'axios'

//Productos más destacados o random, quien sabe xd
//Este es el slider del producto


export const Carrito = ({ product }) => {
    const [img, setData] = useState()
    const [carrito, setCarrito] = useState({})
    var user = localStorage.getItem("username")

    const getImage = useCallback((setData) => {
        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }

        axios.get("http://localhost:8080/imagenes/producto/" + product.producto.id, { headers: headers })
            .then(data => {
                const string = data.data[0].dataImagen
                setData(string)
            })
    }, [product.producto.id])

    const getUser = useCallback(() => {
        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }

        axios.get("http://localhost:8080/usuarios/" + user, { headers: headers })
            .then(data => {
                axios
                    .get("http://localhost:8080/carrito/usuario/" + data.data.id, { headers: headers })
                    .then(data => setCarrito(data.data))
                    .catch(err => console.log(err))
            })
    }, [user])

    const agregarCarrito = () => {
        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }

        const productosCarrito = {
            productoR: product.producto, //Obtener carrito usuario actual 
            carritoR: carrito
        }

        axios
            .post("http://localhost:8080/carrito/añadir", productosCarrito, { headers: headers })
            .then(data => console.log(data)) //Añade lo registros a la BD 
            .catch(err => console.error(err))
    }


    useEffect(() => {
        getImage(setData)
        if (user !== null) {
            getUser()
        }
    }, [setData, user, getImage, getUser]);

    return (
        <div className="col-lg-3 col-sm-6 col-16">
            <div className="card card-product-grid">
                <div className="img-wrap" style={{ padding: "0" }}>
                    <img className='product-image' src={`data:image/jpeg;base64,${img || ''}`} alt="ImagenProducto" />
                </div>
                <div className="info-wrap">
                    <Link to="/producto" className="title" state={{ "producto": product, "imagen": img }}>
                        {product.producto.nombre}
                    </Link>
                    <div className="rating-wrap">
                        <ul className="rating-stars">
                        </ul>
                    </div>
                </div>
                <div className="bottom-wrap">
                    <button className="btn btn-primary float-end" onClick={() => agregarCarrito()}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                    <div className="price-wrap lh-sm">
                        <strong className="price"> {product.monto} </strong> <br />
                        <small className="text-muted"> {product.producto.detalles} </small>
                    </div>
                </div>
            </div>
        </div>
    )
}
