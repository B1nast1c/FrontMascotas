import React from 'react'
import '../../styles/createproduct.css'

const AddProduct = () => {
    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nuevo Producto</h1>
                <form className="newUserForm">
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Mi nombre es..." />
                        </div>
                        <div className="newUserItem">
                            <label>Categoría</label>
                            <select></select>
                        </div>
                        <div className="newUserItem">
                            <label>Cantidad</label>
                            <input type="number" min="5" max="500" />
                        </div>
                        <div className="newUserItem">
                            <label>Precio</label>
                            <input type="number" min="5" max="500" />
                        </div>
                        <button className="newUserButton">Añadir Producto</button>
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Detalles</label>
                            <textarea rows="4" />
                        </div>
                        <div className="newUserItem">
                            <label>Disponibilidad</label>
                        </div>
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
                </form>
            </div>
        </div>
    )
}

export default AddProduct