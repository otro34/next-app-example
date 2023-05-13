'use client'

import Image from 'next/image'
import styles from './page.module.css'
import Button from 'react-bootstrap/Button'

export default function Home() {

  const handleClick = () =>{
    console.log('hello')
  }

  return (
    <main >
      <h1>Este es el titulo</h1>
      <button type="button" className="btn btn-primary" onClick={() => handleClick() }>Primary</button>
      <Button variant="primary">HOLA</Button>
    </main>
  )
}
