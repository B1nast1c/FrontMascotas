import {
    faCheck,
    faDesktopAlt,
    faListNumeric,
    faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../../styles/product.css";
import axios from "axios";


//Editarlo

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

const getProducto = (id, setFixedData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/productos/" + id, { headers: headers })
        .then(data => {
            setFixedData(data.data)
        })
        .catch(err => console.error(err))
};

const User = () => { //Producto >:v
    let { productoid } = useParams()
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");


    const [data, setData] = useState({
        monto: '',
        nombre: "",
        cantidad: 0,
        precio: 0,
        detalles: "",
        disponible: true,
        categoria: 0
    })

    const [fixedData, setFixedData] = useState({
        id: 0,
        monto: '',
        producto: {
            id: 0,
            nombre: "",
            cantidad: 0,
            precio: 0,
            detalles: "",
            disponible: true,
            categoria: {
                id: 0,
                nombre: ""
            }
        }
    })

    useEffect(() => {
        getProducto(productoid, setFixedData)
        getCategories(setCategories)
    }, [productoid, setFixedData, setCategories]);

    const uploadFile = async (e) => {
        const token = localStorage.getItem("token");
        const headers = {
            Authorization: token,
            "Access-Control-Allow-Origin": "*",
        };

        var formData = new FormData()
        formData.append("file", document.forms["productUpdateForm"].file.files[0])
        formData.append("info", productoid) //Teoricamente va el id ddel producto

        await axios.post("http://localhost:8080/imagenes/", formData, { headers: headers }) //Subir la imagen a la base de datos
            .then(data => {
                console.log(data.data)
            }
            )
            .catch(err => console.log(err))
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        setData({
            ...data,
            [name]: value,
        })
    }

    const handleSelected = (event) => {
        setCategory(event.target.value)
        console.log(category)
    }

    const updateProducto = (e) => {
        e.preventDefault();


        const updatedProduct = {
            productoR: {
                nombre: data.nombre,
                cantidad: data.cantidad,
                detalles: data.detalles,
                disponible: data.disponible,
                categoria: {
                    id: data.categoria,
                },
            },
            precioR: {
                precio: data.precio,
                monto: data.precio
            },
        }

        const token = localStorage.getItem("token")
        const headers = {
            "Content-Type": "application/json",
            "Authorization": token,
            'Access-Control-Allow-Origin': "*"
        }

        axios
            .put("http://localhost:8080/productos/" + productoid, updatedProduct, { headers: headers })
            .then(data => {
                console.log(data.data)
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editar Producto</h1>
                <Link to="/admin/productos">
                    <button className="userAddButton" onClick={(e) => updateProducto(e)}>Confirmar</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img
                            src="https://static.vecteezy.com/system/resources/thumbnails/005/980/217/small_2x/happy-cartoon-puppy-sitting-portrait-of-cute-little-dog-wearing-collar-dog-friend-illustration-isolated-on-white-background-vector.jpg"
                            alt=""
                            className="userShowImg"
                        />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">{fixedData.producto.nombre}</span>
                            <span className="userShowUserTitle">{fixedData.producto.categoria.nombre}</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalles del Producto</span>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faListNumeric} className="userShowIcon" />
                            <span className="userShowInfoTitle">{fixedData.producto.cantidad + " unidades"}</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faMoneyBill} className="userShowIcon" />
                            <span className="userShowInfoTitle">{"S/. " + fixedData.monto}</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faDesktopAlt} className="userShowIcon" />
                            <span className="userShowInfoTitle">{"Detalles: " + fixedData.producto.detalles}</span>
                        </div>
                        <div className="userShowInfo">
                            <FontAwesomeIcon icon={faCheck} className="userShowIcon" />
                            <span className="userShowInfoTitle">{"Disponible: " + fixedData.producto.disponible.toString()}</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Editar Información del Producto</span>
                    <form className="productUpdateForm" name="productUpdateForm">
                        <div className="userUpdateContent">
                            <div className="product-edit-left">
                                <div className="userUpdateItem">
                                    <label>Nombre</label>
                                    <input
                                        type="text"
                                        placeholder={fixedData.producto.nombre}
                                        className="userUpdateInput product-input"
                                        name="nombre"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Categoria</label>

                                    <select className="product-input" name="categoria" value={category} onChange={handleSelected}>
                                        {
                                            categories.map((item, id) =>
                                                <option key={id} value={item.id}>{item.nombre}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <div className="userUpdateItem">
                                    <label>Cantidad</label>
                                    <input
                                        placeholder={fixedData.producto.cantidad}
                                        name="cantidad"
                                        type="number"
                                        onChange={handleInput}
                                        className="userUpdateInput product-input"
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Precio</label>
                                    <input
                                        placeholder={fixedData.monto}
                                        name="precio"
                                        type="number"
                                        className="userUpdateInput product-input"
                                        min="5"
                                        max="200"
                                        onChange={handleInput}
                                    />
                                </div>
                            </div>
                            <div className="product-edit-right">
                                <div className="userUpdateItem">
                                    <label>Detalles</label>
                                    <textarea
                                        placeholder={fixedData.producto.detalles}
                                        name="detalles"
                                        className="userUpdateInput product-input"
                                        rows="10"
                                        onChange={handleInput}
                                    />
                                </div>
                                <div className="userUpdateItem">
                                    <label>Disponibilidad</label>
                                    <div className="product-input">
                                        <div className="option">
                                            <input
                                                type="radio"
                                                name="disponible"
                                                className="option"
                                                value={true}
                                                onClick={handleInput}
                                            />{" "}
                                            <p>Disponible</p>
                                        </div>
                                        <div className="option">
                                            <input
                                                type="radio"
                                                name="disponible"
                                                className="option"
                                                value={false}
                                                onClick={handleInput}
                                            />{" "}
                                            <p>No Disponible</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="userUpdateItem file-upload" >
                                    <label>Imagen de Referencia</label>
                                    <input
                                        type="file"
                                        onChange={uploadFile}
                                        name="file"
                                    />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default User;
