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
![Captura de tela de 2025-07-07 21-18-44](https://github.com/user-attachments/assets/0e8c6697-aee4-4262-9597-8d10115b53a6)
![Captura de tela de 2025-07-07 21-18-48](https://github.com/user-attachments/assets/2829a8c1-c706-444e-9dc2-424d3a7bfecf)
![Captura de tela de 2025-07-07 21-18-54](https://github.com/user-attachments/assets/d314240b-27d4-49a9-bc6a-2ace99554fd4)
![Captura de tela de 2025-07-07 21-19-11](https://github.com/user-attachments/assets/0bf7cafe-9af2-4e40-ab0d-f5651e5f6115)
