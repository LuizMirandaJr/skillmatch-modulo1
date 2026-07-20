export class Vaga {

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

        /* console.log(`Habilidades Necessárias: ${this.habilidades}`) */
        /* console.log(`Habilidades Preenchidas: ${habilidadesCandidato}`) */

        this.habilidades.forEach(habilidade => {

            /* console.log("Comparando:", habilidade) */

            if (habilidadesCandidato.includes(habilidade)) {
                habilidadesCompativeis++
                /* console.log("Encontradas!") */
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