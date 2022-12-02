import React from 'react'
import './styles/sidebar.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from '@fortawesome/free-regular-svg-icons';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Gestión</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className="sidebarListItem active">
                                <FontAwesomeIcon className="sidebarIcon" icon={faHome} />
                                Home
                            </li>
                        </Link>
                        <Link to="/admin/usuarios" className='link'>
                            <li className="sidebarListItem active">
                                <FontAwesomeIcon className="sidebarIcon" icon={faUser} />
                                Usuarios
                            </li>
                        </Link>
                        <Link to="/admin/categorias" className='link'>
                            <li className="sidebarListItem active">
                                <FontAwesomeIcon className="sidebarIcon" icon={faListAlt} />
                                Categorías
                            </li>
                        </Link>
                        <Link to="/admin/productos" className="Link">
                            <li className="sidebarListItem active">
                                <FontAwesomeIcon className="sidebarIcon" icon={faBasketShopping} />
                                Productos
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Sidebar