import React, { useState } from 'react'
import { Productos } from "../../scripts/data";
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const Productlist = () => {
  const [data, setData] = useState(Productos);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "name",
      headerName: "Nombre",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "canidad",
      headerName: "Cantidad",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.cantidad}
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
      field: "disponible",
      headerName: "Disponibilidad",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.disponible}
          </div>
        );
      },
    },
    {
      field: "categoria",
      headerName: "Categoria",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.categoria}
          </div>
        );
      },
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.precio}
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
            <Link to={"/admin/producto/" + params.row.id}>
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
      <h1 className='user-title'>Listado de Productos</h1>
      <div className="add-container">
        <Link to="/admin/productos/crear" className='user-add'>Agregar Producto</Link>
      </div>
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

export default Productlist