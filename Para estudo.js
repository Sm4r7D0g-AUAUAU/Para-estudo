alert ("Bem vindo ao HEMOBR");
let idade;
let nome;
function gerarProtocolo(){
    const timestamp = new Date().getTime();
    return `${timestamp}`;
}
console.log(gerarProtocolo());
nome = prompt ("Digite seu nome e sobrenome")
idade = prompt("Qual sua idade ?");
if (idade >= 18){
    alert (`Parabéns ${nome}, você completou o seu cadastro e seu protocolo de acesso para agendamento de sua doação é ${gerarProtocolo()}`);
}else{
    alert("Você não tem idade mínima para realizar este processo");
}