
function pegarValor (ValorAtual)
{
   var valor =  ValorAtual.innerHTML;
   console.log(valor);
 return  valor;
}
var botaoPasse = document.querySelector("#teste")
botaoPasse.addEventListener("click", function(event) {

    event.preventDefault();
    var ValorAtual = document.querySelector("#valor");
    var valorpass= pegarValor(ValorAtual);
    var calc = 0;
    var pass = 4.10;

    var calc = valorpass-pass;
  
	 if(calc<0)
	 {
		ValorAtual.innerHTML = 0.00.toFixed(2);
	 }
	 else{

		ValorAtual.innerHTML = calc.toFixed(2);
	 }

 IniciarCronometro('start');

	});

	var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var minuto = 0;
var segundo = 0;

function IniciarCronometro(valor){
	this.evento = valor;
	this.configMinuto = document.getElementById('min').value;
	this.configSegundo = document.getElementById('seg').value;
	this.mostrarValor = document.getElementById('mostrarValor');
	
	
	if (evento=="start"){
		if(!document.getElementById('min').readOnly){
			if(!this.validarNumero(this.configMinuto)){
				alert("Campo minuto não é um número!");
				return;
			}
			if(!this.validarNumero(this.configSegundo) || document.getElementById('seg').value > 59){
				alert("Campo segundo não é um número válido (0 a 59)!");
				return;
			}
			
			document.getElementById('min').readOnly = true;
			document.getElementById('seg').readOnly = true;

			this.minuto = document.getElementById('min').value;
			this.segundo = document.getElementById('seg').value;
			
			document.getElementById('mostrarValor').classList.remove('mostrarValor');
			document.getElementById('mostrarValor').classList.add('mostrarValor2');
			document.getElementById('exibe').classList.remove('Classexibe');
			document.getElementById('exibe').classList.add('Classexibe2');
			
		}else{
			if(this.segundo == 0 && this.minuto != 0){
				this.segundo = 59;
				this.minuto--;
			}else{
				this.segundo--;
			}
			if(this.minuto == 0 && this.segundo == 0){
				document.getElementById('min').readOnly = false;
				document.getElementById('seg').readOnly = false;

				this.mostrarValor.value = "00:00";
				
				document.getElementById('mostrarValor').classList.remove('mostrarValor2');
				document.getElementById('mostrarValor').classList.add('mostrarValor');
				document.getElementById('exibe').classList.remove('Classexibe2');
				document.getElementById('exibe').classList.add('Classexibe');
			
				clearTimeout(this.contador);
				return;
			}	
			
			novoMinuto = null;
			novoSegundo = null;
			if(this.minuto <= 9){
				novoMinuto = "0" + this.minuto;
			}else{
				novoMinuto = this.minuto;
			}
			if(this.segundo <= 9){
				novoSegundo = "0" + this.segundo;
			}else{
				novoSegundo = this.segundo;
			}
			this.mostrarValor.value = novoMinuto + ":" + novoSegundo;
		}
	}
	clearTimeout(this.contador);
	this.contador = setTimeout('IniciarCronometro(evento)', 1000);
}

function validarNumero(valor){
	return !isNaN(parseFloat(valor)) && isFinite(valor);
}



