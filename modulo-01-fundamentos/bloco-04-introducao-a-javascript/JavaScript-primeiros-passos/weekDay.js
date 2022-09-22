let weekDay = "sabado";
message = null;

if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira" )
{
    message = "Oba, mais um aprendizado na trybe";
}
else if(weekDay === "sabado" || weekDay === "domingo")
{
    message = "FINALMENTE, DESCANSO MERECIDO UwU";
}

console.log(message);
