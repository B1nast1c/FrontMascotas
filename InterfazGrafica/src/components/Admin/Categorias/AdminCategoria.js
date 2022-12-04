import React, { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const handleUpdate = (id) => { //Pendiente de implementar 
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .put("http://localhost:8080/categorias/" + id, { headers: headers })
        .then(data => {
            console.log(data)
        })
        .catch(err => console.error(err))

    window.location.reload()
}

const getCategory = (id, setData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/categorias/" + id, { headers: headers })
        .then(data => {
            setData(data.data)
        })
        .catch(err => console.error(err))

}

const Category = () => {
    let { categoriaid } = useParams()
    const [data, setData] = useState({
        nombre: "",
        descripcion: ""
    })

    useEffect(() => {
        getCategory(categoriaid, setData)
    }, [categoriaid, setData]);

    const handleInput = (event) => {
        const { name, value } = event.target
        setData({
            ...data,
            [name]: value
        })
    }

    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Categoría</h1>
                <Link to="/admin/usuarios">
                    <button className="userAddButton update-category-btn" >Confirmar</button>
                </Link>
            </div>
            <div className="userContainer category-container">
                <div className="userUpdate category-container">
                    <span className="userUpdateTitle">Editar Información</span>
                    <form className="userUpdateForm">
                        <div className="update-category">
                            <div className="userUpdateItem">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    placeholder="Nombre"
                                    className="userUpdateInput"
                                    name='nombre'
                                    onChange={handleInput}
                                    value={data.nombre || ''}
                                />
                            </div>
                            <div className="userUpdateItem">
                                <label>Detalles</label>
                                <input
                                    type="text"
                                    placeholder="Detalles"
                                    className="userUpdateInput"
                                    name='descripcion'
                                    onChange={handleInput}
                                    value={data.descripcion || ''}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Category