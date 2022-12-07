import React, { useState, useEffect } from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';
import axios from 'axios'

//Productos más destacados o random, quien sabe xd
//Este es el slider del producto

export const Carrito = ({ product }) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    const [img, setData] = useState()

    const getImage = (setData) => {
        axios.get("http://localhost:8080/imagenes/producto/" + product.producto.id, { headers: headers })
            .then(data => {
                const string = data.data[0].dataImagen
                setData(string)
            })
    }

    const agregarCarrito = () => {

    }


    useEffect(() => {
        getImage(setData)
    }, [setData]);

    return (
        <div className="col-lg-3 col-sm-6 col-16">
            <div className="card card-product-grid">
                <div className="img-wrap" style={{ padding: "0" }}>
                    <img className='product-image' src={`data:image/jpeg;base64,${img}`} alt="ImagenProducto" />
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
