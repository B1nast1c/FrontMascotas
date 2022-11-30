import React, { useState } from 'react'
import { userRows } from "../../scripts/data";
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Userlist = () => {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "Usuario",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.avatar} alt="" />
                        {params.row.username}
                    </div>
                );
            },
        },
        { field: "apellido", headerName: "Apellidos", width: 200 },
        {
            field: "edad",
            headerName: "Edad",
            width: 120,
        },
        {
            field: "correo",
            headerName: "Correo",
            width: 160,
        },
        {
            field: "direccion",
            headerName: "Direccion",
            width: 160,
        },
        {
            field: "action",
            headerName: "Gestionar",
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                        <Link to={"/admin/usuario/" + params.row.id}>
                            <button className="userListEdit">Editar</button>
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
            <h1 className='user-title'>Listado de Usuarios</h1>
            <button className='user-add'>Agregar Usuario</button>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    )
}

export default Userlist