function convertir() {
	let decimal = document.getElementById("decimalInput").value;
	let binario = parseInt(decimal, 10).toString(2);
	let octal = parseInt(decimal, 10).toString(8);
	let hexadecimal = parseInt(decimal, 10).toString(16).toUpperCase();
	let resultadosTable = document.getElementById("resultados");
	let resultadosRow = resultadosTable.insertRow();
	let binarioCell = resultadosRow.insertCell();
	binarioCell.innerHTML = binario;
	let octalCell = resultadosRow.insertCell();
	octalCell.innerHTML = octal;
	let hexadecimalCell = resultadosRow.insertCell();
	hexadecimalCell.innerHTML = hexadecimal;
}
