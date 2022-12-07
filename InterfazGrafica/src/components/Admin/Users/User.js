import { faCalendar, faMailForward, faMapSigns } from '@fortawesome/free-solid-svg-icons';
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
        id: 0,
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

    const updateUser = () => {
        const updated = {
            username: fixedData.username,
            apellidoPaterno: fixedData.apellidoPaterno,
            apellidoMaterno: fixedData.apellidoMaterno,
            direccion: fixedData.direccion,
            correo: fixedData.correo,
        }

        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }

        console.log(fixedData.id)

        axios
            .put("http://localhost:8080/usuarios/" + fixedData.id, updated, { headers: headers })
            .then(data => {
                console.log(data.data) //Ver que haya modificado
            })
            .catch(err => console.error(err))

    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Usuario</h1>
                <Link to="/admin/usuarios">
                </Link>
                <button className="userAddButton" onClick={() => updateUser()}>Confirmar</button>
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
                                        placeholder={fixedData.username}
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
                                        placeholder={fixedData.apellidoPaterno}
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
                                        placeholder={fixedData.apellidoMaterno}
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
                                        placeholder={fixedData.correo}
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
                                        placeholder={fixedData.direccion}
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