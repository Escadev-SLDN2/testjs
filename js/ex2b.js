// Get all buttons as a HTML Collection
const buttons = $('button')

// Parse all buttons
$(buttons).each(function (index) {
  // Add onClick event listener
  $(this).on('click', function (event) {
    // Color the container with the right button's color
    if ($(this).attr('id')) {
      $('#colored').css('background-color', $(this).attr('id'))
    } else {
      $('#colored').css('background-color', 'transparent')
    }
  })
})
