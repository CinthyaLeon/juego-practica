
function asignartextoelemento(elemento,texto){
  let elementoHTML =document.querySelector(elemento);
  elementoHTML.innerHTML=texto;
  return;
}
function intentodeusuario(){
  alert('click desde el boton');
  return;
}
function generarnumerosecreto() {
  let numeroSecreto=Math.floor(Math.random()*numeromaximoposible)+1;
  
}
asignartextoelemento('h1','juego de números secretos!');
asignartextoelemento('p','elige un numero del 1 al 20');


