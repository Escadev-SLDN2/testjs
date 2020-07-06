let Reponse = '';
while (Reponse.length == 0) {
  Reponse = window.prompt('Quelle est la réponse ?', '');
}
document.getElementById("console").innerHTML = Reponse;

