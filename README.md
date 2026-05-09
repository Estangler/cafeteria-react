# ☕ Cafeteria React

Uma aplicação de carrinho de compras desenvolvida com React + TypeScript para praticar gerenciamento de estado com `useReducer` e `Context API`.

O projeto simula uma cafeteria online onde é possível:

* adicionar itens ao carrinho
* aumentar/diminuir quantidade
* remover produtos
* limpar carrinho
* finalizar pedido
* calcular total automaticamente

---

# 🚀 Tecnologias utilizadas

* React
* TypeScript
* Vite
* Tailwind CSS
* Context API
* useReducer

---

# 🧠 Conceitos praticados

## Gerenciamento de estado

O projeto foi construído focando principalmente em:

* `useReducer`
* ações e reducers
* estado imutável
* regras de negócio desacopladas
* Context API
* custom hooks
* derived state

---

# 📁 Estrutura do projeto

```bash
src/
 ├── components/
 ├── context/
 ├── data/
 ├── helpers/
 ├── reducer/
 ├── App.tsx
 └── main.tsx
```

---

# ⚙️ Arquitetura

O projeto utiliza:

## Context API

Responsável por disponibilizar o estado global do carrinho para toda a aplicação.

---

## useReducer

Responsável por centralizar toda a lógica de atualização do carrinho.

Exemplo de ações:

* `ADD_ITEM`
* `REMOVE_ITEM`
* `DELETE_ITEM`
* `CLEAR_CART`

---

## Helpers

A lógica de manipulação do carrinho foi extraída para funções auxiliares para deixar o reducer mais limpo e escalável.

---

## Custom Hook

Foi criado um hook personalizado:

```ts
useCart()
```

para facilitar o acesso ao contexto e evitar repetição de código.

---

# 🛒 Funcionalidades

✅ Adicionar produto ao carrinho
✅ Incrementar quantidade
✅ Decrementar quantidade
✅ Remover item
✅ Limpar carrinho
✅ Finalizar pedido
✅ Cálculo automático do total
✅ Estado global com Context API

---

# 🎯 Objetivo do projeto

O principal objetivo desse projeto foi praticar:

* arquitetura React
* gerenciamento de estado
* componentização
* tipagem com TypeScript
* separação de responsabilidades
* boas práticas de frontend

---

# ▶️ Como rodar o projeto

## Clone o repositório

```bash
git clone https://github.com/Estangler/cafeteria-react
```

---

## Acesse a pasta

```bash
cd cafeteria-react
```

---

## Instale as dependências

```bash
npm install
```

---

## Rode o projeto

```bash
npm run dev
```

---

# 📸 Preview

> <img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/1518c7d9-ae27-44e8-9a22-ef2d9565a7e6" />

> <img width="1919" height="972" alt="image" src="https://github.com/user-attachments/assets/8bacf9ac-f259-4f6c-bc7e-1708a10649da" />

><img width="1919" height="974" alt="image" src="https://github.com/user-attachments/assets/199128e2-0fc9-47ff-9839-470400e43bb7" />




---

# 📚 Aprendizados

Durante o desenvolvimento desse projeto foram praticados conceitos importantes do ecossistema React como:

* reducers
* estado global
* Context API
* imutabilidade
* derived state
* custom hooks
* componentização
* arquitetura frontend

---

# 🔮 Melhorias futuras

* Persistência com localStorage
* Toasts de feedback
* Testes automatizados
* Responsividade aprimorada
* Integração com backend
* Animações
* Sistema de autenticação

---

# 👨‍💻 Autor

Desenvolvido por Estangler.
