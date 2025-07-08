'use client';

import Link from "next/link";
import Tarefa from "@/components/ui/tarefa";
import { useEffect, useState } from "react";

export default function Home() {
  const [ page, setPage ] = useState(0);
  const [ quantasPage, setQuantasPage ] = useState(0);

  const [ load, setLoad ] = useState(true);
  const [ errorMessage, setErrorMessage ] = useState("");
  const [ jsonData, setJsonData ] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(`https://gerenciadorbackend.onrender.com/listar/${page}/2`)
    .then((data) => {
      if (data.ok) {
        return data.json();
      }
      else {
        setErrorMessage("Não foi possível recuperar as tarefas do servidor. Tente novamente mais tarde.");
        setLoad(false);
      }
    })
    .then((jsonDataPromisse) => {
      if(jsonDataPromisse)
        if (jsonDataPromisse.length == 0) {
          setErrorMessage("Para Começar Adicione Uma Tarefa!");
          setLoad(false);
        }
        else {
          setLoad(true);
          setJsonData(jsonDataPromisse);
        }
    });

    updatePage(0);
  }, [page, setPage]);

  function updatePage(valor : number) {
    fetch("https://gerenciadorbackend.onrender.com/tarefas")
    .then((data) => data.json())
    .then((quantos) => {
      const valorNovo = page + valor;

      setQuantasPage(Math.ceil(quantos[0].count / 2));
      if(valorNovo >= 0 && valorNovo < quantos[0].count)
        setPage(valorNovo);
    });
  }

  return (
    <>
      <div className="main">
          {
            (
              (load)
              ? jsonData.map((elemento) => (
                <Tarefa key={elemento.id} idIn={elemento.id} titulo={elemento.titulo} descricao={elemento.descricao} status={elemento.statusnome} dataCriacao={new Date(elemento.datadecriacao).toLocaleString()}/>
              ))
              : <div className="text-align">{ errorMessage }</div>
            )
          }
      </div>
      <div className="controlsPaginacao">
        <div onClick={() => updatePage(-2)} className="material-symbols-outlined buttonPaginacao">chevron_left</div>
        <div>{ page / 2 + 1 }/{ quantasPage }</div>
        <div onClick={() => updatePage(2)} className="material-symbols-outlined buttonPaginacao">chevron_right</div>
      </div>
      <div>
        <Link href={"/criar"} className="mainButton"><div>+</div></Link>
      </div>
    </>
  );
}
