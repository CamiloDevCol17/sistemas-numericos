function sumarBinarios(binario1, binario2) {
	let resultado = "";
	let carry = 0;
	for (let i = binario1.length - 1; i >= 0; i--) {
		let bit1 = parseInt(binario1.charAt(i));
		let bit2 = parseInt(binario2.charAt(i));
		let suma = bit1 + bit2 + carry;
		if (suma === 2) {
			resultado = "0" + resultado;
			carry = 1;
		} else if (suma === 3) {
			resultado = "1" + resultado;
			carry = 1;
		} else {
			resultado = suma.toString() + resultado;
			carry = 0;
		}
	}
	if (carry === 1) {
		resultado = "1" + resultado;
	}
	return resultado;
}

function restarBinarios(binario1, binario2) {
	let resultado = "";
	let carry = 0;
	for (let i = binario1.length - 1; i >= 0; i--) {
		let bit1 = parseInt(binario1.charAt(i));
		let bit2 = parseInt(binario2.charAt(i));
		let resta = bit1 - bit2 - carry;
		if (resta === -1) {
			resultado = "1" + resultado;
			carry = 1;
		} else if (resta === -2) {
			resultado = "0" + resultado;
			carry = 1;
		} else {
			resultado = resta.toString() + resultado;
			carry = 0;
		}
	}
	if (carry === 1) {
		resultado = "No es posible realizar la operación";
	}
	return resultado;
}

function calcular() {
	let numero1 = document.getElementById("numero1").value;
	let numero2 = document.getElementById("numero2").value;
	let operacion = document.getElementById("operacion").value;
	let resultado = "";
	if (operacion === "sumar") {
		resultado = sumarBinarios(numero1, numero2);
	} else {
		resultado = restarBinarios(numero1, numero2);
	}
	document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}
