import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div class="wrapper d-flex align-items-stretch">
            <nav id="sidebar">
                <div class="p-4 pt-5">
                    <h1>
                        <Link to="/">
                            <FontAwesomeIcon className="logo sidebar-logo" icon={faDog} />
                        </Link>
                    </h1>
                    <ul class="list-unstyled components mb-5">
                        <li class="active">
                            <Link to="/admin">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin">Usuarios</Link>
                        </li>
                        <li>
                            <Link to="/admin">Productos</Link>
                        </li>
                        <li>
                            <Link to="/admin">Compras</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div id="content" class="p-4 p-md-5 pt-5">
                <h2 class="mb-4">Titulo del Panel</h2>
            </div>
        </div>
    )
}

export default Sidebar