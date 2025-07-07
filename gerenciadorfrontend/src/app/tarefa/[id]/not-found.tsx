import Link from "next/link";

export default function PageNotFound() {
    return (
        <div>
            <h2>Tarefa Não Pode Ser Encontrada :(</h2>
            <Link href="/">Voltar Ao Início</Link>
        </div>
    );
}