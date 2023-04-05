let textoFundo = `Texto para digitar por cima`

let boxTexto = document.getElementById('box-text')

let textoPaginaFundo = document.getElementById('texto-fundo')
textoPaginaFundo.innerText = textoFundo

let textoDigitado = document.getElementById('digitado').value

let textoPaginaDigitado = document.getElementById('texto-digitado')

textoDigitado.addEventListener('input', () => {


  let letraErradaIndex = []
  // Verifica os errados e armazena
  for(let i = 0 ; textoDigitado.length < i ; i++ ){
    if(textoDigitado[i] != textoFundo[i]){
      letraErradaIndex += textoDigitado[i]
    }  
  }

  //letraErradaIndex
  function imprime(qtdErros) {
    for (let i = 0; qtdErros > i; i++){
       const certo = textoDigitado.substring(0,letraErradaIndex[i - 1])
       const errado = textoDigitado[i]
       var novoCerto = document.createElement('p')
       novoCerto.id = 'texto-digitado'
       novoCerto.innerText = certo
       boxTexto.appendChild(novoCerto)
       var novoErrado = document.createElement('span')
       novoErrado.innerText = errado
       novoCerto.appendChild(novoErrado)
    }
  }
  imprime(letraErradaIndex.length)
  
  // verificar pois não vai imprimir caso tenha texto depois do erro
  // problemas de sintaxe linha 12
  // verificar melhor forma de referenciar inicio e parada de impressão no substring




  // textoPaginaDigitado.innerText = textoDigitado.value
  // if(textoFundo != textoDigitado.value){
  //   textoPaginaDigitado.style.color = 'red'
  // }else{
  //   textoPaginaDigitado.style.color = 'white'
  // }
})