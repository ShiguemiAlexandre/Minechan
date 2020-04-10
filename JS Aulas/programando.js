//Renda mensal desejada
let renda = '10000' //Renda desejada por mes
let dividendos = '0.74' //Dividendos que a empresa paga
let valor = '185' //Valor por contação
let valortotal = '22000' //Valor que vc tem no total e quer saber quanto ira ganhar por mês

const dinheirototal = renda/dividendos * valor //Dinheiro necessario para ter a renda mensal desejada
const magicnumber = valor/dividendos //equação para descobrir o magic number
const dinheirototalMG = magicnumber * renda //Dinheiro necessario para ter a renda desejada pelo magic number
const quantospormes =  valortotal / valor * dividendos //Quanto no total gera por mês

console.log('R$' + dinheirototal.toFixed(2)) //Quanto de dinheiro vc precisa para ter a renda mensal q deseja, por uma forma simples.
console.log(magicnumber) //Usado para descobrir o necessario para ter a renda mensal desejada por outros meios
console.log('R$' + dinheirototalMG.toFixed(2)) //Descobrir o quanto precisa para ter a renda mensal desejada por meio de Magic Number
console.log('R$' + quantospormes.toFixed(2)) //Descobrir o quanto ira dar por mês com um valor expecificado
