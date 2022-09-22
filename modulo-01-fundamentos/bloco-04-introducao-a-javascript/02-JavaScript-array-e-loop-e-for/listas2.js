// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// let searchForFirstTask = tasksList[0];
// console.log(searchForFirstTask);
// // Tomar café

// let searchForLastTask = tasksList[tasksList.length - 1];
// console.log(searchForLastTask);
// // Brincar com o cachorro

// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// console.log(tasksList.length);
// 3


let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa

for(let index = 0; index < tasksList.length; index +=1){
    console.log(tasksList[index]);
}

console.log(tasksList.length);


let indexOfTask = tasksList.indexOf('Brincar com o cachorro')
console.log(indexOfTask);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// .push() adiciona item no final da lista.
// .unshift() aidciona item no inicio da lista.
// .pop() remove a última tarefa.
// .indexOf() procura intem no array.