import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faDog, faBroom } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import axios from 'axios'
import React, { Component, useEffect, useState } from 'react'


//Inicio Petición Login 
const userLogout = () => { //Elimina los datos de la localstorage
    localStorage.clear()
    window.location.reload()
}

const userLogin = (username, password, e) => {
    const loginData = {
        username: username,
        password: password
    }


    axios.post("http://localhost:8080/generate-token", loginData)
        .then(data => {
            localStorage.setItem("token", "Bearer ".concat(data.data.token)) // El token debe empezar con Bearer (espacio) >:v
            localStorage.setItem("username", username.replace(/["]+/g, ''))
        })
        .catch(
            err => console.log(err)
        )
    // window.location.reload()
}


const getUserInfor = () => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios.get("http://localhost:8080/actual-usuario", { headers: headers }) //Obtener datos de un usuario
        .then(data => {
            localStorage.setItem("rol", data.data.rol.id)
        })
        .catch(err => console.log(err))

}

const Header = (props) => {

    const currentUser = localStorage.getItem("username") //Datos generales de la interfaz
    const [data, setData] = useState("");
    const { keyword } = props;

    useEffect(() => {
        if (localStorage.getItem("token") != null) {
            getUserInfor()
        }
    }, []);

    const handleInput = (event) => {
        setData(event.target.value)
        keyword(data) //Global busqueda general
    }

    return (
        <div className="section-header">
            <div className="header-main border-bottom">
                <div className="container">
                    <div className="d-flex flex-nowrap align-items-center">
                        <div className="col-lg-2 col-sm-3 col-3 unzoomMobile">
                            <Link to="/">
                                <FontAwesomeIcon className="logo" icon={faDog} />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-6 unzoomMobile">
                            <form action="#" className="me-3">
                                <div className="input-group w-100">
                                    <input
                                        name="producto"
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar Productos..."
                                        style={{ width: "55%" }}
                                        value={data}
                                        onChange={handleInput}
                                    />
                                    <button onClick={() => keyword("")} className="input-group-text btn btn-primary">
                                        <FontAwesomeIcon icon={faBroom} />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-4 col-sm-3 col-3">
                            <div className="float-md-end">
                                <div className="widget-header">
                                </div>
                                <div className="widget-header dropdown">
                                    <Link
                                        className="dropdown-toggle ms-3 icontext"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        <div className="icon">
                                            <FontAwesomeIcon icon={faUser} />
                                        </div>
                                        <div className="text d-none d-lg-block">
                                            <small className="text-muted">Bienvenido </small> <br />
                                            <span className="text-dark">{currentUser}</span>
                                        </div>
                                    </Link>
                                    <Logout />
                                    <Dropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar navbar-light bg-white navbar-expand-lg border-bottom">
                <div className="container">
                    <button
                        className="navbar-toggler border"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbar_main6"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"> </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar_main6">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/alimentos">
                                    Alimentos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/hogar">
                                    Accesorios para el hogar
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/exteriores">
                                    Accesorios para exteriores
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/higiene-bienestar">
                                    Higiene y Bienestar
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/juguetes">
                                    Juguetes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Logout extends Component {
    render() {
        return (
            <div>
                {
                    localStorage.getItem("username") != null ? (
                        <button className="logout-button" onClick={() => userLogout()}>Cerrar Sesion</button>
                    ) : null
                }
            </div>
        )
    }
}

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput = (event) => {
        const { name, value } = event.target
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    render() {
        return (
            <div>
                {
                    localStorage.getItem("username") === null ? (
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <form className="px-4 py-3">
                                    <div className="mb-3">
                                        <label className="form-label">Nombre de Usuario</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Usuario"
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                            name="username"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">Contraseña</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            placeholder="Contraseña"
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            name="password"
                                        />
                                    </div>
                                    <div>
                                        <button className="form-submit login-btn" onClick={(e) => {
                                            userLogin(this.state.username, this.state.password, e)
                                        }
                                        }>Ingresar</button>
                                    </div>
                                </form>
                            </li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>
                                <a className="dropdown-item" href="/register">
                                    ¿Primera vez?, ¡Registrate!
                                </a>
                            </li>
                        </ul>
                    ) : localStorage.getItem("rol") === 2 ? (
                        <ul className="dropdown-menu dropdown-menu-end">
                            <Link to="/perfil">
                                <li>
                                    <p className="dropdown-item profile-item">
                                        Ver Perfil
                                    </p>
                                </li>
                            </Link>
                            <Link to="/carrito">
                                <li>
                                    <p className="dropdown-item profile-item">
                                        Ver Carrito
                                    </p>
                                </li>
                            </Link>
                        </ul>

                    ) :
                        <ul className="dropdown-menu dropdown-menu-end">
                            <Link to="/perfil">
                                <li>
                                    <p className="dropdown-item profile-item">
                                        Ver Perfil
                                    </p>
                                </li>
                            </Link>
                            <Link to="/admin">
                                <li>
                                    <p className="dropdown-item profile-item">
                                        Panel de Administrador
                                    </p>
                                </li>
                            </Link>
                            <Link to="/carrito">
                                <li>
                                    <p className="dropdown-item profile-item">
                                        Ver Carrito
                                    </p>
                                </li>
                            </Link>
                        </ul>
                }
            </div>
        )
    }
}


export default Header

