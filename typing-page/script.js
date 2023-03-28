// 1. criar texto esperado
var texto = `System.Console.WriteLine("Hello World!");`

var textoPagina = document.getElementById('texto-fundo')
textoPagina.innerHTML = texto




var textoDigitado = document.getElementById('digitado')

var textoTela = document.getElementById('texto')



textoTela.innerHTML = textoDigitado.value

const textoArray = textoDigitado.value.split(/(?!$)/u)

const textoTelaArray = String(texto).split(/(?!$)/u)

textoDigitado.addEventListener('input', () => {
  textoTela.textContent = textoDigitado.value;
});

textoDigitado.focus()
//comparar os dois elementos e trazer devolver o que é diferente dos dois


// for (let i; textoArray.length < i ; i++){
//   if (textoArray[i] != textoTelaArray[i] ){
//     return i
//   }
// }

/// kkk ta estranho depois vai fazer sentido 
// realmente preciso estruturar a organização de fazer as funçoes bonitinhas 
