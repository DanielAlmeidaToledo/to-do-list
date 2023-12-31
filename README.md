# Aplicação To-Do List em ReactJS

## Visão Geral

Bem-vindo à documentação da aplicação To-Do List em ReactJS! Esta aplicação permite aos usuários gerenciar suas tarefas diárias de forma eficiente, incluindo a capacidade de realizar login, adicionar novas tarefas, marcar tarefas como concluídas, remover tarefas da lista e filtrar tarefas com base no status.

## Pré-requisitos

Certifique-se de ter o Node.js e o Yarn instalados em sua máquina. Caso contrário, você pode baixá-los [aqui](https://nodejs.org/) e [aqui](https://yarnpkg.com/).

## Instalação

1. Clone o repositório do projeto:

    ```bash
    git clone https://github.com/seu-usuario/to-do-list.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd to-do-list
    ```

3. Instale as dependências:

    ```bash
    yarn install
    ```

4. Inicie a aplicação localmente:

    ```bash
    yarn dev
    ```

## Prototipação - Figma

https://www.figma.com/file/iR5asGnEZz4eKY7cLTR7Qm/To-Do-List?type=design&node-id=0%3A1&mode=design&t=0K14pl1aTxpOlpD9-1

![image](https://github.com/DanielAlmeidaToledo/to-do-list/assets/96501443/7eb87dd4-257a-4cc9-aabc-a3b017f379c9)

## Tecnologias

- React.JS
- Typescript
- MUI
- Axios
- React-router-dom
- Context
- Notistack
- Jest

## Funcionalidades

1. Login no Sistema: Acesse a aplicação com um login para diferenciar atividades por usuário.

2. Adicionar Nova Tarefa: Adicione novas tarefas à lista através do formulário de adição.

3. Marcar Tarefa como Concluída: Marque uma tarefa como concluída para acompanhar o progresso.

4. Remover Tarefa da Lista: Remova tarefas da lista quando não forem mais necessárias.

5. Filtrar Tarefas por Status: Utilize os filtros para exibir tarefas concluídas, pendentes ou todas.

## TypeScript

A aplicação é implementada utilizando TypeScript, proporcionando uma experiência de desenvolvimento mais robusta e evitando erros comuns.

## Integração com API Externa

A aplicação está integrada à API externa fornecida. Isso permite preencher tarefas automaticamente ou sincronizá-las conforme necessário.

## React Context e Storage

Os estados são gerenciados usando o contexto do React, evitando "prop drilling" e facilitando o compartilhamento de informações entre componentes. Além disso, o armazenamento local é utilizado para manter determinados itens entre sessões.

## Estilização

A aplicação utiliza a biblioteca @mui/material para estilização, proporcionando uma interface atraente e responsiva.
