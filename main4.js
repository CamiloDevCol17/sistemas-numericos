function convertir() {
	let hexadecimal = document.getElementById("hexInput").value;
	let binario = parseInt(hexadecimal, 16).toString(2);
	let octal = parseInt(hexadecimal, 16).toString(8);
	let decimal = parseInt(hexadecimal, 16);
	let resultadosTable = document.getElementById("resultados");
	let resultadosRow = resultadosTable.insertRow();
	let binarioCell = resultadosRow.insertCell();
	binarioCell.innerHTML = binario;
	let octalCell = resultadosRow.insertCell();
	octalCell.innerHTML = octal;
	let decimalCell = resultadosRow.insertCell();
	decimalCell.innerHTML = decimal;
}
