import React, { useState, useEffect } from "react";
import "../../styles/createproduct.css";
import axios from "axios";

const getCategories = (setData) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
    };

    axios
        .get("http://localhost:8080/categorias/", { headers: headers })
        .then((data) => {
            setData(data.data);
        })
        .catch((err) => console.error(err));
};

const createProduct = (producto, e) => {
    const token = localStorage.getItem("token");
    const headers = {
        "Content-Type": "application/json",
        Authorization: token,
        "Access-Control-Allow-Origin": "*",
    };

    const newProducto = {
        productoR: {
            nombre: producto.nombre,
            cantidad: producto.cantidad,
            detalles: producto.detalles,
            disponible: producto.disponible,
            categoria: {
                id: producto.categoria,
            },
        },
        precioR: {
            precio: producto.precio,
            descuento: producto.descuento,
            monto: producto.precio
        },
    };

    axios
        .post("http://localhost:8080/productos/", newProducto, { headers: headers })
        .then((data) => console.log(data))
        .catch((err) => console.error(err));
};

const AddProduct = () => {
    const [data, setData] = useState([])
    const [category, setCategory] = useState("");

    useEffect(() => {
        getCategories(setData);
    }, [setData]);

    const [producto, setproducto] = useState({
        nombre: "",
        cantidad: 0,
        detalles: "",
        disponible: "true",
        categoria: 0,
        precio: 0,
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        setproducto({
            ...producto,
            [name]: value,
        })
    };

    return (
        <div className="inner-form">
            <div className="newUser">
                <h1 className="newUserTitle">Agregar Nuevo Producto</h1>
                <form name="productForm" encType="multipart/form-data" className="newUserForm" onSubmit={(e) => createProduct(producto, e)}>
                    <div className="form-left">
                        <div className="newUserItem">
                            <label>Nombre</label>
                            <input
                                type="text"
                                placeholder=""
                                name="nombre"
                                value={producto.nombre || ""}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Categoría Seleccionada: </label>
                            <select onChange={handleInput} name="categoria" value={producto.categoria || ''}>
                                {
                                    data.map((item, id) =>
                                        <option key={id} value={item.id}>{item.nombre}</option>
                                    )
                                }
                            </select>
                        </div>
                        <div className="newUserItem">
                            <label>Cantidad</label>
                            <input
                                type="number"
                                min="5"
                                max="500"
                                name="cantidad"
                                value={producto.cantidad || ""}
                                onChange={handleInput}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Precio</label>
                            <input
                                type="number"
                                min="5"
                                max="500"
                                name="precio"
                                value={producto.precio || ""}
                                onChange={handleInput}
                            />
                        </div>
                        <button className="newUserButton" type="submit">Añadir Producto</button>
                    </div>
                    <div className="form-right">
                        <div className="newUserItem">
                            <label>Detalles</label>
                            <input
                                type="text"
                                name="detalles"
                                value={producto.detalles || ""}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default AddProduct;
