const buttons = document.querySelectorAll('button')

buttons.forEach(button => {
  button.addEventListener('click', event => {
    switch (event.srcElement.id) {
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
  })
})
