'use client'

import styles from './page.module.css'
import Link from '../components/Link/Link.jsx';

export default function Home() {

  window.localStorage.setItem("username", "Juan");
  window.sessionStorage.setItem("lastname", "Perez");

  window
  .localStorage
  .setItem("userObject", 
  JSON.stringify({user: "jromaina", 
                grade: 5}));

  //window.localStorage.removeItem("")

  return (
    <main >
      <h1>Ejercicios en React</h1>
      <h2 className="text-3xl font-bold underline">Hello, Next.js!</h2>
      <ul>
        <li>
          <Link href="/ejercicio1" text="Ejercicio 1" />
        </li>
        <li>
          <Link href="/ejercicio2" text="Ejercicio 2" />
        </li>
        <li>
          <Link href="/ejercicio3" text="Ejercicio 3" />
        </li>
        <li>
          <Link href="/ejercicio4" text="Ejercicio 4" />
        </li>
      </ul>
      <div>
          A simple primary alert—check it out!
      </div>
    </main>
  )
}
