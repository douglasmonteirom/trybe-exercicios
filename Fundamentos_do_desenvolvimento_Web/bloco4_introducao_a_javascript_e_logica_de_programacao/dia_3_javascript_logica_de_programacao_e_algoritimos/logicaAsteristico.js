//Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , 
//imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let imprime = '';

if (n > 1) {
    for (let index = 0; index < n; index++) {
        for (let index = 0; index < n; index += 1) {
            imprime += '*';
        }
        console.log(imprime);
        imprime = '';
    }
}

//Para o segundo exercício, faça o mesmo que antes, 
//mas que imprima um triângulo retângulo com 5 asteriscos de base. 

if (n > 1) {
    for (let index = 0; index < n; index += 1) {
        imprime += '*';
        console.log(imprime);
    }
    imprime = ''; // seta para o proximo exercicio.
}

//Agora inverta o lado do triângulo

let cont = 1;
let cont2 = 4;

for (let index = 0; index < n; index++) {
    for (let index = 0; index < n - cont; index++) {
        imprime += ' ';

    }
    for (let index = 0; index < n - cont2; index++) {
        imprime += '*';
    }
    cont++;
    cont2--;
    console.log(imprime);
    imprime = '';
}

