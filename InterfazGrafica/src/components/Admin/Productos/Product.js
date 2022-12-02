import {
    faCheck,
    faDesktopAlt,
    faListNumeric,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/product.css";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Producto</h1>
                <Link to="/admin/productos">
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
                            <span className="userShowUsername">Nombre Producto</span>
                            <span className="userShowUserTitle">Categoria</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles del Producto</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faListNumeric} className="userShowIcon" />
                            <span className="userShowInfoTitle">Cantidad</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMoneyBill} className="userShowIcon" />
                            <span className="userShowInfoTitle">Precio</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faDesktopAlt} className="userShowIcon" />
                            <span className="userShowInfoTitle">Detalles</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faCheck} className="userShowIcon" />
                            <span className="userShowInfoTitle">Disponibilidad</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Editar Información</span>
                    <form className="productUpdateForm">
                        <div className="userUpdateContent">
                            <div className="product-edit-left">
                                <div className="userUpdateItem">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        placeholder="Nombre"
                                        className="userUpdateInput product-input"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Categoria</label>
                                    <select className="product-input"></select>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Cantidad</label>
                                    <input
                                        type="number"
                                        className="userUpdateInput product-input"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Precio</label>
                                    <input
                                        type="number"
                                        placeholder="100"
                                        className="userUpdateInput product-input"
                                        min="5"
                                        max="200"
                                    />
                                </div>
                            </div>
                            <div className="product-edit-right">
                                <div className="userUpdateItem">
                                    <label>Detalles</label>
                                    <textarea className="userUpdateInput product-input" rows="10" />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Disponibilidad</label>
                                    <div className="product-input">
                                        <div className="option">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="option"
                                            />{" "}
                                            <p>Disponible</p>
                                        </div>
                                        <div className="option">
                                            <input
                                                type="radio"
                                                name="gender"
                                                className="option"
                                            />{" "}
                                            <p>No Disponible</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
