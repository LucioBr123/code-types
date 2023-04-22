// Define o texto esperado e inicializa as variáveis
const textoEsperado = 'Texto de fundo para teste'
let elementoTextoExibido = document.getElementById('texto-digitado')
let letrasDigitadas = []

<<<<<<< HEAD
// Funções auxiliares para escrever letras corretas e incorretas
function escreverLetraCorreta(letra) {
  elementoTextoExibido.innerHTML += letra 
}

function escreverLetraIncorreta(letra) {
  let span = document.createElement('span')
  span.innerText = letra
  elementoTextoExibido.appendChild(span)
=======

function escreveCerto(letra) {
  exibido.innerHTML += letra 
}

function escreveErrado(letra) {
 let span = document.createElement('span')
 span.innerText = letra
 exibido.appendChild(span)
>>>>>>> 53fa9446358a2d42e50aa9ddfd4f6344c20ef2dc
}

// Define o texto esperado no elemento HTML de exibição
const elementoTextoEsperado = document.getElementById('texto-fundo')
elementoTextoEsperado.innerHTML = textoEsperado

<<<<<<< HEAD
// Adiciona um ouvinte de eventos ao elemento de entrada
const elementoInput = document.getElementById('digitado')
elementoInput.addEventListener('input', () => {
  // Obtém as letras digitadas
  const textoDigitado = elementoInput.value
  letrasDigitadas = textoDigitado.split('')
=======
const exibidoFundo = document.getElementById('texto-fundo')
exibidoFundo.innerHTML = esperado

const input = document.getElementById('digitado')

input.addEventListener('input', () => {
  const valor = input.value;  // captura o que foi digitado no input
  letrasDigitadas = valor.split('')  //atribui na o digitado a um array
  exibido.innerHTML = ''            // limpa o que é exibido
>>>>>>> 53fa9446358a2d42e50aa9ddfd4f6344c20ef2dc
  
  // Limpa o texto exibido
  elementoTextoExibido.innerHTML = ''
  
  // Escreve as letras corretas e incorretas
  for (let i = 0; i < letrasDigitadas.length; i++) {
<<<<<<< HEAD
    if (letrasDigitadas[i] === textoEsperado[i]) {
      escreverLetraCorreta(letrasDigitadas[i])
    } else {
      escreverLetraIncorreta(letrasDigitadas[i])
=======
    if (letrasDigitadas[i] === esperado[i]) {
      escreveCerto(letrasDigitadas[i])  // se certo escreve no html exibido a letrauma por vez comparando no loop se está certa 
    } else {
      escreveErrado(letrasDigitadas[i]);// se errada a letra cria um span que vai ficar de cor diferente 
>>>>>>> 53fa9446358a2d42e50aa9ddfd4f6344c20ef2dc
    }
  }
  
  // Move o cursor para o campo de entrada
  elementoInput.focus()
})
