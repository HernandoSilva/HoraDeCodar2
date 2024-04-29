function executarExercicio5() {
    let soma = 0, media = 0, contadora2 = 0
    let informados = []

    let num = parseFloat(prompt(`Informe o 1º número: `))
    informados.push(num); //adiciona o primeiro numero para o array dos numeros informados

    for (var contadora = 2; contadora <= 6; contadora++) {
        num = parseFloat(prompt(`Informe o ${contadora}º número: `))
        informados.push(num); // adiciona o resto para o array

        soma += num
        contadora2++
    }

    media = soma / contadora2


    //array informando os numeros inseridos
    let numerosInformados = "Números informados: ";

    for (let i = 0; i < informados.length; i++) {
        numerosInformados += informados[i];
        if (i < informados.length - 1) {
            numerosInformados += ", ";
        }
    }

    alert(`${numerosInformados}.\n A média dos números informados é: ${media}`)
}