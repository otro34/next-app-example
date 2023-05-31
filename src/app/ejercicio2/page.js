'use client';

import api from '@/api/course.js'

const Ejercicio5 = () => {

    const get = async () => {
        const datos = await api.get()
        console.log(datos)
    }

    get()

    return (
        <div>
            <h2>
                Ejercicio 2
            </h2>
            <p>
                Uso de fetch / axios
            </p>
        </div>
    )
} 

export default Ejercicio5