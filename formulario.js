//acessar botão
var botaoAdicionar = document.querySelector("#adicionar-paciente");
//o que acontece quando clica
botaoAdicionar.addEventListener ('click', function(event){
    event.preventDefault();
    
    //acessa formulario
var formulario = document.querySelector("#form-adiciona");

var paciente = buscaValoresFormulario(formulario);

var PacienteTr = criarTr(paciente);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(PacienteTr);

});

function buscaValoresFormulario(){

//caça os valores
var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularImc(formulario.peso.value,formulario.altura.value)

}

return paciente;

}

function criarTr(paciente){

    //cria tag Tr
var PacienteTr = document.createElement("tr");
//cria tag Td
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("Td");

//adiciona os valores
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //adiciona as tags na tela do usuário
    PacienteTr.appendChild(nomeTd);
    PacienteTr.appendChild(pesoTd);
    PacienteTr.appendChild(alturaTd);
    PacienteTr.appendChild(gorduraTd);
    PacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes")
    tabela.appendChild(PacienteTr);

    return PacienteTr;

}
