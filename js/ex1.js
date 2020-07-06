let prenom = ''

while (!prenom) {
  prenom = window.prompt('Veuillez saisir votre prénom')
}

document.getElementById('console').innerHTML += prenom
