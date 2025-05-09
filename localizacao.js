(function() {
  function inserirLocalizacao() {
    $.getJSON("https://wtfismyip.com/json", function(l) {
      const regiao = l['YourFuckingLocation']?.replace(", Brazil", "") || "sua região";
      const destino = document.getElementById("localizacao-dinamica");
      if (destino) {
        destino.innerHTML = 'Localização detectada: <b style="color:#36b376">' + regiao + '</b>';
      }
    });
  }

  if (window.jQuery) {
    inserirLocalizacao();
  } else {
    const script = document.createElement('script');
    script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js";
    script.onload = inserirLocalizacao;
    document.head.appendChild(script);
  }
})();
