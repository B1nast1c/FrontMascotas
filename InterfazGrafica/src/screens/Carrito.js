import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Carrito = () => {
    const arr = [0, 0, 0]; //Array de productos en el carrito
    return (
        <div>
            <Header />
            <section className="padding-y bg-light">
                <div className="container">
                    <h3 className="card-title">{"Carrito de Compras"}</h3>
                    <div className="row">
                        <div className="col-md-9">
                            {arr.map((item) => {
                                return (
                                    <article className="card card-body mb-3">
                                        <div className="row gy-3 align-items-center">
                                            <div className="col-md-6">
                                                <p className="itemside align-items-center">
                                                    <div className="aside">
                                                        <img
                                                            alt=''
                                                            height="72"
                                                            width="72"
                                                            className="img-thumbnail img-sm"
                                                        />
                                                    </div>
                                                    <div className="info">
                                                        <p className="title">
                                                            Producto Agregado al carrito
                                                        </p>
                                                        <span className="text-muted">Categorías del producto</span>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="col text-end">
                                                <p className="btn btn-icon btn-light">
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                        <aside className="col-md-3">
                            <div className="card">
                                <div className="card-body">
                                    <dl className="dlist-align">
                                        <dt>Precio Total:</dt>
                                        <dd className="text-end">$DiositoDolares</dd>
                                    </dl>
                                    <hr />
                                    <Link href="/" className="btn btn-primary mb-2 w-100">
                                        Pagar
                                    </Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Carrito