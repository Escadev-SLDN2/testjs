let helloPar = ''
let deletePar = ''
let resetPar = ''

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
    helloPar.remove()
    event.srcElement.remove()
    bouclePar()
  })
  document.getElementById('container').appendChild(deletePar)
}

// bouton reset
const bouclePar = () => {
  resetPar = document.createElement('button')
  resetPar.innerHTML = 'Réessayer'
  resetPar.addEventListener('click', event => {
    event.srcElement.remove()

    const reset = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('ok')
      }, 300)
    })

    reset.then(value => {
      createPar()
    })
  })
  document.getElementById('container').appendChild(resetPar)
}

// 4. Première initialisation
window.addEventListener('load', createPar)
