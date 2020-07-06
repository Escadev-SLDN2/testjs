let nom = ''

while (!nom) {
  nom = window.prompt('Saisissez votre message')
}
document.getElementById('console').innerHTML += nom
