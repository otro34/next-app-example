'use client'

import { useState,useEffect } from 'react'

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
            <span class="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Default</span>

            

        </div>
            
    )
} 

export default Ejercicio1