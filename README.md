# GerenciadorFrontend
Projeto Entrevista

## Como rodar o projeto:

Para começar, abra a pasta app do projeto a partir de sua raiz com o comando abaixo:
```bash
cd gerenciadorfrontend
```

#### Depois instale as dependências abaixo por meio do NPM ou seu gerenciador de pacotes de preferência:
- Next
- React
- ReactDOM
- Next-Themes
- Matherial-Symbols

O script usado para instalar todas elas é esse:
```bash
npm i
```

Depois, para poder iniciar a aplicação, execute o comando específico para construir e rodá-la...
```bash
npm run build
npm run start
```

Ou chame o ambiente de desenvolvimento para testar as capacidades do projeto:
```bash
npm run dev
```

## Endpoints da Aplicação

#### Pagina Inicial Com Tarefas

```http
GET /
```

#### Pagina Para Criação De Tarefas

```http
GET /criar
```

#### Pagina Para Atualização, Deleção e Alteração De Status De Uma Tarefa

```http
GET /tarefa/:id
```

| Parâmetro   | Tipo       | Descrição                                                             |
| :---------- | :--------- | :-------------------------------------------------------------------- |
| `id`        | `int`      | **Obrigatório**. Id da tarefa                                         |

## Prints e vídeos da aplicação em funcionamento
