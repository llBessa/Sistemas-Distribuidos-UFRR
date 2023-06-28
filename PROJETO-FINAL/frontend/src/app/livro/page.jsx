'use client'

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Livro from "@/components/Livro"
import { useRouter } from "next/navigation"
import { InputText } from 'primereact/inputtext';
import { useEffect, useState } from "react"

export default function LivroPage() {
    const [endereco, setEndereco] = useState()
    const [cep, setCEP] = useState()
    const [livro, setLivro] = useState()
    const router = useRouter()

    useEffect(() => {
        const host = process.env.NEXT_PUBLIC_BACKEND_URL;
        const idLivro = 1
        fetch(`${host}/api/livros/${idLivro}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json()
        }).then((livro) => {
            setLivro(livro)
        })
    }, [livro, endereco])

    function buscaCEP(){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((response) => response.json())
            .then((addr) => {
                setEndereco(addr)
                console.log(addr)
            })
    }

    return (
        <main className="main">
            <Header />
            <div className="compra-container">
                <div className="compra">
                    <div className="text-5xl text-center mb-10">Compra</div>
                    <div className="flex gap-4">
                        <Livro livro={livro} />
                        <div className="flex flex-col gap-2 w-full">
                            <div className="flex gap-2">
                                <div>
                                    Digite o seu CEP:
                                </div>
                                <InputText value={cep} onChange={(e) => setCEP(e.target.value)} />
                                <div className="px-2 bg-blue-800 text-white">Buscar endereço</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}