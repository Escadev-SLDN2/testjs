let prenom = ''
while (!prenom) {
  prenom = window.prompt('Veuillez saisir votre prénom')
}

// Requête AJAX (jQuery)
$.ajax({
  url: './php/ex4.php',
  method: 'POST',
  data: {
    prenom: prenom
  }
})
  .done(function (response) {
    $('#console').html(response)
  })
