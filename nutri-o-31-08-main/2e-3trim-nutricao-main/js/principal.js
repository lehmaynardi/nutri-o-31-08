//atribui o valor da tag h1 para a variável título
let titulo = document.querySelector("h1").textContent;
//mostra no console do navegador a variável título
console.log(titulo);
//modifica o valor o titulo para a frase "Fica grandão"
titulo.textContent = "Fica grandão birllll";

//---------aqui vamo mexer na tebal e imc----

let paciente = document.querySelector("#primeiro-paciente");
console.log (paciente);

let tdPeso = paciente.querySelector(".info-peso");
let tdAltura = paciente.querySelector(".info-altura")

console.log()

let peso = tdPeso.textContent;
let altura = tdAltura = tdAltura.textContent;


let tdImc = paciente.querySelector(".info-imc");


//validação dos dados
let pesoEhValido = true;
let alturaEhValia = true;

if(peso < 0 || peso > 1000){
  console.log("Peso inválido!");
  tdImc. textContent =  "Peso inválido!";
  pesoEhValido = false;
}
if(altura < 0 || altura > 3){
    console.log("Altuea inválida!");
    tdImc. textContent =  "Altura inválida!";
    alturaEhValida = false;
  }

if( pesoEhValido === true && alturaEhValida === true){
    //realiza o calculo do imc 
    let imc = peso / (altura * altura )
    console.log (imc);
    tdImc.textContent  = imc;
} else {
    tdImc.textContent = "Peso e/ou altura inválidos!";
}
    
 