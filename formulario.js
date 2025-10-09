//acessar botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//o que acontece quando clica
botaoAdicionar.addEventListener ('click', function(event){
    event.preventDefault();
    
    //acessa formulario
var formulario = document.querySelector("#form-adiciona");
console.log(formulario);

//caça os valores
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

//cria tag Tr
var PacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("Td");

//adiciona os valores
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

//adiciona as tags na tela do usuário
    PacienteTr.appendChild(nomeTd);
    PacienteTr.appendChild(pesoTd);
    PacienteTr.appendChild(alturaTd);
    PacienteTr.appendChild(gorduraTd);
    PacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(PacienteTr);

});