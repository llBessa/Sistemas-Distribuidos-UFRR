import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Livro({ livro }) {
    const router = useRouter()
    return (
        <div className="livro py-4 px-4">
            <Image src={"/images/books-logo.svg"} width={100} height={100} className="mb-4 mx-auto" alt="foto-livro" />
            <div className="text-center font-bold">{livro?.titulo}</div>
            <div>Ano: {livro?.anoPublicacao}</div>
            <div>Autor: {livro?.autor}</div>
            {livro?.preco ? (<div>Preço: {livro?.preco}R$</div>) : ""}
            {livro?.descricao ? (<div>Descrição: {livro?.descricao}</div>) : ""}
            {livro?.genero ? (<div>Gênero: {livro.genero}</div>) : ""}
            <div
                className="p-2 bg-blue-800 text-white mt-auto"
                onClick={() => router.push("/livro?livro="+ livro?.id)}
            >
                Comprar
            </div>
        </div>
    );
}