var texto = `System.Console.WriteLine("Hello World!");`


var textoPagina = document.getElementById('texto-fundo')
textoPagina.innerHTML = texto


var textoDigitado = document.getElementById('digitado')
var textoTela = document.getElementById('texto')



// textoDigitado.addEventListener('input', () => {
//   textoTela.textContent = textoDigitado.value
// })

///aqui temos a função que cria os elementos na tela 


//esse veio do GPT kkkk
const inputs = {}
const inputElements = document.querySelectorAll('input')
inputElements.forEach(input => {
  input.addEventListener('input', () => {
    const textoArray = String(input.value).split(/(?!$)/u) 
    const textoTelaArray = String(texto).split(/(?!$)/u)
    erro = []
    
    for (let i = 0 ; textoArray.length > i ; i++) {
      if (textoArray[i] != textoTelaArray[i] ){
        erro.push(i)
      } 
    } 

    async function imprimirCerto(texto){
      textoTela.textContent += texto
      await new Promise(resolve => setTimeout(resolve, 500));
      compilado = ''
    }


    function imprimirErro(texto){
      const span = document.createElement('span')
      span.classList.add('diferente')
      span.textContent = texto
      textoTela.appendChild(span)
    }
    

    let  arrayTextoCerto = textoTelaArray
    let  arrayTextoDigitado = textoArray
    let  arrayIndiceErrado = erro

    //console.log(arrayTextoCerto,"\n",arrayTextoDigitado,"\n",arrayIndiceErrado)
    let compilado = ''
    for (let ip = 0 ; arrayTextoDigitado.length > ip ; ip++ ){
      for(let i = 0; erro.length > i ; i++){
        if ( ip != erro[i] ){
          compilado += arrayTextoDigitado[ip]
        }else{
          imprimirCerto(compilado)
          imprimirErro(arrayTextoDigitado[ip])
        }
      }
    }
  });
});


