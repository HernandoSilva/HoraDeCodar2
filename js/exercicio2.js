function executarExercicio2() {

    let valor = parseInt(prompt(`Digite um valor inteiro: `))

    if (valor > 0) {
        alert(`O número ${valor} é positivo.`)
    } else if (valor < 0) {
        alert(`O número ${valor} é negativo.`)
    } else {
        alert(`O numero é zero.`)
    }
}