(function (){

  // Bloqueando arrasta imagens do site para baixar

  function desativarDragDrop () {
    document.addEventListener('dragstart', (evento) => evento.preventDefault(), false)
    document.addEventListener('drop', (evento) => evento.preventDefault(), false)
  }

  desativarDragDrop()

}())

var msgCookies = document.getElementById('cookies-msg')

function aceito(){
    localStorage.lgpd = "sim"
    msgCookies.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
     msgCookies.classList.remove('mostrar')
}else{
    msgCookies.classList.add('mostrar')
}