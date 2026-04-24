# ⚡ TitanGamer X-Pro | Premium Landing Page

<p align="center">
  <img src="./public/cover.png" alt="Capa TitanGamer" width="100%">
</p>

> Desenvolvi essa Landing Page para simular o lançamento de um notebook gamer de altíssimo nível. O foco aqui foi brincar com o visual, testar animações fluidas e montar uma estrutura visual focada 100% em conversão e experiência do usuário (UX).

---

## 💻 Sobre o Projeto

A ideia do **TitanGamer X-Pro** era sair do básico e criar algo que passasse a mesma sensação de "força bruta" de um hardware premium. Construí a interface do zero, pensando em como o design poderia destacar os detalhes do produto usando as ferramentas mais recentes do ecossistema React. É um projeto focado em front-end, onde o desafio principal foi manter a performance lá em cima, mesmo com vários elementos visuais pesados.

---

## 📱 Responsividade: Web & Mobile

O layout foi pensado no modelo *Mobile First*. Ninguém quer ver um site quebrado no celular, então garanti que o design se adapte perfeitamente desde telas de smartphones até monitores ultrawide, sem perder o charme do neon e dos grids.

<p align="center">
  <img src="./public/desktop-preview.png" alt="Preview Desktop" width="75%">
  &nbsp;&nbsp;
  <img src="./public/mobile-preview.png" alt="Preview Mobile" width="20%">
</p>

---

## ✨ Principais Destaques

A página está cheia de detalhes e micro-interações para prender a atenção de quem navega:

* **🚀 Efeito Parallax 3D:** O notebook reage ao scroll da página, criando uma ilusão de profundidade super bacana usando a engine do Framer Motion.
* **💎 Glassmorphism e Neon UI:** Construí os cards e a navegação brincando com desfoque de fundo (backdrop-blur) sobre gradientes fortes (fúcsia e laranja). Dá aquela vibe clássica de iluminação RGB.
* **🖱️ Hover e Magnetismo:** Botões de CTA (Call to Action) e os cards de *features* têm pequenas animações magnéticas e brilhos que acompanham o mouse para incentivar o clique.
* **📱 Navbar Dinâmica:** O menu do topo é adaptativo e ajusta o fundo e o desfoque de acordo com o scroll da página, sem atrapalhar a visão do conteúdo.

---

## 🛠️ Tecnologias Utilizadas

A stack foi escolhida a dedo para segurar os 60fps nas animações e manter o código bem organizado:

* **Next.js 14** (App Router)
* **React.js**
* **Tailwind CSS v4** (Para aquela estilização utilitária rápida e sem dor de cabeça)
* **Framer Motion** (Responsável pela física e animações de scroll)
* **Lucide React** (Ícones leves e bonitos)

---

## ⚙️ Rodando o projeto localmente

Quer testar a fluidez das animações no seu PC? É só seguir o padrão:

```bash
# 1. Clone o repositório
git clone [https://github.com/devLeo3301/titangamer-lp.git](https://github.com/devLeo3301/titangamer-lp.git)

# 2. Acesse a pasta do projeto
cd titangamer-lp

# 3. Instale as dependências
npm install

# 4. Rode o servidor local
npm run dev