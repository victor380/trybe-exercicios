//GERA NÚMERO ALEATÓRIO
// console.log(Math.ceil(Math.random()*60));
// console.log(Math.floor(Math.random()*60));

// console.log(Math.random(10.00001));
// console.log(Math.random(10.99999));


//MEGA-SENA

// Sorteio dos números
let firstNumber = Math.ceil(Math.random()*60);
let secondNumber = Math.ceil(Math.random()*60);
let thirdNumber = Math.ceil(Math.random()*60);
let fourthNumber = Math.ceil(Math.random()*60);
let fifthNumber = Math.ceil(Math.random()*60);
let sixNumber = Math.ceil(Math.random()*60);

let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, 
    fourthNumber, fifthNumber, sixNumber];

// for(let index =0; index <6; index =+ 1){
//     lotteryNumbers.push(Math.ceil(Math.random()*60))
// }

// Meu jogo
let firstGame = [7, 25, 12, 40, 26, 45];

// Comparação do sorteio com o meu jogo
let numberOfhits = 0;
let hits = [];

for(let indexLottery = 0; indexLottery < lotteryNumbers.length;
    indexLottery += 1){
    for(let indexGame = 0; indexGame < firstGame.length; indexGame +=1){
        if(lotteryNumbers[indexLottery] === firstGame[indexGame]){
            numberOfhits += 1;
            hits.push(lotteryNumbers[indexLottery]);
    }

    }
}

// Quantidade de acertos
console.log('Números de acertos', lotteryNumbers);
console.log('Jogo', firstGame);
console.log('Número de acertos:', numberOfhits);
console.log('Número de Hits:', hits);