import { faBookOpenReader, faCalendar, faMailForward, faMobilePhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/user.css'

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Usuario</h1>
                <Link to="/admin/usuarios">
                    <button className="userAddButton">Confirmar</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://pm1.narvii.com/8148/d996aa73fec3a5b961832dc864344cc5a0a5751cr1-1440-1080v2_hq.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Nombres y Apellidos</span>
                            <span className="userShowUserTitle">Usuario</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles de la Cuenta</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faBookOpenReader} className="userShowIcon" />
                            <span className="userShowInfoTitle">Usuario</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faCalendar} className="userShowIcon" />
                            <span className="userShowInfoTitle">Edad</span>
                        </div>
                        <span className="userShowTitle">Detalles de Contacto</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMobilePhone} className="userShowIcon" />
                            <span className="userShowInfoTitle">telefono</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMailForward} className="userShowIcon" />
                            <span className="userShowInfoTitle">correo</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Editar Información</span>
                    <form className="userUpdateForm">
                        <div className='user-edit'>
                            <div className='user-edit-left'>
                                <div className="userUpdateItem">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Apellido Paterno</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido"
                                        className="userUpdateInput"
                                    />
                                </div>
                            </div>
                            <div className='user-edit-right'>
                                <div className="userUpdateItem">
                                    <label>Telefono</label>
                                    <input
                                        type="text"
                                        placeholder="+1 696969"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Correo</label>
                                    <input
                                        type="text"
                                        placeholder="Correo"
                                        className="userUpdateInput"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Dirección</label>
                                    <input
                                        type="text"
                                        placeholder="Direccion"
                                        className="userUpdateInput"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User