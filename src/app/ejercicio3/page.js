'use client';

import { useState } from 'react'

const Ejercicio3 = () => {

    const frutas = ["Manzana", "Pera", "Naranja", "Mandarina", "Pomelo"]
    const [arr, setArr] = useState(frutas)
    const [textBusqueda, setTextBusqueda] = useState("")

    return (
        <div>
            <h2>
            Ejercicio 3
            </h2>
            Agregar una busqueda al ejercicio 3
            <input
                type="text"
                value={textBusqueda}
                onChange={e => setTextBusqueda(e.target.value)}
                ></input>
            <ul>
                    { arr.filter(f => f.includes(textBusqueda))
                        .map(fruta =>{
                        return (<li key={fruta} >{fruta}</li>)
                    }) } 
            </ul>
        </div>
    )
} 

export default Ejercicio3