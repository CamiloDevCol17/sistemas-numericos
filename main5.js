function multiplicar() {
    var binario1 = document.getElementById("binario1").value;
    var binario2 = document.getElementById("binario2").value;
    var resultado = binarioMultiplicacion(binario1, binario2);
    document.getElementById("resultado").value = resultado;
  }
  
  function binarioMultiplicacion(binario1, binario2) {
    var multiplicando = parseInt(binario1, 2);
    var multiplicador = parseInt(binario2, 2);
    var producto = multiplicando * multiplicador;
    return producto.toString(2);
  }
  