'use client';

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Label from "@/components/ui/label";
import Input from "@/components/ui/input";
import { atualizarTarefa, criarTarefa, deletarTarefa } from "@/actions/ApiActions";
import { notFound, useRouter } from "next/navigation";
import { Combobox, ComboboxOption } from "@/components/ui/combobox";

export function FormCriar() {
    const { push } = useRouter();

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ status, setStatus ] = useState(0);

    const [ statusList, setStatusList ] = useState<Array<any>>([]);

    const [ error, setError ] = useState<string | null>(null); 

    useEffect(() => {
        fetch("https://gerenciadorbackend.onrender.com/status")
        .then(response => {
            if (response.ok)
                return response.json();
            else
                setError("Não foi possível recuperar os status do servidor. Tente novamente mais tarde.");
        })
        .then(json => {
            if(json)
                setStatusList(json);
        });
    }, []);

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        const novaTarefa = {
	        "titulo": titulo,
	        "descricao": descricao,
	        "status": status
        }

        criarTarefa(novaTarefa).then(response => {
            if (response) {
                push("/");
            }
            else {
                setError("Insira apenas valores validos nos campos abaixo (Incluindo o status)!");
            }
        });
    }

    return (
        <>
            <h1>Criar</h1>
            <form onSubmit={onSubmit}>
                <div className="formItem">
                    <Label htmlFor="titulo">Titulo</Label>
                    <Input className="inputBox" required value={titulo} onChange={(e : ChangeEvent<HTMLInputElement>) => { setTitulo(e.target.value) }} id="titulo" type="text"/>
                </div>
                <div className="formItem">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Input className="inputBox" required value={descricao} onChange={(e : ChangeEvent<HTMLInputElement>) => { setDescricao(e.target.value) }} id="descricao" type="text"/>
                </div>
                <div className="formItem">
                    <Label htmlFor="status">Status</Label>
                    <Combobox className="inputBox" value={status} onChange={(e : ChangeEvent<HTMLSelectElement>) => { setStatus(Number.parseInt(e.target.value)) }}>
                        <ComboboxOption key={0} value={0} stringExib="Selecione..."/>

                        {
                            (
                                statusList.map((statusPossivel) => 
                                (
                                    <ComboboxOption key={statusPossivel.statusid} value={statusPossivel.statusid} stringExib={statusPossivel.statusnome}/>
                                ))
                            )
                        }
                    </Combobox>
                </div>
                <div className="formItem red">
                    {error}
                </div>
                <div className="formItem">
                    <button className="buttonConfirmar">Criar</button>
                </div>
            </form>
        </>
    );
}

export function FormAlterar({ value } : Readonly<{ value: string }>) {
    const { push } = useRouter();

    const [ titulo, setTitulo ] = useState("");
    const [ descricao, setDescricao ] = useState("");
    const [ status, setStatus ] = useState(0);

    const [ statusList, setStatusList ] = useState<Array<any>>([]);

    const [ error, setError ] = useState<string | null>(null); 

    useEffect(() => {
        fetch(`https://gerenciadorbackend.onrender.com/tarefa/${value}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                setError("Não foi possível receber as informações da tarefa. Volte a tela inicial!");
            }
        })
        .then(json => {
            if(json && json[0])
                setTitulo(json[0].titulo);
                setDescricao(json[0].descricao);
                setStatus(json[0].status);
        });

        fetch("https://gerenciadorbackend.onrender.com/status")
        .then(response => {
            if (response.ok)
                return response.json();
            else
                setError("Não foi possível recuperar os status do servidor. Tente novamente mais tarde.");
        })
        .then(json => {
            if(json)
                setStatusList(json);
        });
    }, []);

    function onSubmit(e: FormEvent) {
        e.preventDefault();

        console.log(value)

        const novaTarefa = {
	        "titulo": titulo,
	        "descricao": descricao,
	        "status": status
        }

        atualizarTarefa(Number.parseInt(value), novaTarefa).then(response => {
            if (response) {
                push("/");
            }
            else {
                setError("Insira apenas valores validos nos campos abaixo (Incluindo o status)!");
            }
        });
    }

    function onClick() {
        deletarTarefa(Number.parseInt(value))
        .then(response => {
            if(response) {
                push("/");
            }
            else {
                setError("Não foi possível apagar a Tarefa.");
            }
        });
    }

    return (
        <>
            <h1>Atualizar</h1>
            <form onSubmit={onSubmit}>
                <div className="formItem">
                    <Label htmlFor="titulo">Titulo</Label>
                    <Input className="inputBox" required value={titulo} onChange={(e : ChangeEvent<HTMLInputElement>) => { setTitulo(e.target.value) }} id="titulo" type="text"/>
                </div>
                <div className="formItem">
                    <Label htmlFor="descricao">Descrição</Label>
                    <Input className="inputBox" required value={descricao} onChange={(e : ChangeEvent<HTMLInputElement>) => { setDescricao(e.target.value) }} id="descricao" type="text"/>
                </div>
                <div className="formItem">
                    <Label htmlFor="status">Status</Label>
                    <Combobox className="inputBox" value={status} onChange={(e : ChangeEvent<HTMLSelectElement>) => { setStatus(Number.parseInt(e.target.value)) }}>
                        <ComboboxOption key={0} value={0} stringExib="Selecione..."/>

                        {
                            (
                                statusList.map((statusPossivel) => 
                                (
                                    <ComboboxOption key={statusPossivel.statusid} value={statusPossivel.statusid} stringExib={statusPossivel.statusnome}/>
                                ))
                            )
                        }
                    </Combobox>
                </div>
                <div className="formItem red">
                    {error}
                </div>
                <div className="formItem">
                    <button className="buttonConfirmar">Atualizar</button>
                </div>
            </form>
            <div className="formItem">
                <button className="buttonExcluir" onClick={onClick}>Deletar</button>
            </div>
        </>
    );
}