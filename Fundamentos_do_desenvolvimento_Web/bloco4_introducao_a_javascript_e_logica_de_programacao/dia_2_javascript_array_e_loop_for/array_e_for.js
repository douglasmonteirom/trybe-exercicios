let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Nesse primeiro exercício, 
//percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

for(let number of numbers){
    console.log(number)
}

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma=0;

for(let number of numbers){
    soma+=number;
}
console.log(soma);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let media = soma/numbers.length
console.log(media)


//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". 
//Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media>20){
    console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20')
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numCompara=0;
for(let index=0;index<numbers.length;index+=1){
    if(numbers[index]>numCompara){
        numCompara=numbers[index]
    }
}
console.log(numCompara);

//Descubra quantos valores ímpares existem no array e imprima o resultado. 
//Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numImpar=0;
for(let index=0;index<numbers.length;index+=1){
    if(numbers[index]%2 ==! 0){
        numImpar+=1;
    }
}
if(numImpar>0){
    console.log(numImpar) ;
}else{
    console.log('nenhum valor ímpar encontrado')
}

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numComparaMenor=numbers[0];
for(let index=1;index<numbers.length;index+=1){
    if(numbers[index]<numComparaMenor){
        numComparaMenor=numbers[index]
    }
}
console.log(numComparaMenor);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numeros=[];
for(let index=0;index<25;index+=1){
    numeros.push(index+1);    
}
console.log(numeros)

//Utilizando o array criado no exercício anterior 
//imprima o resultado da divisão de cada um dos elementos por 2 .

for(let divide of numeros){
    console.log(divide/2)
}

