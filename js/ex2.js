// Get all buttons as a HTML Collection
const buttons = document.querySelectorAll('button')

// Parse all buttons
buttons.forEach(button => {
  // Add onClick event listener
  button.addEventListener('click', event => {
    // Color the container with the right button's color
    if (event.srcElement.id) {
      document.getElementById('colored').style.backgroundColor =
        event.srcElement.id
    } else {
      document.getElementById('colored').style.backgroundColor = 'transparent'
    }
  })
})
