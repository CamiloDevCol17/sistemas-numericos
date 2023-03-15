function convertir() {
	let octal = document.getElementById("octalInput").value;
	let binario = parseInt(octal, 8).toString(2);
	let decimal = parseInt(octal, 8).toString(10);
	let hexadecimal = parseInt(octal, 8).toString(16).toUpperCase();
	let resultadosTable = document.getElementById("resultados");
	let resultadosRow = resultadosTable.insertRow();
	let binarioCell = resultadosRow.insertCell();
	binarioCell.innerHTML = binario;
	let decimalCell = resultadosRow.insertCell();
	decimalCell.innerHTML = decimal;
	let hexadecimalCell = resultadosRow.insertCell();
	hexadecimalCell.innerHTML = hexadecimal;
}
