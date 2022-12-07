import axios from 'axios'
import React, { useState } from 'react'
import '../../styles/user.css'

//Los admin se crean en la misma DB

const userRegister = (userData, e) => { //Elimina los datos de la localstorage
    e.preventDefault();

    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    var nacimiento = new Date(userData.f_nac)
    var edad = ~~((Date.now() - nacimiento) / (31557600000));

    const user = {
        username: userData.name,
        apellidoPaterno: userData.apellido_paterno,
        apellidoMaterno: userData.apellido_materno,
        edad: edad,
        direccion: userData.direccion,
        correo: userData.email,
        password: userData.password,
        fechaRegistro: Date.now(),
        activo: true,
        rol: {
            id: 2,
            rolNombre: "NORMAL",
        },
    }

    axios
        .post("http://localhost:8080/usuarios/", user)
        .then(data => {
            const carrito = {
                usuario: user
            }
            axios
                .post("http://localhost:8080/carrito/", carrito, { headers: headers })
                .then(data => console.log("Carrito creado", data))
                .catch(err => console.error(err))
        })
        .catch(err => console.log(err))
}

const Adduser = () => {
    const [user, setUser] = useState(
        {
            name: "",
            apellido_paterno: "",
            apellido_materno: "",
            f_nac: "",
            direccion: "",
            email: "",
            password: ""
        }
    )

    const handleInput = (event) => {
        const { name, value } = event.target
        setUser({
            ...user,
            [name]: value
        })
        console.log(user)
    }

    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nuevo Usuario</h1>
                <form className="newUserForm" onSubmit={(e) => userRegister(user, e)}>
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Mi nombre es..." name='name' onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Apellido Paterno</label>
                            <input type="text" placeholder="Apellido Paterno" name='apellido_paterno' onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Apellido Materno</label>
                            <input type="text" placeholder="Apellido Materno" name='apellido_materno' onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Fecha de Nacimiento</label>
                            <input type="date" name='f_nac' onChange={handleInput} />
                        </div>
                        <button className="newUserButton">Añadir Usuario</button>
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Dirección</label>
                            <input type="text" placeholder="Dirección" name='direccion' onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Correo</label>
                            <input type="email" placeholder="Correo" name='email' onChange={handleInput} />
                        </div>
                        <div className="newUserItem">
                            <label>Password</label>
                            <input type="password" placeholder="Contraseña" name='password' onChange={handleInput} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Adduser