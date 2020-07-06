const setColor = elt => {
  switch (elt.id) {
    case 'vert':
      document.getElementById('colored').style.backgroundColor = 'green'
      break
    case 'orange':
      document.getElementById('colored').style.backgroundColor = 'orange'
      break
    case 'rouge':
      document.getElementById('colored').style.backgroundColor = 'red'
      break
    default:
      document.getElementById('colored').style.backgroundColor = 'transparent'
      break
  }
}

const btnVert = document.getElementById('vert')
btnVert.addEventListener('click', () => setColor(btnVert))

const btnOrange = document.getElementById('orange')
btnOrange.addEventListener('click', () => {
  setColor(btnOrange)
})

const btnRouge = document.getElementById('rouge')
btnRouge.addEventListener('click', () => {
  setColor(btnRouge)
})
