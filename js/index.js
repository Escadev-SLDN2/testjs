const helloStr = 'Hello the world !!!'

console.log(helloStr)

if (typeof document !== 'undefined') {
  document.getElementById('console').innerHTML = helloStr
}






const btnRouge = document.getElementById('rouge');

btnRouge.addEventListener('click', function (event) {
  alert('Tu veux du rouge!');
});

const btnVert = document.getElementById('vert');

btnVert.addEventListener('click', function (event) {
  alert('Tu veux du vert!');
});

const btnOrange = document.getElementById('orange');

btnOrange.addEventListener('click', function (event) {
  alert('Tu veux du orange!');
});

