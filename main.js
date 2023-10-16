function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

const listadeTeclas = document.querySelectorAll('.tecla_pom');
while(){

    listadeTeclas[0].onclick=tocaSomPom;
}
