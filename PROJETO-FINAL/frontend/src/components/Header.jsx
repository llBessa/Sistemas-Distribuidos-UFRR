import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex justify-between">
            <Link href={"/"} className="header">
                <Image src={"/images/books-logo.svg"} alt="logo" width={40} height={40} />
                Books
            </Link>
            <div className="flex gap-4 text-white mr-4 py-2">
                <div>
                    <Link href={"/cadastro/livro"}>
                        Cadastrar livro
                    </Link>
                </div>
                <div>
                    <Link href={"/cadastro/usuario"}>
                        Cadastrar usuario
                    </Link>
                </div>
            </div>
        </header>
    )
}