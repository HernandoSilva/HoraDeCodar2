function executarExercicio6() {
    let num = parseInt(prompt(`Digite o 1º número: `))
    let primeiro = num
    let maior = num

    for (let contadora = 2; contadora <= 3; contadora++) {
        num = parseInt(prompt(`Digite o ${contadora}º número: `))

        if (num > maior) {
            maior = num
        }
    }

    alert(`O primeiro número é: ${primeiro}.\nO último número é ${num}.\nO maior número é: ${maior}.`)
}