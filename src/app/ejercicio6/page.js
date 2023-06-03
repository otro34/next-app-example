'use client';

import { useEffect, useState } from 'react'

const Ejercicio5 = () => {

    const [ name, setName ] = useState('SIN NOMBRE');

    function getNamePromise () { 
        let datetime1 = new Date().getTime();
        let datetime2 = datetime1+5000;

        while(datetime1<datetime2){
            datetime1 = new Date().getTime();
        }

        return new Promise((resolve) => {
            resolve('Juan');
        })
    }

    useEffect(() => {
        const promiseGetName = getNamePromise()
        
        promiseGetName.then ((result) => {
            console.log(result)
            setName(result)
        })
    }, [])

    return (
        <div>
            <h2>
                Ejercicio 6
            </h2>
            <p>
                Uso de promises
            </p>
            Name: {name}
        </div>
    )
} 

export default Ejercicio5