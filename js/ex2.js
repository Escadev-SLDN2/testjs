


function getColor() {
    
    const btnRouge = document.getElementById('rouge');
    const btnVert = document.getElementById('vert');
    const btnOrange = document.getElementById('orange');


    btnRouge.addEventListener('click', function (event) {
        document.getElementById('colored').setAttribute('style', 'background-color: red')
    });

    btnVert.addEventListener('click', function (event) {
        document.getElementById('colored').setAttribute('style', 'background-color: green')
    });
    btnOrange.addEventListener('click', function (event) {
        document.getElementById('colored').setAttribute('style', 'background-color: orange')
    });
}