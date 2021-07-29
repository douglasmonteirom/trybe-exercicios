let numeroA = 49;
let numeroB = 50;
let numeroC = 80;
let resultado;

//Adição (a + b)
resultado = numeroA + numeroB;
console.log(resultado);

//Subtração (a - b)
resultado = numeroA - numeroB;
console.log(resultado + '');

//Multiplicação (a * b)
resultado = numeroA * numeroB;
console.log(resultado + '');

//Divisão (a / b)
resultado = numeroA / numeroB;
console.log(resultado + '');

//Módulo (a % b)
resultado = numeroA % numeroB;
console.log(resultado + '');


//Faça um programa que retorne o maior de dois números. 
//Defina no começo do programa duas variáveis com os valores que serão comparados.

if(numeroB>numeroA){
    console.log('O maior é ' + numeroB)
}else{
    console.log('O maior é ' + numeroA)
}

//Faça um programa que retorne o maior de três números. 
//Defina no começo do programa três variáveis com os valores que serão comparados.
if(numeroA > numeroB && numeroA > numeroC){
    console.log('O maior é o numero A')
}else if(numeroB >numeroA && numeroB >numeroC){
    console.log('O maior é o numero B')
}else{
    console.log('O maior é o numero C')
}

//Faça um programa que, dado um valor definido numa variável, 
//retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

if(numeroA>0){
    console.log('Número positivo')
}else if(numeroA<0){
    console.log('Número negativo')
}else {
    console.log('O Número é zero')
}

//Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. 
//Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. 
//Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let angulos;

if(numeroA>0 && numeroB>0 && numeroC>0){
    if(numeroA+numeroB+numeroC == 180){
        angulos = true;
        console.log(angulos)
    }else{
        angulos = false;
        console.log('Existe algum angulo invalido')
    }
}else{
   angulos = false;
   console.log('Existe algum angulo invalido')
}

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
let pecaXadrez = 'Bispo';

switch (pecaXadrez.toLowerCase()){
    case 'peao':
        console.log(pecaXadrez);
        console.log('Anda apenas 1 casa para frente/tras ou lado');
        break;
    case 'bispo':
        console.log(pecaXadrez);
        console.log('Anda na diagonal');
        break;
    case 'torre':
        console.log(pecaXadrez);
        console.log('Anda para frente/tras ou lados');
        break;
    case 'rainha':
        console.log(pecaXadrez);
        console.log('Anda em qualquer posição');
        break;
    case 'rei':
        console.log(pecaXadrez);
        console.log('Anda apenas 1 casa em qualquer direção');
        break;
    default:
        console.log('Peça invalida');
}
