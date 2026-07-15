let habilidadesCarregadas = []
let vagasCarregadas = []
const formDados = document.getElementById("form-dados")

async function carregarHabilidades() {

    // console.log("carregando lista")
    const resposta = await fetch("../assets/dados/habilidades.json")
    // console.log("lista carregada")
    const dados = await resposta.json()
    //console.log(dados) // console para ver a lista de habilidades

    habilidadesCarregadas = dados

    mostrarHabilidades()
}

function mostrarHabilidades() {
    const listaHabilidades = document.getElementById("lista-habilidades")

    listaHabilidades.innerHTML = ""

    habilidadesCarregadas.forEach(habilidade => {
        const label = document.createElement("label")
        label.classList.add("checkbox-habilidade", "texto-habilidade")

        const input = document.createElement("input")
        input.type = "checkbox"
        input.value = habilidade.nome
        input.name = "habilidadeSelecionada"

        label.appendChild(input)
        label.append(habilidade.nome)


        listaHabilidades.appendChild(label)
    })
}

carregarHabilidades()



formDados.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const experiencia = document.getElementById("experiencia").value

    const habilidadesSelecionadas = document.querySelectorAll("input:checked")

    console.log(nome)
    console.log(idade)
    console.log(experiencia)

    habilidadesSelecionadas.forEach(item => {
        console.log(item.value)
    })
})

async function carregarVagas() {

    // console.log("carregando lista")
    const resposta = await fetch("../assets/dados/vagas.json")
    // console.log("lista carregada")
    const dados = await resposta.json()
    // console.log(dados) // console para ver a lista de vagas

    vagasCarregadas = dados

    function mostrarVagas() {
        const mostrarTitulo = document.getElementById("container-vagas")
        const htmlVaga = document.getElementById("container-job")

        mostrarTitulo.classList.remove("hidden")

        htmlVaga.innerHTML = ""
        let renderizarLista = ""


        vagasCarregadas.forEach(vaga => {
            renderizarLista += `
            <div class="container-card" id="container-card">
                    <div class="job-card" id="job-card">
                        <div class="job-card-sup">
                            <div class="job-card-img">
                                <div class="logo-vaga">
                                    <img src="${vaga.logo}" alt="">
                                </div>
                            </div>
                            <div class="job-infos">
                                <p id="empresa" class="empresa">${vaga.empresa}</p>
                                <h3 id="cargo-vaga" class="cargo-vaga">${vaga.cargo}</h3>
                                <div class="infos-contrato">
                                    <span id="modelo" class="tag-vaga bg-modelo">${vaga.modelo}</span>
                                    <span id="salario" class="tag-vaga bg-salario">${vaga.salario}</span>
                                    <span id="contrato" class="tag-vaga bg-contrato">${vaga.contrato}</span>
                                </div>
                            </div>
                        </div>
                        <div class="compatibilidade">
                            <p id="compatibilidade" class="comp-texto">Compatibilidade</p>
                            <div id="barra-bg" class="w3-round barra-bg barra">
                                <div id="barra-txt" class="w3-container w3-round barra-cor barra-txt" style="width:25%">
                                    25%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
        })

        htmlVaga.innerHTML = renderizarLista
    }
    mostrarVagas()
}

carregarVagas()
