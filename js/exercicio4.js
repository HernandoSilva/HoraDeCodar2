function executarExercicio4() {

    let valor = parseInt(prompt(`Informe o 1º número: `))
    let maior1 = valor
    let maior2 = valor

    for (let contadora = 2; contadora <= 3; contadora++) {
        valor = parseInt(prompt(`Informe o ${contadora}º número: `))

        if (valor > maior1) {
            maior1 = valor
        } else if (valor > maior2){
            maior2 = valor
        }
        

    }
    let soma = maior1 + maior2;

    alert(`A soma dos dois maiores valores é: ${soma}. E eles são: ${maior1} e ${maior2}`)
}