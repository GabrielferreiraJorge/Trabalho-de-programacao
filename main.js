function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla_pom');
let contador = 0,
while(){
    listadeTeclas[contador].onclick=tocaSomPom;
    contador = contador + 1;
}
