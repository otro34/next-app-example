'use client'

import { useState } from 'react'

import Button from '../../components/Button/Button.jsx'

const Ejercicio1 = () => {
    
    const[ contador, setContador] = useState(0)

    function handleClick() {
        setContador(contador + 1);
        console.log(contador);
    }
    
    return (
        <div>
            <h2>
            Ejercicio 1
            </h2>
            <p>
                Agregar un botón contador de Clicks.
            </p>
            <Button 
                onClick={handleClick}
                value="HAZME CLICK" />

            <p>
                Uds ha hecho click { contador } veces. 
            </p>
            <div>
                A simple primary alert—check it out!
            </div>
        </div>
    )
} 

export default Ejercicio1