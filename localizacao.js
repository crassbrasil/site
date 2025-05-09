$.getJSON("https://wtfismyip.com/json", l => {
  const regiao = l['YourFuckingLocation']?.replace(", Brazil", "") || "sua região";
  const destino = document.getElementById("localizacao-dinamica");
  if (destino) {
    destino.innerHTML = 'Localização detectada: <b style="color:#36b376">' + regiao + '</b>';
  }
});
