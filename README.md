# TITANGAMER X-PRO | Premium Hardware Landing Page

<p align="center">
  <img src="./public/cover.png" alt="Capa TitanGamer" width="100%">
</p>

> Uma imersão visual de alta performance para hardware entusiasta, moldada com Next.js e engenharia de animação avançada.

---

## 📖 Sobre
O **TitanGamer X-Pro** foi projetado para elevar o padrão de Landing Pages de hardware. O objetivo foi criar uma interface que não apenas mostrasse um produto, mas transmitisse a sensação de potência e tecnologia de ponta através de uma estética *Neon-Cyber* e *Glassmorphism*.

O maior desafio técnico foi manter a fluidez de 60 FPS (quadros por segundo) enquanto múltiplos efeitos de parallax e filtros de desfoque de fundo (backdrop-blur) são processados simultaneamente durante o scroll.

---

## 🛠 Tecnologias
Stack selecionada para garantir fidelidade visual absoluta e performance extrema:
* **Framework:** Next.js 14 (App Router)
* **Estilização:** Tailwind CSS v4 (Design System customizado)
* **Animações:** Framer Motion (Física de scroll e Parallax 3D)
* **Ícones:** Lucide React

---

## 🖥️ Experiência Desktop (Showcase)
Para a versão Desktop, foquei na exploração da largura total da tela (Ultrawide support). Implementei um sistema de profundidade onde os componentes do hardware reagem de forma assimétrica ao scroll do usuário, criando um efeito de "explosão controlada" do produto.

![preview-desktop](./public/desktop-preview.png)

---

## 📱 Estratégia Mobile-First
No mobile, a narrativa foi adaptada para a verticalidade. Substituí efeitos magnéticos de mouse por interações baseadas em toque e otimizei o peso das animações para garantir que a experiência seja suave mesmo em dispositivos com processamento limitado. O layout utiliza `Snap Scroll` para garantir que o usuário sempre pare nos pontos de conversão principais.

![preview-mobile](./public/mobile-preview.png)

---

## ✨ Destaques e Funcionalidades
* **🚀 Parallax de Hardware:** Decomposição visual do produto durante a rolagem da página.
* **💎 Glassmorphism Premium:** Interfaces com múltiplas camadas de transparência e reflexos neon.
* **🖱️ Micro-interações Magnéticas:** Botões e elementos de UI que reagem à proximidade do cursor.
* **📱 UI Adaptativa:** Navegação que altera sua densidade visual baseada na velocidade do scroll.

---

## 🚀 Instalação
Siga o passo a passo para rodar o ambiente de desenvolvimento localmente:

```bash
# 1. Clone o repositório
git clone [https://github.com/devLeo3301/titangamer-lp.git](https://github.com/devLeo3301/titangamer-lp.git)

# 2. Acesse a pasta do projeto
cd titangamer-lp

# 3. Instale as dependências
npm install

# 4. Rode o servidor local
npm run dev