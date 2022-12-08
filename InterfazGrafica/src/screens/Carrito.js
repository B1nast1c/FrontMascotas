import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';


//Pendiente / Obtener el precio totoal de los productos dentro del carrito
const Carrito = () => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }
    var user = localStorage.getItem("username")

    const [carrito, setCarrito] = useState([])

    const getUser = () => {
        axios.get("http://localhost:8080/usuarios/" + user, { headers: headers })
            .then(user => {
                axios
                    .get("http://localhost:8080/carrito/usuario/" + user.data.id, { headers: headers })
                    .then(userData => {
                        axios
                            .get("http://localhost:8080/carrito/" + userData.data.id + "/productos", { headers: headers })
                            .then(productsData => {
                                setCarrito(productsData.data)
                            })
                            .catch(err => console.error(err))
                    })
                    .catch(err => console.log(err))
            })

    }

    const payProducts = () => {
        if (localStorage.getItem("token") !== null) {
            //Proceso de creación del pago y redirección al login (Vaciar elementos de la bd iterando :D)
            swal("El pago se ha realizado exitosamente")
            return <redirect to="/" />
        } else {
            swal("Usted tiene que inciar sesión...")
        }
    }

    useEffect(() => {
        if (user !== null) {
            getUser()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);

    return (
        <div>
            <Header />
            <section className="padding-y bg-light">
                <div className="container">
                    <h3 className="card-title">{"Carrito de Compras"}</h3>
                    <div className="row">
                        <div className="col-md-9">
                            {
                                carrito.map((item, id) => {
                                    return (
                                        <article className="card card-body mb-3" key={id}>
                                            <div className="row gy-3 align-items-center">
                                                <div className="col-md-6">
                                                    <div className="itemside align-items-center">
                                                        <div className="aside">
                                                            <img
                                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiei5K82LxYDILOjcSDPxMpIV06_AYN56FZdRBneROuxz_Kk1Zk1T-5YOxyduPUVXxvCA&usqp=CAU'
                                                                alt=''
                                                                height="72"
                                                                width="72"
                                                                className="img-thumbnail img-sm"
                                                            />
                                                        </div>
                                                        <div className="info">
                                                            <p className="title">
                                                                {item.nombre}
                                                            </p>
                                                            <span className="text-muted"> {item.categoria.nombre} </span>
                                                        </div>
                                                    </div>
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
                                        <dd className="text-end">S/. </dd>
                                    </dl>
                                    <hr />
                                    <Link to="/" className="btn btn-primary mb-2 w-100" onClick={payProducts}>
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