import React from 'react'
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <section className="bg-white border-bottom">
            <div className="container">
                <div className="row align-items-center" style={{ minHeight: "520px" }}>
                    <div className="col-lg-6 order-lg-1">
                    </div>
                    <div className="col-lg-6 main-header">
                        <article className="my-5 ms-lg-5">
                            <h1 className="display-4">
                                Tus marcas favoritas están en <br />
                                AnimalKart
                            </h1>
                            <p className="lead">Tu tienda de mascotas favorita</p>
                            <Link
                                to="/juguetes"
                                className="btn btn-primary btn-lg"
                                style={{ marginLeft: "0.2rem" }}
                            >
                                {" "}¡Quiero ver sus productos!{" "}
                            </Link>
                        </article>
                        <article className="my-5 ms-lg-5">
                            <img src='https://i.postimg.cc/L40mGdc6/brown-dog-cartoon-free-vector-removebg-preview.png' alt='Perro' />
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainHeader