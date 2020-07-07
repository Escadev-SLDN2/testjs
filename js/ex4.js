let prenom = ''
let xhr

while (!prenom) {
  prenom = window.prompt('Veuillez saisir votre prénom')
}

try {
  xhr = new ActiveXObject('Msxml2.XMLHTTP')
} catch (e) {
  try {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  } catch (e2) {
    try {
      xhr = new XMLHttpRequest()
    } catch (e3) {
      xhr = false
    }
  }
}

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
