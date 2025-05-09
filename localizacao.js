$.getJSON("https://wtfismyip.com/json", l => {
  document.write("Localização detectada: <b style='color:#36b376'>" + l['YourFuckingLocation'].replace(", Brazil", "") + "</b>");
});
