import React from 'react'

const Filter = () => {
    return (
        <div className="row row-2">
            <h2 className='filter'>Filtrar por</h2>
            <select className='filter filter-select'>
                <option>Sin Filtro</option>
                <option>Mayor Precio</option>
                <option>Menor Precio</option>
            </select>
        </div>
    )
}

export default Filter