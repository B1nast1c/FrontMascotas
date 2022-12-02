import React from 'react'
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Categoría</h1>
                <Link to="/admin/usuarios">
                    <button className="userAddButton update-category-btn">Confirmar</button>
                </Link>
            </div>
            <div className="userContainer category-container">
                <div className="userUpdate category-container">
                    <span className="userUpdateTitle">Editar Información</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="userUpdateInput"
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Detalles</label>
                                <input
                                    type="text"
                                    placeholder="Detalles"
                                    className="userUpdateInput"
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category