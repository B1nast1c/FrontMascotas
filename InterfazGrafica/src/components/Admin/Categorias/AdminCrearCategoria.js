import React, { useState } from 'react'
import '../../styles/createcategory.css'
import axios from 'axios'

const createcategory = (category) => {
    const token = localStorage.getItem("token")

    console.log(token)
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    const newCategory = {
        nombre: category.nombre,
        descripcion: category.detalles
    }

    axios
        .post("http://localhost:8080/categorias/", newCategory, { headers: headers })
        .then(data => console.log(data))
        .catch(err => console.error(err))

}

function AdminCrearCategoria() {
    const [category, setCategory] = useState(
        {
            nombre: "",
            detalles: ""
        }
    )

    const handleInput = (event) => {
        const { name, value } = event.target
        setCategory({
            ...category,
            [name]: value
        })
    }

    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nueva Categoria</h1>
                <form className="newUserForm" onSubmit={(e) => createcategory(category)}>
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input type="text" placeholder="Nombre" name='nombre' value={category.nombre || ''} onChange={handleInput} />
                        </div>
                        <input type="submit" className="newUserButton" value="Añadir Categoria" />
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Detalles</label>
                            <input type="text" placeholder="Detalles" name='detalles' value={category.detalles || ''} onChange={handleInput} />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminCrearCategoria