import React, { useEffect, useState } from 'react'
import "../styles/widgetderecha.css"
import axios from "axios"

const token = localStorage.getItem('token')

const getUsers = () => {
    const headers = {
        "Content-Type": "application/json",
        "Authorization": token,
        'Access-Control-Allow-Origin': "*"
    }
    axios.get("http://localhost:8080/usuarios", { headers: headers }) //Pendiente, terminar enlace a las peticiones
        .then(data => console.log(data.data))

}

const Widgetderecha = () => {
    useEffect(() => {
        getUsers()
    }, []);

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Últimos Usuarios Creados</h3>
            <table className="widgetLgTable">
                <thead>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Usuario</th>
                        <th className="widgetLgTh">Nombre</th>
                        <th className="widgetLgTh">Apellidos</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                </thead>
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
                        <td className="widgetLgDate">Nombre</td>
                        <td className="widgetLgAmount">Apellidos</td>
                        <td className="widgetLgStatus">
                            <Button type="Activo" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Usuario</th>
                        <th className="widgetLgTh">Nombre</th>
                        <th className="widgetLgTh">Apellidos</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://i.pinimg.com/564x/03/27/07/0327078be3be99b7457da4abe2131e16.jpg"
                                alt=""
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Cliente</span>
                        </td>
                        <td className="widgetLgDate">Nombre</td>
                        <td className="widgetLgAmount">Apellidos</td>
                        <td className="widgetLgStatus">
                            <Button type="Activo" />
                        </td>
                    </tr><tr className="widgetLgTr">
                        <th className="widgetLgTh">Usuario</th>
                        <th className="widgetLgTh">Nombre</th>
                        <th className="widgetLgTh">Apellidos</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://i.pinimg.com/564x/03/27/07/0327078be3be99b7457da4abe2131e16.jpg"
                                alt=""
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Cliente</span>
                        </td>
                        <td className="widgetLgDate">Nombre</td>
                        <td className="widgetLgAmount">Apellidos</td>
                        <td className="widgetLgStatus">
                            <Button type="Activo" />
                        </td>
                    </tr>
                    <tr className="widgetLgTr">
                        <th className="widgetLgTh">Usuario</th>
                        <th className="widgetLgTh">Nombre</th>
                        <th className="widgetLgTh">Apellidos</th>
                        <th className="widgetLgTh">Status</th>
                    </tr>
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <img
                                src="https://i.pinimg.com/564x/03/27/07/0327078be3be99b7457da4abe2131e16.jpg"
                                alt=""
                                className="widgetLgImg"
                            />
                            <span className="widgetLgName">Cliente</span>
                        </td>
                        <td className="widgetLgDate">Nombre</td>
                        <td className="widgetLgAmount">Apellidos</td>
                        <td className="widgetLgStatus">
                            <Button type="Activo" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const userRow = (user, Button) => {
    return (
        <tr className="widgetLgTr">
            <td className="widgetLgUser">
                <img
                    src="https://i.pinimg.com/564x/03/27/07/0327078be3be99b7457da4abe2131e16.jpg"
                    alt=""
                    className="widgetLgImg"
                />
                <span className="widgetLgName">Cliente</span>
            </td>
            <td className="widgetLgDate">Nombre</td>
            <td className="widgetLgAmount">Apellidos</td>
            <td className="widgetLgStatus">
                <Button type="Activo" />
            </td>
        </tr>
    )
}

export default Widgetderecha