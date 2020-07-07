let prenom = ''
while (!prenom) {
  prenom = window.prompt('Veuillez saisir votre prénom')
}

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      document.getElementById('console').innerHTML = xhr.responseText
    } else {
      document.getElementById('console').innerHTML = xhr.status
    }
  }
}

const postData = 'prenom=' + prenom
xhr.open('POST', './php/ex4.php', true)
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
xhr.send(postData)
