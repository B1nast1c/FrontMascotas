import { faBookOpenReader, faCalendar, faMailForward, faMapSigns, faMobilePhone, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import '../../styles/user.css'
import axios from 'axios';

//Falta el PUT DEL USUARIO

const getUser = (id, setFixedData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/usuarios/" + id, { headers: headers })
        .then(data => {
            setFixedData(data.data)
            console.log(id)
        })
        .catch(err => console.error(err))

}

const User = () => {
    let { usuarioid } = useParams()
    const [data, setData] = useState({
        username: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        direccion: "",
        correo: "",
    })

    const [fixedData, setFixedData] = useState({
        username: "",
        apellidoPaterno: "",
        apellidoMaterno: "",
        edad: "",
        direccion: "",
        correo: "",
        password: "",
    })

    useEffect(() => {
        getUser(usuarioid, setFixedData)
    }, [usuarioid, setFixedData]);

    const handleInput = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }

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
                            src="https://i.pinimg.com/564x/d2/94/aa/d294aad7a18ce8f1d0a6a57fdca7f4a0.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername"> {fixedData.username + " " + fixedData.apellidoPaterno + " " + fixedData.apellidoMaterno} </span>
                            <span className="userShowUserTitle">Usuario</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles de la Cuenta</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faCalendar} className="userShowIcon" />
                            <span className="userShowInfoTitle">{fixedData.edad + " años"}</span>
                        </div>
                        <span className="userShowTitle">Detalles de Contacto</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMailForward} className="userShowIcon" />
                            <span className="userShowInfoTitle">{fixedData.correo}</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMapSigns} className="userShowIcon" />
                            <span className="userShowInfoTitle">{fixedData.direccion}</span>
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
                                        name='username'
                                        value={data.username}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Apellido Paterno</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido Paterno"
                                        className="userUpdateInput"
                                        name='apellidoPaterno'
                                        value={data.apellidoPaterno}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Apellido Materno</label>
                                    <input
                                        type="text"
                                        placeholder="Apellido Materno"
                                        className="userUpdateInput"
                                        name='apellidoMaterno'
                                        value={data.apellidoMaterno}
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div className='user-edit-right'>
                                <div className="userUpdateItem">
                                    <label>Correo</label>
                                    <input
                                        type="text"
                                        placeholder="Correo"
                                        className="userUpdateInput"
                                        name='correo'
                                        value={data.correo}
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Dirección</label>
                                    <input
                                        type="text"
                                        placeholder="Direccion"
                                        className="userUpdateInput"
                                        name='direccion'
                                        value={data.direccion}
                                        onChange={handleInput}
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