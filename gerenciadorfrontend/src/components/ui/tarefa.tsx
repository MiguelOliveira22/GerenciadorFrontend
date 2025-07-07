'use client';

import Link from "next/link";
import { useState } from "react";

export default function Tarefa({
    idIn, titulo, descricao, status, dataCriacao
} : Readonly<{
    idIn: number,
    titulo: string, descricao: string,
    status: string, dataCriacao: string
}>) {
    const [ id ] = useState(idIn);

    return (
        <Link href={`/tarefa/${id}`}>
            <div className="card">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
                <br/>
                <p>{status}</p>
                <small>Criado em: {dataCriacao}</small>
            </div>
        </Link>
    );
}