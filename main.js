function tocaSomPom (id Elemento Audio) {
    querySelector(id Elemento Audio)
}

const listadeTeclas = document.querySelectorAll('.tecla_pom');
let contador = 0,
while(contador<9){
    listadeTeclas[contador].onclick=tocaSomPom;
    contador = contador + 1;
}
