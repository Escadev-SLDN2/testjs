// 1. On demande le prénom de l'utilisateur
let prenom = ''
while (!prenom) {
  prenom = window.prompt('Veuillez indiquer votre prénom')
}

// 2. On met ce prénom dans un nouveau paragraphe
const helloPar = document.createElement('p')
helloPar.className = 'hello'
helloPar.id = 'helloPar'
helloPar.innerHTML = 'Bonjour ' + prenom
document.getElementById('container').appendChild(helloPar)

// 3. On modifie ce nouveau paragraphe à la volée
if (window.confirm('Un petit smiley ?')) {
  document.getElementById('helloPar').innerHTML += ' &#128540;'
}

function supprimer(){
    var zone = document.getElementById('container');
    var zone2 = document.getElementById('btn');
    var parent = document.body;
    parent.removeChild(zone);
    parent.removeChild(zone2);
}