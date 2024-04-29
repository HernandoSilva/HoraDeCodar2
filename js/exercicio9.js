function executarExercicio9() {
    let ano = parseInt(prompt(`Digite seu ano de nascimento: `))
    let anoAtual = 2024 

    if (anoAtual - ano >= 18) {
        alert(`Pode votar.`)
    } else {
        alert(`Não pode votar.`)
    }

}