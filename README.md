# Portfólio Dev Noshi

Este repositório contém o site pessoal e portfólio do **Dev Noshi**, desenvolvido com HTML5, CSS3 e JavaScript. O site apresenta informações sobre o desenvolvedor, projetos realizados e blog com artigos.

---

## Estrutura do Projeto

- `index.html` – Página principal
- `portfolio.html` – Página de portfólio
- `blog.html` – Página de blog
- `sobre.html` – Página Sobre Mim
- `css/style.css` – Estilos gerais
- `js/script.js` – Menu mobile e toggle de tema
- `imgs/` – Imagens do site
- `README.md` – Este arquivo

---

## Funcionalidades e Alterações Principais

### Menu e Navegação
- Menu responsivo com botão toggle para mobile.
- Fechamento automático ao clicar fora do menu.
- Classes envolvidas: `.menu-toggle`, `.menu`, `.show`, `.header-nav`.

### Modo Dark / Light Persistente
- Botão toggle (`#theme-toggle`) alterna entre temas claro e escuro.
- Persistência do tema usando **localStorage**.

### Banner Inicial
- Nova div `.banner-container` com imagem (`.banner-image`) cobrindo toda a largura.
- Hover suave com leve zoom.
- Responsivo em todas as telas.

### Hero Section
- Hero redesenhado com layout profissional:
  - `.hero-content` (container flexível)
  - `.hero-text` (título, descrição e botão)
  - `.hero-image` (imagem decorativa)
- Responsivo: empilha conteúdo no mobile.

### Projetos em Destaque
- Cards de projeto otimizados:
  - `.card-image` → imagem
  - `.card-content` → título, descrição e botão
- Layout responsivo e clean.
- Classes originais mantidas: `.grid`, `.card`, `.btn-portfolio`.

### Blog
- Cards com título, descrição e botão “Ler artigo”.
- Classes novas: `.blog-detalhes`, `.detalhe-item`.
- Layout vertical e responsivo.

### Sobre Mim
- Estrutura profissional com habilidades e contatos.
- Classes novas adicionadas para organização sem impactar CSS existente.

---

## Possíveis Melhorias Futuras

- Adicionar **animações suaves** ao scroll e transições de cards.
- Implementar **lazy loading** para imagens, melhorando performance.
- Criar uma **seção de depoimentos ou feedbacks** de clientes/projetos.
- Adicionar **SEO básico** e meta tags para redes sociais.
- Integrar **formulário de contato funcional** com backend ou email direto.
- Melhorar **acessibilidade** (contrast ratio, navegação via teclado, ARIA labels).

---

## Como Executar

1. Clone o repositório:
```bash
git clone https://github.com/SeuUsuario/portfolio-dev-noshi.git
