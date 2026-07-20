export function mostrarHabilidades(listaHabilidades, habilidadesCarregadas) {

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

export function mostrarVagas(vagasCarregadas, habilidadesSelecionadas, quantidadeVagas) {
    const mostrarTitulo = document.getElementById("section-vagas")
    const htmlVaga = document.getElementById("container-job")

    mostrarTitulo.classList.remove("hidden")

    htmlVaga.innerHTML = ""
    let renderizarLista = ""

    let vagasOrdenadas = [...vagasCarregadas]

    vagasOrdenadas.forEach(vaga => {
        vaga.compatibilidade = vaga.calcularCompatibilidade(habilidadesSelecionadas)
    })
    vagasOrdenadas.sort((a, b) => b.compatibilidade - a.compatibilidade)

    const vagaDestaque = vagasOrdenadas[0]

    mostrarDestaque(vagaDestaque, habilidadesSelecionadas)


    vagasOrdenadas.slice(1, quantidadeVagas + 1).forEach(vaga => {

        const tagSkills = mostrarTagSkills(vaga, habilidadesSelecionadas)

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
                        <div class="container-skills">
            <h3 class="skills-titulo">Skill:</h3>
            <div class="skills-vaga">${tagSkills}</div>
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

export function mostrarDestaque(vaga, habilidadesSelecionadas) {
    const destaque = document.getElementById("section-destaque");
    const htmlDestaque = document.getElementById("destaque-job");

    const tagSkills = mostrarTagSkills(vaga, habilidadesSelecionadas)

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
                        <div class="container-skills">
            <h3 class="skills-titulo">Skill:</h3>
            <div class="skills-vaga">${tagSkills}</div>
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

export function mostrarTagSkills(vaga, habilidadesSelecionadas) {
    return vaga.habilidades.map(habilidade => {
        const possui = habilidadesSelecionadas.includes(habilidade)

        return `
        <span class="tag-skill ${possui ? "skill-ok" : "skill-falta"}">${habilidade}</span>
        `
    }).join("")

}