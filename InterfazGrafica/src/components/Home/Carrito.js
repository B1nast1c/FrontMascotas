import React from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

//Productos más destacados o random, quien sabe xd
//Este es el slider del producto

export const Carrito = () => {
    return (
        <div className="col-lg-3 col-sm-6 col-16">
            <div className="card card-product-grid">
                <div className="img-wrap" style={{ padding: "0" }}>
                    <img alt="" />
                </div>
                <div className="info-wrap">
                    <Link to="/producto" className="title">
                        Nombre Producto
                    </Link>
                    <div className="rating-wrap">
                        <ul className="rating-stars">
                            <li className="stars-active" style={{ width: "90%" }}>
                                <img alt="" />
                            </li>
                            <li>
                                <img alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottom-wrap">
                    <a href="/" className="btn btn-primary float-end">
                        {" "}
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </a>
                    <div className="price-wrap lh-sm">
                        <strong className="price"> Precio </strong> <br />
                        <small className="text-muted">Descripción</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
