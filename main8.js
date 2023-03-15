function multiplicar() {
    var num1 = parseInt(document.getElementById("num1").value, 16);
    var num2 = parseInt(document.getElementById("num2").value, 16);
    var resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "El resultado es: " + resultado.toString(16);
  }
  