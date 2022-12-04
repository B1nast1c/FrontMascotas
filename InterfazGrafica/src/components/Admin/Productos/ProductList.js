import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const getProducts = (setData) => { //Obtencion todos los productos
  const token = localStorage.getItem("token")
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token,
    'Access-Control-Allow-Origin': "*"
  }

  axios
    .get("http://localhost:8080/productos/", { headers: headers })
    .then(data => {
      setData(data.data)
      console.log(data.data)
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
    .delete("http://localhost:8080/productos/" + id, { headers: headers })
    .then(data => {
      console.log(data)
    })
    .catch(err => console.error(err))

  window.location.reload()
}

const Productlist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts(setData)
  }, [setData]);

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
      field: "cantidad",
      headerName: "nº",
      width: 100,
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
      width: 175,
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
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.precio}
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