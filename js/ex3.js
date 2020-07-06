// 1. On demande le prénom de l'utilisateur
let prenom = ''
while (!prenom) {
  prenom = window.prompt('Veuillez indiquer votre prénom')
}

// 2. On met ce prénom dans un nouveau pargraphe
const helloPar = document.createElement('p')
helloPar.className = 'hello'
helloPar.id = 'helloPar'
helloPar.innerHTML = 'Bonjour ' + prenom
document.getElementById('container').appendChild(helloPar)

// 3. On modifie ce nouveau paragraphe à la volée
document.getElementById('helloPar').innerHTML += ' &#128540;'
