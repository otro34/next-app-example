'use client';

const Ejercicio1 = () => {

    const username = window.localStorage.username;
    const lastname = window
                    .sessionStorage
                    .lastname;
    const userObject = JSON.parse(window
                        .localStorage
                        .userObject)

    console.log(userObject)

    return (
        <div>
            <h2>
                Ejercicio 1
            </h2>
            <p>
                Uso de session y local storage
            </p>
            <p>
                Hola: {username} {lastname}
            </p>
            <p>
User Object: {userObject?.user} {userObject.grade}
            </p>
        </div>
    )
} 

export default Ejercicio1