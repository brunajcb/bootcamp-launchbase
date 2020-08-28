// Dara bonificação de 500 reais
// se vendedor possuir 100 ou menos pontos
// mas deve possuir mais de 50 pontos

console.log(`Primeira etapa`)

const pontuacaoVendedor = 101
const tempoDeTrabalho = 3

if (pontuacaoVendedor>=50){
    console.log(`Parabéns sua pontuação foi de ${pontuacaoVendedor} pontos, você ganhou R$500 de bonificação`)
}else{
    console.log(`Infelizmente você não atingiu a pontuação mínima, por isso não ganhou a bonificação`)
}

// Dar bonificação de 1 dia de folga
// se o vendedor possuir mais de 150 pontos
// ou estiver no 4 mês de trabalho

console.log(`Segunda etapa`)

if (pontuacaoVendedor>=150 || tempoDeTrabalho==4){
    console.log(`Parabéns você ganhou 1 dia de folga`)
}else if (pontuacaoVendedor>=50 && pontuacaoVendedor<150 && tempoDeTrabalho<4) {
    console.log(`Parabéns você ganhou R$500,00 de bonificação`)
}else{
    console.log(`Infelizmente você não atingiu a pontuação mínima, nem possui o tempo mínimo de trabalho, por isso não ganhou a bonificação`)
}