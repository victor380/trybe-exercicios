const a = 115;
const b = 531;
const c = 345;
maior = null;

if (a > b && a > c){
    maior = "A é o maior número";
}else if (b > a && b > c){
    maior = "B é o maior número";
}else if (c > a && c > b){  
    maior = "C é o maior número";
}

console.log(maior);