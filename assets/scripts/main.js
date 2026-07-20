import { Vaga } from "./skillmatch.js"
import { mostrarHabilidades, mostrarVagas } from "./ui.js"

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

    mostrarHabilidades(listaHabilidades, habilidadesCarregadas)
}

carregarHabilidades()


formDados.addEventListener("submit", (event) => {
    event.preventDefault()

    const nome = document.getElementById("nome").value
    const idade = document.getElementById("idade").value
    const experiencia = document.getElementById("experiencia").value

    /* console.log(nome) */
    /* console.log(idade) */
    /* console.log(experiencia) */

    habilidadesSelecionadas = []

    document.querySelectorAll("input:checked").forEach(item => {
        // console.log(item.value)
        habilidadesSelecionadas.push(item.value)
    })

    let selecioneHabilidade = document.getElementById("selecioneHabilidade")

    // Validar que os inputs / habilidades estejam preenchidos
    if (habilidadesSelecionadas.length === 0) {
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

    mostrarVagas(vagasCarregadas, habilidadesSelecionadas, quantidadeVagas)
}

window.mostrarMais = function () {
    quantidadeVagas += 2

    mostrarVagas(vagasCarregadas, habilidadesSelecionadas, quantidadeVagas)
}