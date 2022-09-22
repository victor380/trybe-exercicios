let prova = "reprovado";
let nota = null;

switch (prova){
    case "aprovada":
        nota = "Parabéns, você foi aprovada(o)!"
        break;

        case "lista":
        nota = "Você está na nossa lista de espera"
        break;

        case "reprovado":
        nota = "Você foi reprovada(o)"
        break;

        default:
        nota = "Informação incorreta"
        
}
console.log(nota);