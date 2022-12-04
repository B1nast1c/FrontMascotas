import React, { useEffect, useState } from 'react'
import "../components/styles/profile.css"
import axios from 'axios'

const getUserInfor = (setProfile) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }
    axios.get("http://localhost:8080/actual-usuario", { headers: headers }) //Obtener datos de un usuario
        .then(data => {
            console.log(data.data)
            setProfile({
                nombre: data.data.username,
                a_paterno: data.data.apellidoPaterno,
                a_materno: data.data.apellidoMaterno,
                edad: data.data.edad,
                correo: data.data.correo,
                direccion: data.data.direccion,
                rol: data.data.rol.id
            })
        })
        .catch(err => console.log(err))

}

const Profile = () => {

    const [profile, setProfile] = useState({
        nombre: '',
        a_paterno: '',
        a_materno: '',
        edad: '',
        correo: '',
        direccion: '',
        rol: 0
    })

    useEffect(() => {
        getUserInfor(setProfile)
    }, [setProfile]);

    return (
        <div className="test-p bordlength columns has-background-warning">
            <div className="column is-three-fifths">
                <h1 className="has-text-centered has-text-weight-bold is-size-1">
                    Este soy Yo...
                </h1>
                <p className="has-text-centered">
                    Bienvenido a tu perfil, animal XDDDDDDDD
                </p>
            </div>
            <br />
            <div className="column is-half has-text-centered column-info">
                <div className='profile-container'>
                    <img className='user-profile' src="https://i.pinimg.com/564x/5b/5b/a3/5b5ba3d281d00ff23d1189f1b606573a.jpg" alt="Mingi"></img>
                </div>
                <div className='user-info'>
                    <h1 className='title'>Mi Información</h1>
                    <p className='label'>Nombre: </p>
                    <p className='info'>{profile.nombre}</p>
                    <p className='label'>Apellido Materno: </p>
                    <p className='info'>{profile.a_paterno}</p>
                    <p className='label'>Apellido Paterno: </p>
                    <p className='info'>{profile.a_materno}</p>
                    <p className='label'>Edad: </p>
                    <p className='info'>{profile.edad}</p>
                    <p className='label'>Correo: </p>
                    <p className='info'>{profile.correo}</p>
                    <p className='label'>Dirección: </p>
                    <p className='info'>{profile.direccion}</p>

                </div>
            </div>
            <br />
        </div>
    )
}

export default Profile