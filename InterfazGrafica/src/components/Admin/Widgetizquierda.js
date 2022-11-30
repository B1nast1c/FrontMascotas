import '../styles/widgetizquierda.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeLowVision } from "@fortawesome/free-solid-svg-icons";

const Widgetizquierda = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Nuestros Administradores</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img
                        src="https://i.pinimg.com/736x/39/7a/2f/397a2f1c79ac945f5d08b0039f82ab08.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nombre del Admin</span>
                        <span className="widgetSmUserTitle">Administrador</span>
                    </div>
                    <button className="widgetSmButton">
                        <FontAwesomeIcon icon={faEyeLowVision} className="widgetSmIcon" />
                        Visualizar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img
                        src="https://i.pinimg.com/736x/39/7a/2f/397a2f1c79ac945f5d08b0039f82ab08.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nombre del Admin</span>
                        <span className="widgetSmUserTitle">Administrador</span>
                    </div>
                    <button className="widgetSmButton">
                        <FontAwesomeIcon icon={faEyeLowVision} className="widgetSmIcon" />
                        Visualizar
                    </button>
                </li>  <li className="widgetSmListItem">
                    <img
                        src="https://i.pinimg.com/736x/39/7a/2f/397a2f1c79ac945f5d08b0039f82ab08.jpg"
                        alt=""
                        className="widgetSmImg"
                    />
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Nombre del Admin</span>
                        <span className="widgetSmUserTitle">Administrador</span>
                    </div>
                    <button className="widgetSmButton">
                        <FontAwesomeIcon icon={faEyeLowVision} className="widgetSmIcon" />
                        Visualizar
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Widgetizquierda