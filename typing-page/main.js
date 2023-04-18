const esperado = `Para testar escreva uma letra errada :) Tente escrever abrindo e fechando chaver pra encaixar depois{{(TESTE)}}`
let exibido = document.getElementById('texto-digitado')
let letrasDigitadas = []


function escreveCerto(letra) {
  exibido.innerHTML += letra 
}

function escreveErrado(letra) {
 let span = document.createElement('span')
 span.innerText = letra
 exibido.appendChild(span)
}


const exibidoFundo = document.getElementById('texto-fundo')
exibidoFundo.innerHTML = esperado

const input = document.getElementById('digitado')

input.addEventListener('input', () => {
  const valor = input.value;  // captura o que foi digitado no input
  letrasDigitadas = valor.split('')  //atribui na o digitado a um array
  exibido.innerHTML = ''            // limpa o que é exibido
  
  for (let i = 0; i < letrasDigitadas.length; i++) {
    if (letrasDigitadas[i] === esperado[i]) {
      escreveCerto(letrasDigitadas[i])  // se certo escreve no html exibido a letrauma por vez comparando no loop se está certa 
    } else {
      escreveErrado(letrasDigitadas[i]);// se errada a letra cria um span que vai ficar de cor diferente 
    }
  }
  
  // Inserir o texto da função escreveCerto() após a última <span>
  if (letrasDigitadas.length > 0) {
    const ultimaSpan = exibido.lastElementChild;
    ultimaSpan.insertAdjacentHTML('afterend');
  }
});

input.focus();
