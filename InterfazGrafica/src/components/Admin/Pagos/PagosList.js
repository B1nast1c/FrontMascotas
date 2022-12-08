import React, { useState, useEffect } from 'react'
import "../../styles/userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import axios from 'axios';

const getPagos = (setData) => { //Obtencion todos los productos
  const token = localStorage.getItem("token")
  const headers = {
    "Content-Type": "application/json",
    "Authorization": token,
    'Access-Control-Allow-Origin': "*"
  }

  axios
    .get("http://localhost:8080/pago/", { headers: headers })
    .then(data => {
      setData(data.data)
    })
    .catch(err => console.error(err))

}

const Pagoslist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getPagos(setData)
  }, [setData]);

  const columns = [
    {
      field: "id",
      headerName: "Pago Id",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.id}
          </div>
        );
      },
    },
    {
      field: "",
      headerName: "Carrito",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.carrito.id}
          </div>
        );
      },
    },
    {
      field: "monto",
      headerName: "Monto",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.monto}
          </div>
        );
      },
    },
  ];
  return (
    <div className="userList">
      <h1 className='user-title'>Listado de Pagos</h1>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
      />
    </div>
  )
}

export default Pagoslist