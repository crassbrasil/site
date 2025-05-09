$.getJSON("https://wtfismyip.com/json", l => {
  const el = document.createElement("div");
  el.style.cssText = "text-align:center;background:#f5f5f5;padding:10px 15px;border-radius:8px;box-shadow:0 2px 6px rgba(0,0,0,0.1);font-size:14px;color:#333;margin-top:10px;";
  el.innerHTML = 'Localização detectada: <b style="color:#36b376">' + l['YourFuckingLocation'].replace(", Brazil", "") + '</b>';
  document.body.appendChild(el);
});
