const currentHour = 6;
message = null;

if(currentHour >= 22){
    message = "Não deveríamoms comer nada, é horar de dormir"
}else if(currentHour >= 18 && currentHour < 22){
    message = "Rango da noite, vammos jantar :D"
}else if(currentHour >= 14 && currentHour <= 18){
    message = "Vamos fazer um bolo pro café da tarde?"
}else if (currentHour >= 11 && currentHour <=14){
    message = "Horar do almoço!!!"
}else if (currentHour >= 4 && currentHour <= 11){
    message = "Hmmm, cheiro de café recém-passadp"
}

console.log(message);                 