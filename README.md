# 💼 SkillMatch

O **SkillMatch** é uma aplicação web desenvolvida com JavaScript que compara as habilidades de um candidato com os requisitos de diferentes vagas de emprego.

O objetivo do projeto é facilitar a visualização das vagas mais compatíveis com o perfil do usuário, calculando automaticamente a porcentagem de compatibilidade com base nas habilidades selecionadas.

Este projeto foi desenvolvido como etapa final do módulo 1 do curso de Desenvolvimento Front-end | React do SC Tec para praticar conceitos de JavaScript com o uso de Classes, manipulação do DOM e Programação Orientada a Objetos (POO).

---

# 🚀 Funcionalidades

* Formulário para captação de informações do candidato.
* Seleção de habilidades por meio de checkboxes.
* Carregamento das habilidades e vagas através de arquivos JSON.
* Cálculo automático da compatibilidade entre candidato e vaga.
* Ordenação das vagas da maior para a menor compatibilidade.
* Destaque para a vaga mais compatível.
* Exibição das habilidades exigidas da vaga e preenchidas pelo candidato
* Botão para carregar mais vagas.

---

# 📷 Demonstração

> *Link do video*

---

# 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* ES Modules
* JSON
* Fetch API

---

# 📁 Estrutura do projeto

```text
SkillMatch/
│
├── assets/
│   │── dados/
│   │    ├── habilidades.json
│   │    └── vagas.json
│   │── imgs/
│   │    ├── hero-img.png
│   │    ├── logo-claro.png
│   │    └── logo-escuro.png
│   │── scripts/
│   │    ├── main.js
│   │    ├── ui.js
│   │    └── skillmatch.js
│   └── styles/
│       └── styles.css
│
└── index.html
```

### Organização dos arquivos JavaScript

**main.js**

Responsável pelo controle da aplicação.

* Carrega os arquivos JSON.
* Gerencia os eventos do formulário.
* Controla os dados do candidato.
* Faz a comunicação entre os módulos.

**ui.js**

Responsável pela interface.

* Renderiza as habilidades.
* Exibe as vagas.
* Mostra a vaga em destaque.
* Cria as tags de habilidades.
* Atualiza os elementos da tela.

**skillmatch.js**

Contém a classe `Vaga`, responsável pela lógica de negócio da aplicação.

* Criação das vagas.
* Cálculo da compatibilidade.
* Recomendação de estudos.

---

# ⚙️ Como funciona

1. O usuário preenche seus dados.
2. Seleciona as habilidades que possui.
3. O sistema carrega todas as vagas cadastradas.
4. Cada vaga é comparada com as habilidades selecionadas.
5. É calculada uma porcentagem de compatibilidade para cada vaga.
6. As vagas são ordenadas da maior para a menor compatibilidade.
7. A vaga com maior compatibilidade é exibida como destaque.

---

# 📚 Conceitos praticados

Durante o desenvolvimento deste projeto foram utilizados diversos conceitos importantes de JavaScript, como:

* Manipulação do DOM
* Eventos
* Fetch API
* Leitura de arquivos JSON
* Programação Orientada a Objetos (POO)
* Classes
* Métodos
* Arrays (`map`, `filter`, `forEach` e `sort`)
* Template Strings
* Modularização com ES Modules
* Organização de código em múltiplos arquivos

---

# 💡 Próximas melhorias

Algumas funcionalidades que podem ser adicionadas futuramente:

* Cadastro de novas vagas.
* Cadastro de empresas.
* Cadastro de candidatos.
* Banco de dados para armazenar informações.
* Sistema de login.
* Filtros por modalidade, salário e nível.
* Pesquisa por palavra-chave.
* Recomendações de cursos para habilidades que faltam.
* Responsividade para tablets e celulares.

---

# ▶️ Como executar o projeto

1. Clone este repositório.

```bash
git clone https://github.com/LuizMirandaJr/skillmatch-modulo1
```

2. Abra o projeto em um editor de código, como o Visual Studio Code.

3. Utilize uma extensão como **Live Server** para executar o projeto, pois os arquivos JSON são carregados utilizando a Fetch API.

4. Acesse a aplicação pelo navegador.

---

Link da aplicação online:
    https://skillmatch-modulo1-p2ys.vercel.app/

Link do video de funcionamento:

# 👨‍💻 Autor

Desenvolvido por **Luiz Junior** como projeto de estudos, com foco na prática de JavaScript moderno e desenvolvimento Front-end.
