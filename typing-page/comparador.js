//pegar os dois ementos 
import { textoArray, textoTelaArray } from "./main"

// comparar arquivos 

export function diferenca(){
  let indiceDiferenca = []

  for (let i ; textoArray.length < i ; i++) {
      if (textoArray[i] != textoTelaArray[i] ){
        indiceDiferenca.push(i)
      }
    }
  
    return indiceDiferenca
}

