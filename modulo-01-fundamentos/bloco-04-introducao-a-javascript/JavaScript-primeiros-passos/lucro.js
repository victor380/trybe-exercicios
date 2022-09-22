const valorProduto = 20;
const valorVenda = 40;
const impostoProduto = 20/100 * 20;

const custoTotal = valorProduto + impostoProduto;

const lucro = (valorVenda - custoTotal) *1000 ;

if(valorProduto <= 0 || valorVenda <= 0){
    console.log("ERRO!");
}else{
    console.log("o lucro da empresa foi " + lucro);
}
