'use client';

import { deletarTarefa } from "@/actions/formularioActions";
import { useState } from "react";

export default function Tarefa({
    idIn, titulo, descricao, status, dataCriacao
} : Readonly<{
    idIn: number,
    titulo: string, descricao: string,
    status: string, dataCriacao: string
}>) {
    const [ id ] = useState(idIn);

    async function onClick() {
        if (await deletarTarefa(id)) {
            // reload
        }
        else {
            // toast falando que deu ruim
        }
    }

    return (
        <div className="card">
            <h2>{titulo}</h2>
            <p>{descricao}</p>
            <br/>
            <p>{status}</p>
            <small>Criado em: {dataCriacao}</small>
            <button onClick={onClick}>Apagar</button>
        </div>
    );
}