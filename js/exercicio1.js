function executarExercicio1(){
    let numero1 = parseFloat(prompt(`Digite um número: `))
    let numero2 = parseFloat(prompt(`Digite outro número: `))
    let maior, menor;

    if(numero1 > numero2){
        maior = numero1
        menor = numero2
    } else{
        maior = numero2
        menor = numero1
    }

    alert(`O maior número é ${maior}, e o menor ${menor}.`)
}