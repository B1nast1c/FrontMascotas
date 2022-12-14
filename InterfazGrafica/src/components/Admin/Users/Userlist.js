import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const getUsers = (setData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }
    axios
        .get("http://localhost:8080/usuarios/rol/2", { headers: headers }) //Editar usuarios normales SOLAMENTE
        .then(data => {
            setData(data.data.filter(user => user.activo)) //Filtra si se encuentra activo XD
        })
        .catch(err => console.error(err))

}

const handleDelete = (id) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .delete("http://localhost:8080/usuarios/" + id, { headers: headers })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))

    window.location.reload()
}


const Userlist = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers(setData)
    }, [setData]);

    const columns = [
        {
            field: "user",
            headerName: "Usuario",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src="https://i.pinimg.com/564x/d2/94/aa/d294aad7a18ce8f1d0a6a57fdca7f4a0.jpg" alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        {
            field: "apellido",
            headerName: "Apellidos",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.apellidoPaterno + " " + params.row.apellidoMaterno}
                    </div>
                );
            },
        },
        {
            field: "edad",
            headerName: "Edad",
            width: 110,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.edad}
                    </div>
                );
            },
        },
        {
            field: "correo",
            headerName: "Correo",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.correo}
                    </div>
                );
            },
        },
        {
            field: "direccion",
            headerName: "Direccion",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.direccion}
                    </div>
                );
            },
        },
        {
            field: " ",
            headerName: "",
            width: 100,
            renderCell: (params) => {
                return (
                    <div>
                        <FontAwesomeIcon
                            icon={faTrash}
                            className="userListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </div>
                );
            },
        },
    ];
    return (
        <div className="userList">
            <h1 className='user-title'>Listado de Usuarios</h1>
            <div className="add-container">
                <Link to="/admin/usuarios/crear" className='user-add'>Agregar Usuario</Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                className="grid"
            />
        </div>
    )
}

export default Userlist