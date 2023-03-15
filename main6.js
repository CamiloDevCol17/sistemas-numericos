function hexToBin(hex) {
    var bin = parseInt(hex, 16).toString(2);
    while (bin.length < 8) {
      bin = '0' + bin;
    }
    return bin;
  }
  
  function binToHex(bin) {
    return parseInt(bin, 2).toString(16);
  }
  
  function convertir() {
    // Obtener el valor del input de hexadecimal
    var hex = document.getElementById('hex').value;
  
    // Convertir el valor a binario
    var bin = hexToBin(hex);
  
    // Crear una fila en la tabla para mostrar la conversión
    var fila = document.createElement('tr');
  
    var tdHex = document.createElement('td');
    tdHex.textContent = hex;
  
    var tdBin = document.createElement('td');
    tdBin.textContent = bin;
  
    fila.appendChild(tdHex);
    fila.appendChild(document.createElement('td')).textContent = ',';
    fila.appendChild(tdBin);
  
    document.getElementById('conversiones').appendChild(fila);
  }
  
  function sumar() {
    // Obtener los valores de los inputs
    var hex1 = document.getElementById('hex1').value;
    var hex2 = document.getElementById('hex2').value;
  
    // Convertir los valores a binario
    var bin1 = hexToBin(hex1);
    var bin2 = hexToBin(hex2);
  }
  