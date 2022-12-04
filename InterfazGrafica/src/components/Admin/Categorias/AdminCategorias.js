import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const getCategories = (setData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/categorias/", { headers: headers })
        .then(data => {
            setData(data.data)
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
        .delete("http://localhost:8080/categorias/" + id, { headers: headers })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))

    window.location.reload()
}

const Categorylist = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getCategories(setData)
    }, [setData]);

    const columns = [
        {
            field: "nombre",
            headerName: "Nombre",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.nombre}
                    </div>
                );
            },
        },
        {
            field: "detalles",
            headerName: "Detalles",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        {params.row.descripcion}
                    </div>
                );
            },
        },
        {
            field: "action",
            headerName: "Gestionar",
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={"/admin/categoria/" + params.row.id}>
                            <FontAwesomeIcon
                                icon={faEdit}
                                className="userListEdit"
                            />
                        </Link>
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
            <h1 className='user-title'>Listado de Categorias</h1>
            <div className="add-container">
                <Link to="/admin/categorias/crear" className='user-add'>Agregar Categoría</Link>
            </div>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
                className='grid'
            />
        </div>
    )
}

export default Categorylist