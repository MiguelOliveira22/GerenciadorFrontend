import Tarefa from "@/components/tarefa";
import styles from "./page.module.css";

export default async function Home() {
  const data = await fetch("https://gerenciadorbackend.onrender.com/listar/0/2");
  const jsonData : Array<any> = await data.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {
          (
            jsonData.map((elemento) => (<Tarefa key={elemento.id} idIn={elemento.id} titulo={elemento.titulo} descricao={elemento.descricao} status={elemento.statusnome} dataCriacao={new Date(elemento.datadecriacao).toLocaleString()}/>))
          )
        }
      </main>
      <footer className={styles.footer}>

      </footer>
    </div>
  );
}
