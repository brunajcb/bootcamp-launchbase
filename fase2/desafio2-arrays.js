// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260,
    }
};

// Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:
// A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

// -x-
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
//Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

const programador = {
    nome: "Bruna",
    idade: 28,
    tecnologias:[
        {
            nome: "Javascript",
            especialidade: "Backend"
        },
        {
            nome: "Python",
            especialidade: "Bots"
        },
    ]     
};

// Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

console.log(`A programadora ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);