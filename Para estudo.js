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
    alert (`${nome}, você completou o seu cadastro e seu acesso para agendamento de sua doação será o protocolo ${gerarProtocolo()}`);
}else{
    alert(`${nome}, será necessário a presença do responsável legal no ato da doação, seu protocolo ${gerarPotocolo()}`);
}