import '../styles/widgetizquierda.css'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const getAdmins = (setData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/usuarios/rol/1", { headers: headers }) //Editar usuarios normales SOLAMENTE
        .then(data => {
            setData(data.data) //Filtra si se encuentra activo XD
        })
        .catch(err => console.error(err))

}

const Widgetizquierda = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAdmins(setData)
    }, [setData]);

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Nuestros Administradores</span>
            <ul className="widgetSmList">
                {
                    data.map(admin => (
                        <li className="widgetSmListItem">
                            <img
                                src="https://i.pinimg.com/736x/39/7a/2f/397a2f1c79ac945f5d08b0039f82ab08.jpg"
                                alt=""
                                className="widgetSmImg"
                            />
                            <div className="widgetSmUser">
                                <span className="widgetSmUsername">{admin.username + " " + admin.apellidoPaterno}</span>
                                <span className="widgetSmUserTitle">Administrador</span>
                            </div>
                            <button className="widgetSmButton">
                                <FontAwesomeIcon icon={faEyeLowVision} className="widgetSmIcon" />
                                Visualizar
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Widgetizquierda