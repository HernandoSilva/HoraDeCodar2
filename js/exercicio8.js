function executarExercicio8() {
    let soma = 0, media = 0, contadora2 = 0

    let nota = parseFloat(prompt(`Digite a 1º nota: `))

    for (var contadora = 2; contadora <= 4; contadora++) {
        nota = parseFloat(prompt(`Digite a ${contadora}º nota: `))

        if (nota >= 0 && nota <= 10) {
            soma += nota
        }

        contadora2++
    }
    media = soma / contadora2

    if (media >= 5) {
        alert(`Você passou no teste`)
    } else {
        alert(`tente novamente`)
    }
}