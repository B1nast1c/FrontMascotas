import React from 'react'


export const Filter = () => {
    const handleChange = (e) => {
        localStorage.setItem("sort", e.target.value)
        window.location.reload()
    }

    return (
        <div className="row row-2">
            <h2 className='filter'>Filtrar por</h2>
            <select className='filter filter-select' value={localStorage.getItem("sort") || ''} onChange={handleChange}>
                <option value={-1}>Sin Filtro</option>
                <option value={1}>Mayor Precio</option>
                <option value={2}>Menor Precio</option>
            </select>
        </div>
    )
}

