var px=0
var py=0

function move(){
  var obj=document.getElementById('dv1')
  var tecla=event.keyCode
  //37 esquerda - 38 cima - 39 direita - 40 baixo
  obj.addEventListener("click", function(){
    document.addEventListener("keydown", move)
    obj.style.background="red"
  })
  switch(tecla){
    case 37:
      px-=10
      obj.style.left=px+"px"
    break
    case  38:
      py-=10
      obj.style.top=py+"px"
    break
    case 39 :
      px+=10
      obj.style.left=px+"px"
    break
    case 40:
      py+=10
      obj.style.top=py+"px"      
    break
    case 13:
      alert('codigo secreto!')
      alert('evento KEYDOWN removido, você quebrou meu codigo!')
      document.removeEventListener("keydown",move)
      obj.style.background="white"
      break    
    case 48:
      document.addEventListener("keydown", move)
    break
    default:
      alert('não é: '+event.keyCode)
  }

}
document.addEventListener("keydown", move)