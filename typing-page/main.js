let textoFundo = `Texto para digitar por cima`

let textoPaginaFundo = document.getElementById('texto-fundo')
textoPaginaFundo.innerText = textoFundo

let textoDigitado = document.getElementById('digitado')

let textoPaginaDigitado = document.getElementById('texto-digitado')

textoDigitado.addEventListener('input', () => {
  textoPaginaDigitado.innerText = textoDigitado.value
  if(textoFundo != textoDigitado.value){
    textoPaginaDigitado.style.color = 'red'
  }else{
    textoPaginaDigitado.style.color = 'white'
  }
})