const helloStr = 'Hello the world !!!'

console.log(helloStr)

if (typeof document !== 'undefined') {
  document.getElementById('console').innerHTML = helloStr
}
