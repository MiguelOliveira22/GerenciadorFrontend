'use client';

import Link from "next/link";
import Tarefa from "@/components/ui/tarefa";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [ page, setPage ] = useState(0);

  const [ load, setLoad ] = useState(true);
  const [ jsonData, setJsonData ] = useState<Array<any>>([]);

  useEffect(() => {
    fetch(`https://gerenciadorbackend.onrender.com/listar/${page}/2`)
    .then((data) => {
      if (!data.ok) {
        notFound();
      }
      else {
        return data.json();
      }
    })
    .then((jsonDataPromisse) => {
      if (jsonDataPromisse.length == 0) {
        setLoad(false);
      }
      else {
        setLoad(true);
        setJsonData(jsonDataPromisse);
      }
    });
  }, [page, setPage]);

  function updatePage(valor : number) {
    fetch("https://gerenciadorbackend.onrender.com/tarefas")
    .then((data) => data.json())
    .then((quantos) => {
      const valorNovo = page + valor;

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
              : <div className="text-align">Para Começar Adicione Uma Tarefa!</div>
            )
          }
      </div>
      <div className="controlsPaginacao">
        <div onClick={() => updatePage(-2)} className="material-symbols-outlined buttonPaginacao">chevron_left</div>
        <div>{ page / 2 + 1}</div>
        <div onClick={() => updatePage(2)} className="material-symbols-outlined buttonPaginacao">chevron_right</div>
      </div>
      <div>
        <div className={styles.mainButton}><Link href={"/criar"}>+</Link></div>
      </div>
    </>
  );
}
