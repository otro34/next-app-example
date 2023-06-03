'use client';

const Ejercicio5 = () => {

    const a = 1;
    const b = 2;
    const c = a + b;
    
    console.log(c);

    let d = 0;
    alter();

    console.log(d)

    function alter() {
        setTimeout(() => {
            console.log("Estoy esperando!")
            d = a + b + c;
            console.log('ya pude sumar!' + d)
        }, 5000)
    }

    return (
        <div>
            <h2>
                Ejercicio 5
            </h2>
            <p>
                Uso de promises
            </p>
        </div>
    )
} 

export default Ejercicio5