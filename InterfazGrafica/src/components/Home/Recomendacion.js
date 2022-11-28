import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faStar, faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const Recomendacion = () => {
    return (
        <section class="padding-y bg-light" style={{ marginTop: "1.2rem" }}>
            <div className="container">
                <h4 style={{ marginBottom: "1.2rem" }} className="card-title">
                    Elige Nuestra Tienda
                </h4>
            </div>
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-4 col-md-4">
                        <article className="card content-body">
                            <div className="text-center mx-lg-4">
                                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                                <div className="pt-3">
                                    <h5 className="title">Calidad</h5>
                                    <p className="mb-0">
                                        Nuestra tienda brinda los mejores productos de la mayor calidad, haciendo feliz a tu peludo amigo
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <article className="card content-body">
                            <div className="text-center mx-lg-4">
                                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                                    <FontAwesomeIcon icon={faThumbsUp} />
                                </span>
                                <div className="pt-3">
                                    <h5 className="title">Amados por la gente</h5>
                                    <p className="mb-0">No tenemos clientes descontentos :D</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-4">
                        <article className="card content-body">
                            <div className="text-center mx-lg-4">
                                <span className="rounded-circle text-primary icon-lg bg-primary-light">
                                    <FontAwesomeIcon icon={faBox} />
                                </span>
                                <div className="pt-3">
                                    <h5 className="title">Confiable</h5>
                                    <p className="mb-0">
                                        Todo lo que compras te será entregado, y si no, va por nuestras cuenta.
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Recomendacion