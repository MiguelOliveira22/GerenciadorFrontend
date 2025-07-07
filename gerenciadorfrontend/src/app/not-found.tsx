import Link from "next/link";

export default function PageNotFound() {
    return (
        <div className="main">
            <h3>Essa Pagina Não Existe :(</h3>
            <Link href="/" className="anchorButton">Voltar Ao Início</Link>
        </div>
    );
}