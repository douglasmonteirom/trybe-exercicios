let numeroA = 55;
let numeroB = 25;
let numeroC = 35;
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