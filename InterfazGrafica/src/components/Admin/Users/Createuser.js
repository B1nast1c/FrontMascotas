import React from 'react'
import '../../styles/user.css'

const Adduser = () => {
    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nuevo Usuario</h1>
                <form className="newUserForm">
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Mi nombre es..." />
                        </div>
                        <div className="newUserItem">
                            <label>Apellido Paterno</label>
                            <input type="text" placeholder="Apellido Paterno" />
                        </div>
                        <div className="newUserItem">
                            <label>Apellido Materno</label>
                            <input type="email" placeholder="Apellido Materno" />
                        </div>
                        <div className="newUserItem">
                            <label>Fecha de Nacimiento</label>
                            <input type="date" />
                        </div>
                        <button className="newUserButton">Añadir Usuario</button>
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Dirección</label>
                            <input type="text" placeholder="Dirección" />
                        </div>
                        <div className="newUserItem">
                            <label>Correo</label>
                            <input type="email" placeholder="Correo" />
                        </div>
                        <div className="newUserItem">
                            <label>Password</label>
                            <input type="password" placeholder="Contraseña" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Adduser