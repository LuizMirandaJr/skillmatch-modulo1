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

}

carregarVagas()
