function redirectToWebPage(url) {
    window.location.href = url;
  }
  
  document.getElementById('select-option').addEventListener('change', function() {
    var optionSelected = this.value;
  
    if (optionSelected !== '') {
      var containerDiv = document.getElementById('container');
      containerDiv.innerHTML = '';
  
      for (var i = 1; i <= 9; i++) {
        var div = document.createElement('div');
        div.classList.add('container', 'show');
        var h2 = document.createElement('h2');
        h2.innerHTML = 'Desarrollo ' + optionSelected;
        h2.setAttribute('onclick', "redirectToWebPage('web" + optionSelected + ".html')");
        div.appendChild(h2);
        containerDiv.appendChild(div);
      }
    } else {
      document.getElementById('container').innerHTML = '';
    }
  });
  