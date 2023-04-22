// Define o texto esperado e inicializa as variáveis
const textoEsperado = 'Texto de fundo para teste'
let elementoTextoExibido = document.getElementById('texto-digitado')
let letrasDigitadas = []

// Funções auxiliares para escrever letras corretas e incorretas
function escreverLetraCorreta(letra) {
  elementoTextoExibido.innerHTML += letra 
}

function escreverLetraIncorreta(letra) {
  let span = document.createElement('span')
  span.innerText = letra
  elementoTextoExibido.appendChild(span)
}

// Define o texto esperado no elemento HTML de exibição
const elementoTextoEsperado = document.getElementById('texto-fundo')
elementoTextoEsperado.innerHTML = textoEsperado

// Adiciona um ouvinte de eventos ao elemento de entrada
const elementoInput = document.getElementById('digitado')
elementoInput.addEventListener('input', () => {
  // Obtém as letras digitadas
  const textoDigitado = elementoInput.value
  letrasDigitadas = textoDigitado.split('')
  
  // Limpa o texto exibido
  elementoTextoExibido.innerHTML = ''
  
  // Escreve as letras corretas e incorretas
  for (let i = 0; i < letrasDigitadas.length; i++) {
    if (letrasDigitadas[i] === textoEsperado[i]) {
      escreverLetraCorreta(letrasDigitadas[i])
    } else {
      escreverLetraIncorreta(letrasDigitadas[i])
    }
  }
  
  // Move o cursor para o campo de entrada
  elementoInput.focus()
})