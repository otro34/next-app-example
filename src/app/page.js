'use client'

import styles from './page.module.css'
import Link from 'next/link';

export default function Home() {

  return (
    <main >
      <h1>Ejercicios en React</h1>
      <h2 className="text-3xl font-bold underline">Hello, Next.js!</h2>
      <ul>
        <li>
          <Link href="/ejercicio1">Ejercicio 1</Link>
        </li>
        <li>
          <Link href="/ejercicio2">Ejercicio 2</Link>
        </li>
        <li>
          <Link href="/ejercicio3">Ejercicio 3</Link>
        </li>
        <li>
          <Link href="/ejercicio4">Ejercicio 4</Link>
        </li>
        <li>
          <Link href="/ejercicio5">Ejercicio 5</Link>
        </li>
        <li>
          <Link href="/ejercicio6">Ejercicio 6</Link>
        </li>
      </ul>
      <div>
          A simple primary alert—check it out!
      </div>
    </main>
  )
}
