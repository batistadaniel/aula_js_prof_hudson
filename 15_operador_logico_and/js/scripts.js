var idade = 16;
var nome = "Joao";

if (nome == "Joao" && idade == 16) {
    console.log("O Joao pode entrar na sala de esgrima");
} else {
    console.log("Este nao e o Joao");
}

if (1 == 1  && 3 > 2 && true) {
    console.log("Passou");
} 

if (1 == 1  && 3 > 2 && true) {
    console.log("O Joao pode entrar na sala de esgrima");
} else if (nome == "Joao" && idade >= 14) {
    console.log("Aqui passa!");
}