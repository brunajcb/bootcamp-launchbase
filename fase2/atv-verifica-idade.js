// Verificar se a idade é maior ou igual a 18
// Se sim, deixar entrar, se não, bloquear entrada
// se a pessoa tiver 17 anos
// avisar para voltar quando fizer 18 anos

const idade = 15

if (idade<18 && idade == 17){
    console.log(`Entrada bloqueada, volte quando fizer 18 anos`)
}else if (idade >= 18){
    console.log (`Entrada liberada`)
}else{
    console.log(`Entrada bloqueada! vá tirar a cantiga do mijo`)
}