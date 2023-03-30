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

    


    

    arrayCerto = textoTelaArray
    arrayDigitado = textoArray
    arrayErrado = erro

    // validar se o index do digitado está como o esperado
      // se estiver certo armazena o indice do array certo no compilador e vai para o proxima letra
      //se estiver errado compila tudo que está armazenado no array compilador, imprime o texto como certo e limpa o compilador, imprime a letra do errado
    compilador = []
    for (let ip = 0; arrayDigitado.length > ip; ip++ ){
      for (let i = 0; erro.length > i; i++ ){
        if (erro[i] != arrayCerto[ip]){
          compilador.push(arrayDigitado[ip])
        }else{
          let armazenado = compilador.join()
          compilador = []
          //imprime armazenado como certo

          // // Selecionando a div existente
          
          var div = document.querySelector('#box-text')
          // // Criando um novo elemento p
          
          var novo = document.createElement('p')
          // // Adicionando texto ao novo parágrafo
          
          novo.innerHTML = armazenado
          // // Atribuindo uma classe ao novo parágrafo
          
          novo.classList.add('texto')
          // // Adicionando o novo parágrafo à div existente
          
          div.appendChild(novo)
          //atribui id do delet

          
          var novoErro = document.createElement('span')

          novoErro.innerHTML = arrayDigitado[i]

          novoErro.classList.add('diferente')

          div.appendChild(novoErro)

          //imprime o errado como errado
        }
      }
    }
    


  });
});









textoDigitado.focus()