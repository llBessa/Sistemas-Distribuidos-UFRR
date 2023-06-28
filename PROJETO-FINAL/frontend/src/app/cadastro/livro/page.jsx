'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function CadastroLivro() {
    const { register, reset, handleSubmit } = useForm()
    const router = useRouter()

    async function onSubmit(data) {
        try {
            const host = process.env.NEXT_PUBLIC_BACKEND_URL;
            const response = await fetch(`${host}/api/livros`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log("Livro cadastrado com sucesso")
            router.push("/")
        } catch (erro) {
            console.error("Não foi possivel cadastrar livro " + erro)
        }
    }

    return (
        <>
            <main className='main'>
                <Header />
                <div className="form-container">
                    <form className='cadastro' onSubmit={handleSubmit(onSubmit)}>
                        <div className='text-center font-bold text-lg'>Cadastrar Livro</div>
                        <div>
                            <label className='font-bold block'>Título</label>
                            <input {...register("titulo")} type="text" placeholder='Titulo do livro' />
                        </div>
                        <div>
                            <label className='font-bold block'>Autor</label>
                            <input {...register("autor")} type="text" placeholder='Autor do livro' />
                        </div>
                        <div>
                            <label className='font-bold block'>Ano de Publicação</label>
                            <input {...register("anoPublicacao")} type="text" placeholder='Ano do Livro' />
                        </div>
                        <div>
                            <label className='font-bold block'>Preço R$</label>
                            <input {...register("preco")} type="text" placeholder='Preço do livro' />
                        </div>
                        <div>
                            <label className='font-bold block'>Gênero</label>
                            <input {...register("genero")} type="text" placeholder='Genero do livro' />
                        </div>
                        <div>
                            <label className='font-bold block'>Descrição</label>
                            <textarea className='w-full' {...register("descricao")} type="text" />
                        </div>
                        <input className='botao-submit' type="submit" value="Cadastrar" />
                    </form>
                </div>
                <Footer />
            </main>
        </>
    )
}
