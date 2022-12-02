import React from 'react'

function AdminCrearCategoria() {
    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nueva Categoria</h1>
                <form className="newUserForm">
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Nombre" />
                        </div>
                        <div className="newUserItem">
                            <label>Detalles</label>
                            <input type="text" placeholder="Detalles" />
                        </div>
                        <button className="newUserButton">Añadir Categoría</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminCrearCategoria