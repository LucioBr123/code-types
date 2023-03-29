import { diferenca, diferenca } from "./comparador"

var texto = `System.Console.WriteLine("Hello World!");`


var textoPagina = document.getElementById('texto-fundo')
textoPagina.innerHTML = texto


var textoDigitado = document.getElementById('digitado')
var textoTela = document.getElementById('texto')
textoTela.innerHTML = textoDigitado.value

export const textoArray = textoDigitado.value.split(/(?!$)/u)
export const textoTelaArray = String(texto).split(/(?!$)/u)

textoDigitado.addEventListener('input', () => {
  textoTela.textContent = textoDigitado.value
});





textoDigitado.focus()