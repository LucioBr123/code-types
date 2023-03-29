var texto = `System.Console.WriteLine("Hello World!");`


var textoPagina = document.getElementById('texto-fundo')
textoPagina.innerHTML = texto


var textoDigitado = document.getElementById('digitado')
var textoTela = document.getElementById('texto')
textoTela.innerHTML = textoDigitado.value


textoDigitado.addEventListener('input', () => {
  textoTela.textContent = textoDigitado.value
})


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
    console.log(erro)
  });
});









textoDigitado.focus()