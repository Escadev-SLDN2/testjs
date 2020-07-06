console.log('oui');

while (!texte) {
  texte = window.prompt('Veuillez saisir votre texte')
}


var newPara = document.createElement('p');
newPara.id = 'nouveau';

var texte = document.createTextNode(texte);

newPara.appendChild(texte);
var para1 = document.getElementById('container');
document.body.insertBefore(newPara, para1);
