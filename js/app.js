function immerFicha() {
  window.location = "views/paciente-ficha.html";
}

function chatImmer() {
  var d = document.getElementById("chat_paciente_content");
  // .style.display = "block";
  d.className += " openChat";
}
