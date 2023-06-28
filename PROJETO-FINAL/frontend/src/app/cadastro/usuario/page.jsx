'use client'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

export default function CadastroUsuario() {
    const { register, reset, handleSubmit } = useForm()
    const router = useRouter()

    async function onSubmit(data) {
        try {
            const host = process.env.NEXT_PUBLIC_BACKEND_URL;
            const response = await fetch(`${host}/api/usuarios`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log("Usuario cadastrado com sucesso")
            router.push("/")
        } catch (erro) {
            console.error("Não foi possivel cadastrar usuario " + erro)
        }
    }

    return (
        <>
            <main className='main'>
                <Header />
                <div className="form-container">
                    <form className='cadastro' onSubmit={handleSubmit(onSubmit)}>
                        <div className='text-center font-bold text-lg'>Cadastrar Usuário</div>
                        <div>
                            <label className='font-bold block'>Usuário</label>
                            <input {...register("usuario")} type="text" placeholder='nome de usuario' />
                        </div>
                        <div>
                            <label className='font-bold block'>Nome</label>
                            <input {...register("nome")} type="text" placeholder='Digite o seu nome' />
                        </div>
                        <div>
                            <label className='font-bold block'>Endereço</label>
                            <input {...register("endereco")} type="text" placeholder='Digite o seu endereço' />
                        </div>
                        <div>
                            <label className='font-bold block'>CEP</label>
                            <input {...register("CEP")} type="text" placeholder='Digite o seu CEP' />
                        </div>
                        <div>
                            <label className='font-bold block'>Email</label>
                            <input {...register("email")} type="text" placeholder='Digite o seu email' />
                        </div>
                        <div>
                            <label className='font-bold block'>Senha</label>
                            <input {...register("senha")} type="password" placeholder='Digite a sua senha' />
                        </div>
                        <div>
                            <label className='font-bold block'>Confirmar Senha</label>
                            <input type="password" placeholder='Confirme a sua senha' />
                        </div>
                        <input className='botao-submit' type="submit" value="Cadastrar" />
                    </form>
                </div>
                <Footer />
            </main>
        </>
    )
}
