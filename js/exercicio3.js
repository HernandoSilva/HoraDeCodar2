function executarExercicio3() {
    let valor, maior = 0;

    for (let contadora = 1; contadora < 4; contadora++) {
        valor = parseInt(prompt(`Informe o ${contadora}º número: `))

        if (valor > maior) {
            maior = valor
        }
    }

    alert(`O maior número digitado é: ${maior}.`)

}