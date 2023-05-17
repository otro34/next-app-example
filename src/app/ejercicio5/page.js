'use client';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useState } from 'react'

const Ejercicio5 = () => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {
        alert(usuario + " " + password)

    }

    const handleOnUserChange = (e) => {
        setUsuario(e.target.value);
    }

    const handleOnPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <><div>
            <h2>
                Ejercicio 5
            </h2>
            <p>
                Crear un formulario de Login (Usuario, Password, boton.)
                se debe comparar usuario y password contra valores en una lista.
                Si es exitoso, se debe redirigir hacia el ejercicio 6.
            </p>
        </div><div>
                <Form.Control 
                    type="text" 
                    placeholder="Usuario"
                    onChange={handleOnUserChange} />
                <br />
                <Form.Control 
                    type="password" 
                    placeholder="Password" 
                    onChange={handleOnPasswordChange} />
                <Button onClick={handleClick}>INGRESAR</Button>
            </div></>
    )
} 

export default Ejercicio5