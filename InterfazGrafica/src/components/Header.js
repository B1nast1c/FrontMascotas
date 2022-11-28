import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faDog } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import React from 'react'

const Header = () => {
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
                                        type="text"
                                        className="form-control"
                                        placeholder="Buscar Productos..."
                                        style={{ width: "55%" }}
                                    />
                                    <button className="input-group-text btn btn-primary">
                                        <FontAwesomeIcon icon={faSearch} />
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
                                            <span className="text-dark">Usuario... </span>
                                        </div>
                                    </Link>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <form className="px-4 py-3">
                                                <div className="mb-3">
                                                    <label className="form-label">Nombre de Usuario</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Usuario"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="form-label">Contraseña</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Contraseña"
                                                    />
                                                </div>
                                                <div>
                                                    <button className="form-submit">Ingresar</button>
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

export default Header

