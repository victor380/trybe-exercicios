//Percorra o array imprimindo todos os valores nele contidos
//  com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for(index = 0; index < numbers.length; index +=1){
    console.log('Os elementos são: ' + numbers[index]);
    // Some todos os valores contidos no array e imprima o resultado;
     soma += numbers[index];    
}
// Calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20,
console.log('A soma de todos os números do array é: ' + soma);
console.log('A média total do números de arrays é: ' + media);
//  imprima a mensagem: “valor maior que 20”. 
// Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if(media > 20){
    console.log('Média maior que 20')
}else if (media <= 20){
    console.log('valor menor ou igual a 20')
}
// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (indexx = 0; indexx < numbers.length; indexx +=1){
    if (numbers[indexx]> maior){
        maior = numbers[indexx];
    }   
}
console.log('O maior número do array é: ' + maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado.
//  Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impar = 0;

for(let index = 0; index < numbers.length; index +=1){
    if(numbers[index] & 1 === 1){
        impar = numbers[index];
        console.log('Números impares: ' + impar);
    }else if (impar === 0) {
        console.log('Nenhum valor ímpar encontrado');
    }
}
// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = 0;
for (index = 0; index < numbers.length; index +=1){
    if (numbers[index] < menor){
        menor = numbers[index];
    }   
}

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log('O menor número do array é: ' + menor);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de
//  cada um dos elementos por 2.
for (let index = 1; index < 26; index += 1){
    console.log('Numero: ' + index); 
    console.log('Numero divido por 2: ' + index/2);
}

