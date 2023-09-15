//atribui o valor da tag h1 para a variável título
let titulo = document.querySelector("h1").textContent;
//mostra no console do navegador a variável título
console.log(titulo);
//modifica o valor o titulo para a frase "Fica grandão"
titulo.textContent = "Fica grandão birllll";

//---------aqui vamo mexer na tebal e imc----
//armazena na variável paciente as inormações do prin
let pacientes = document.querySelectorAll(".paciente");
//console.log (paciente);
//loop for para percorrer o array
for(let i = 0; i <10; i++){
  let paciente = pacientes[i];
  console.log(paciente);
  console.log("o valor de i é:" +i);//armazena somente as colunas de peso e altura
  let tdPeso = paciente.querySelector(".info-peso");
  let tdAltura = paciente.querySelector(".info-altura")
  //armazena somente de texto de peso e altura
  let peso = tdPeso.textContent;
  let altura = tdAltura.textContent;
  
  
  //acessa a colune imc e altera o valor para o resultado
  let tdImc = paciente.querySelector(".info-imc");
  
  
  //validação dos dados
  let pesoEhValido = true;
  let alturaEhValida = true;
  
  if(peso < 0 || peso > 1000){
    console.log("Peso inválido!");
    //tdImc. textContent =  "Peso inválido!";
    pesoEhValido = false;
  }
  if(altura < 0 || altura > 3){
      console.log("Altuea inválida!");
      //tdImc. textContent =  "Altura inválida!";
      alturaEhValida = false;
    }
  
  if( pesoEhValido === true && alturaEhValida === true){
      //realiza o calculo do imc 
      let imc = peso / (altura * altura )
      console.log (imc);
      tdImc.textContent  = imc.toFixed(2);
  } else {
    //informa que os valores informados para peso e/ou altura
      tdImc.textContent = "Peso e/ou altura inválidos!";
  }
}

    
 