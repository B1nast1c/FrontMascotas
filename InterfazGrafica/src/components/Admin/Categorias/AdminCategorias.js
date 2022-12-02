import React, { useState } from 'react'
import { Categories } from "../../scripts/data";
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

const Categorylist = () => {
    const [data, setData] = useState(Categories);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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
                        {params.row.detalles}
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