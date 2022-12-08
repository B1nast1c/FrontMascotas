import React, { useEffect, useState } from 'react'
import "../styles/widgetderecha.css"
import axios from 'axios';

const getUsers = (setData) => {
    const token = localStorage.getItem("token")
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }

    axios
        .get("http://localhost:8080/usuarios/rol5/2", { headers: headers }) //Editar usuarios normales SOLAMENTE
        .then(data => {
            setData(data.data) //Filtra si se encuentra activo XD
        })
        .catch(err => console.error(err))

}

const Widgetderecha = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getUsers(setData)
    }, [setData]);


    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type.toString()}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Últimos Usuarios Creados</h3>
            <table className="widgetLgTable">
                <thead>

                </thead>
                <tbody>
                    <tr>
                        <td>
                            {
                                data.map(user => (
                                    <div className="row-container" key={user.id}>
                                        <table className="user-table">
                                            <tbody>
                                                <tr className="widgetLgTr">
                                                    <td className="widgetLgUser">
                                                        <img
                                                            src="https://i.pinimg.com/564x/03/27/07/0327078be3be99b7457da4abe2131e16.jpg"
                                                            alt=""
                                                            className="widgetLgImg"
                                                        />
                                                        <span className="widgetLgName">Cliente</span>
                                                    </td>
                                                    <td className="widgetLgDate">{user.username}</td>
                                                    <td className="widgetLgAmount">{user.username + " " + user.apellidoPaterno}</td>
                                                    <td className="widgetLgAmount">{user.edad}</td>
                                                    <td className="widgetLgStatus">
                                                        <Button type={user.activo} />
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                ))
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Widgetderecha