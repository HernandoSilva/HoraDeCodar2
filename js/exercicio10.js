function executarExercicio10(){
    let altura = parseFloat(prompt(`Informe sua altura: `))
    let sexo = prompt(`Informe seu sexo: `)
    let ideal = 0

    if(sexo == "masculino" || sexo == "m"){
        ideal = (72.7 * altura) - 58
    }else{
        ideal = (62.1 * altura) - 44.7
    }

    alert(`Seu peso ideal é: ${ideal.toFixed(2)}`)
}