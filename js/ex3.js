let helloPar = ''
let deletePar = ''

const createPar = () => {
  // 1. On demande le prénom de l'utilisateur
  let prenom = ''
  while (!prenom) {
    prenom = window.prompt('Veuillez indiquer votre prénom')
  }

  // 2. On met ce prénom dans un nouveau paragraphe
  helloPar = document.createElement('p')
  helloPar.className = 'hello'
  helloPar.innerHTML = 'Bonjour ' + prenom
  document.getElementById('container').appendChild(helloPar)

  helloPar.innerHTML += ' &#128521;'

  // 3. On crée un bouton pour supprimer le paragraphe
  deletePar = document.createElement('button')
  deletePar.innerHTML = 'Supprimer le paragraphe'

  deletePar.addEventListener('click', event => {
    const removeElts = new Promise((resolve, reject) => {
      helloPar.remove()
      event.srcElement.remove()
      resolve('ok')
    })

    removeElts.then(value => {
      console.log(value)
      createPar()
    })
  })
  document.getElementById('container').appendChild(deletePar)
}

// 4. Première initialisation
window.addEventListener('load', createPar)
