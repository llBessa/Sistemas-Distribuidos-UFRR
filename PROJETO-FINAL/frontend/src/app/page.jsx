'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Livro from '@/components/Livro'
import { useEffect, useState } from 'react'

export default function Home() {
  const [livros, setLivros] = useState();

  useEffect(() => {
    const host = process.env.NEXT_PUBLIC_BACKEND_URL;
    fetch(`${host}/api/livros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      return response.json()
    }).then((livros) => {
      setLivros(livros)
    })
  })
  return (
    <>
      <main className='main'>
        <Header />
        <div className="livros-container">
          <strong className='text-xl'>Livros</strong>
          <div className='grid grid-cols-5 py-6'>
            {livros ? livros.map((livro) => (
              <Livro livro={livro} key={livro.id} />
            )) : ""}
          </div>
        </div>
        <Footer />
      </main>
    </>
  )
}
