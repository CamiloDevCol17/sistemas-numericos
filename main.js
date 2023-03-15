function convertir() {
	var binary = document.getElementById("binary").value;

	// Convertir a octal
	var octal = parseInt(binary, 2).toString(8);
	document.getElementById("octal").innerHTML = octal;

	// Convertir a decimal
	var decimal = parseInt(binary, 2).toString(10);
	document.getElementById("decimal").innerHTML = decimal;

	// Convertir a hexadecimal
	var hexadecimal = parseInt(binary, 2).toString(16).toUpperCase();
	document.getElementById("hexadecimal").innerHTML = hexadecimal;
}
