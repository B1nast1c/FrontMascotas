import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const userRegister = (userData, navigate) => { //Elimina los datos de la localstorage

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
        }
    }

    axios
        .post("http://localhost:8080/usuarios/", user) //Creacion User
        .then(data => {
            console.log(data.data)
            const carrito = {
                usuario: user
            }
            axios
                .post("http://localhost:8080/carrito/", carrito)
                .then(data => console.log("Carrito creado", data))
                .catch(err => console.error(err))
        })
        .catch(err => console.log(err))
    navigate("/")
}


export const Register = () => {
    let navigate = useNavigate()
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
    }

    return (
        <div class="content">
            <div class="container">
                <div class="row">
                    <div class="col-md-5 mr-auto">
                        <h2 className='register-header'>Registro</h2>
                        <p class="mb-5">
                            ¡Estás a un click de distancia de hacer felices a tus mascotas,
                            y nada mejor que nuestra tienda especializada en tus amigos animales!,
                            los compañeros de tus aventuras y emociones
                        </p>
                        <img className='register-img' alt='Perro' src='https://i.postimg.cc/QxJDFY8G/chica-dibujando-su-perro-caballete-casa-ilustracion-vectorial-plana-mascota-feliz-sentada-mesa-posan.png' />
                    </div>

                    <div class="col-md-6 register-form">
                        <form class="mb-5" id="contactForm" name="contactForm" onSubmit={(e) => userRegister(user, navigate)} >
                            <div class="row">

                                <div class="col-md-12 form-group">
                                    <label for="name" class="col-form-label">Nombre</label>
                                    <input type="text" class="form-control" name="name" id="name" value={user.name || ''} onChange={handleInput} />
                                    <label for="apellido-paterno" class="col-form-label">Apellido Paterno</label>
                                    <input type="text" class="form-control" name="apellido_paterno" id="a-paterno" value={user.apellido_paterno || ''} onChange={handleInput} />
                                    <label for="apellido-materno" class="col-form-label">Apellido Materno</label>
                                    <input type="text" class="form-control" name="apellido_materno" id="a-materno" value={user.apellido_materno || ''} onChange={handleInput} />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="f-nac" class="col-form-label">Fecha de Nacimiento</label>
                                    <input type="date" class="form-control" name="f_nac" id="f-nac" value={user.f_nac || ''} onChange={handleInput} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="direccion" class="col-form-label">Dirección</label>
                                    <input type="text" class="form-control" name="direccion" id="direccion" value={user.direccion || ''} onChange={handleInput} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="email" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" name="email" id="email" value={user.email || ''} onChange={handleInput} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12 form-group">
                                    <label for="email" class="col-form-label">Contraseña</label>
                                    <input type="password" class="form-control" name="password" id="password" value={user.password || ''} onChange={handleInput} />
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <input type="submit" value="Registrarse" class="btn btn-primary rounded-0 py-2 px-4" id="register" />
                                    <span class="submitting"></span>
                                </div>
                            </div>
                        </form>

                        <div id="form-message-warning mt-4"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
