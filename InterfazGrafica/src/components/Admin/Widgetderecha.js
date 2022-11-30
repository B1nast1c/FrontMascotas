import React from 'react'
import "../styles/widgetderecha.css"

const Widgetderecha = () => {
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

export default Widgetderecha