let habilidadesCarregadas = []
let vagasCarregadas = []
let habilidadesSelecionadas = []
const listaHabilidades = document.getElementById("tags-habilidades")

const formDados = document.getElementById("form-dados")

let quantidadeVagas = 2

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

    console.log(nome)
    console.log(idade)
    console.log(experiencia)
    habilidadesSelecionadas = []
    habilidadesFaltantes = !habilidadesSelecionadas

    document.querySelectorAll("input:checked").forEach(item => {
        // console.log(item.value)
        habilidadesSelecionadas.push(item.value)
    })


    // Validar que os inputs / habilidades estejam preenchidos
    if (habilidadesSelecionadas.length === 0) {
        let selecioneHabilidade = document.getElementById("selecioneHabilidade")
        selecioneHabilidade.style.opacity = "1"
        selecioneHabilidade.style.position = "relative"
        selecioneHabilidade.style.background = "rgb(121, 2, 2)"
        return
    } else {
        selecioneHabilidade.style.opacity = "0"
        selecioneHabilidade.style.display = "none"

        carregarVagas()
    }


})

async function carregarVagas() {

    // console.log("carregando lista")
    const resposta = await fetch("../assets/dados/vagas.json")
    // console.log("lista carregada")
    const dados = await resposta.json()
    // console.log(dados) // console para ver a lista de vagas


    vagasCarregadas = dados.map(dado => new Vaga(dado))

    // console.log(vagasCarregadas)

    mostrarVagas()
}

function mostrarVagas() {
    const mostrarTitulo = document.getElementById("section-vagas")
    const htmlVaga = document.getElementById("container-job")

    mostrarTitulo.classList.remove("hidden")

    htmlVaga.innerHTML = ""
    let renderizarLista = ""

    let vagasOrdenadas = [...vagasCarregadas]

    vagasOrdenadas.forEach(vaga => {
        vaga.compatibilidade = vaga.calcularCompatibilidade(habilidadesSelecionadas)
        const recomendacao = vaga.recomendacaoEstudos(habilidadesSelecionadas)
    })
    vagasOrdenadas.sort((a, b) => b.compatibilidade - a.compatibilidade)

    const vagaDestaque = vagasOrdenadas[0]

    mostrarDestaque(vagaDestaque)

    vagasOrdenadas.slice(1, quantidadeVagas + 1).forEach(vaga => {

        renderizarLista += `
                    <div class="container-card card">
                        <div class="job-card-sup">
                            <div class="job-card-img">
                                <div class="logo-vaga">
                                    <img src="${vaga.logo}" alt="">
                                </div>
                            </div>
                            <div class="job-infos">
                                <p class="empresa">${vaga.empresa}</p>
                                <h3 class="cargo-vaga">${vaga.cargo}</h3>
                                <div class="infos-contrato">
                                    <span class="tag-vaga bg-modelo">${vaga.modelo}</span>
                                    <span class="tag-vaga bg-salario">R$ ${vaga.salario.toLocaleString("pt-BR")}</span>
                                    <span class="tag-vaga bg-contrato">${vaga.contrato}</span>
                                </div>
                            </div>
                        </div>
                        <div class="requisitos">
            <h3 class="req-titulo">Requisitos:</h3>
           <p class="req-list">${vaga.habilidades.join(", ")}</p>
        </div>
                        <div class="compatibilidade">
                            <p class="comp-texto">Compatibilidade</p>
                            <div class="w3-round barra-bg barra">
                                <div class="w3-container w3-round barra-cor barra-txt" style="width:${vaga.compatibilidade}%">
                                    ${vaga.compatibilidade}%
                                </div>
                            </div>
                        </div>
                    </div>
            `
    })

    // console.log(`Compatibilidade: ${compatibilidade}%`)

    htmlVaga.innerHTML = renderizarLista
}

function mostrarDestaque(vaga) {
    const destaque = document.getElementById("section-destaque");
    const htmlDestaque = document.getElementById("destaque-job");

    destaque.classList.remove("hidden");

    htmlDestaque.innerHTML = `
        <div class="container-destaque card">
                        <div class="job-card-sup">
                            <div class="job-card-img">
                                <div class="logo-vaga">
                                    <img src="${vaga.logo}" alt="">
                                </div>
                            </div>
                            <div class="job-infos">
                                <p class="empresa">${vaga.empresa}</p>
                                <h3 class="cargo-vaga">${vaga.cargo}</h3>
                                <div class="infos-contrato">
                                    <span class="tag-vaga bg-modelo">${vaga.modelo}</span>
                                    <span class="tag-vaga bg-salario">R$ ${vaga.salario.toLocaleString("pt-BR")}</span>
                                    <span class="tag-vaga bg-contrato">${vaga.contrato}</span>
                                </div>
                            </div>
                        </div>
                        <div class="requisitos">
            <h3 class="req-titulo">Requisitos:</h3>
           <p class="req-list">${vaga.habilidades.join(", ")}</p>
        </div>
                        <div class="compatibilidade">
                            <p class="comp-texto">Compatibilidade</p>
                            <div class="w3-round barra-bg barra">
                                <div class="w3-container w3-round barra-destaque destaque-txt" style="width:${vaga.compatibilidade}%">
                                    ${vaga.compatibilidade}%
                                </div>
                            </div>
                        </div>
                    </div>
    `
}



function mostrarMais() {
    const btnMais = document.getElementById("btn-mais")
    if (quantidadeVagas >= vagasCarregadas.length) {
        btnMais.style.display = "none"
    } else {
        quantidadeVagas += 2
        carregarVagas()
    }
}


class Vaga {
    constructor(dado) {
        this.logo = dado.logo
        this.empresa = dado.empresa
        this.cargo = dado.cargo
        this.salario = dado.salario
        this.modelo = dado.modelo
        this.contrato = dado.contrato
        this.habilidades = dado.habilidades
    }
    calcularCompatibilidade(habilidadesCandidato) {
        let habilidadesCompativeis = 0

        console.log(`Habilidades Necessárias: ${this.habilidades}`)
        console.log(`Habilidades Preenchidas: ${habilidadesSelecionadas}`)

        this.habilidades.forEach(habilidade => {

            console.log("Comparando:", habilidade)

            if (habilidadesCandidato.includes(habilidade)) {
                habilidadesCompativeis++
                console.log("Encontradas!")
            }
        })
        return Math.round(
            habilidadesCompativeis / this.habilidades.length * 100
        )
    }
    recomendacaoEstudos(habilidadesSelecionadas) {
        return this.habilidades.filter(habilidade =>
            !habilidadesSelecionadas.includes(habilidade)
        )
    }
}