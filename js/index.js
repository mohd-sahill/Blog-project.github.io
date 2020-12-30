document.getElementById('catButton').onclick = function showSomeCats() {
    document.getElementById('catBox').innerHTML = ('<img src="http://edgecats.net/' + Math.random() + '"/>');
  };
