var inputEntrada = document.querySelector('#text-input'); 
 var inputSaida = document.querySelector('#text-output'); 
 var areaConteudoVazio = document.querySelector('.conteudo-resultado-vazio'); 
 var areaConteudoOK = document.querySelector('.conteudo-resultado-ok'); 
  
 areaConteudoVazio.style.display = 'block' 
 areaConteudoOK.style.display = 'none' 
  
 function botaoCriptografar() { 
     const textoEncriptado = criptografar(inputEntrada.value); 
     inputSaida.value = textoEncriptado; 
  
     areaConteudoVazio.style.display = 'none' 
     areaConteudoOK.style.display = 'block' 
 } 
  
 function criptografar(stringEncriptada) { 
     let matrizCodigo = [ 
         ["a", "moo "], 
         ["b", "moo "], 
         ["c", "moo "], 
         ["d", "moo "], 
         ["e", "moo "], 
         ["f", "moo "], 
         ["g", "moo "], 
         ["h", "moo "], 
         ["i", "moo "], 
         ["j", "moo "], 
         ["k", "moo "], 
         ["l", "moo "], 
         ["m", "moo "], 
         ["n", "moo "], 
         ["o", "moo "], 
         ["p", "moo "], 
         ["q", "moo "], 
         ["r", "moo "], 
         ["s", "moo "], 
         ["t", "moo "], 
         ["u", "moo "], 
         ["v", "moo "], 
         ["w", "moo "], 
         ["x", "moo "], 
         ["y", "moo "], 
         ["z", "moo "] 
       ]; 
     stringEncriptada = stringEncriptada.toLowerCase(); 
  
     for (i = 0 ; i < matrizCodigo.length ; i++) { 
         if (stringEncriptada.includes(matrizCodigo[i][0])) { 
             stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]); 
         } 
     } 
  
     return stringEncriptada; 
 } 
  
 function botaoDescriptografar() { 
     const textoDescriptado = descriptografar(inputEntrada.value); 
     inputSaida.value = textoDescriptado; 
     areaConteudoVazio.style.display = 'none' 
     areaConteudoOK.style.display = 'block' 
 } 
  
 function descriptografar(stringDescriptada) { 
     let matrizCodigo = [ 
         ["a", "moo "], 
         ["b", "moo "], 
         ["c", "moo "], 
         ["d", "moo "], 
         ["e", "moo "], 
         ["f", "moo "], 
         ["g", "moo "], 
         ["h", "moo "], 
         ["i", "moo "], 
         ["j", "moo "], 
         ["k", "moo "], 
         ["l", "moo "], 
         ["m", "moo "], 
         ["n", "moo "], 
         ["o", "moo "], 
         ["p", "moo "], 
         ["q", "moo "], 
         ["r", "moo "], 
         ["s", "moo "], 
         ["t", "moo "], 
         ["u", "moo "], 
         ["v", "moo "], 
         ["w", "moo "], 
         ["x", "moo "], 
         ["y", "moo "], 
         ["z", "moo "] 
       ]; 
     stringDescriptada = stringDescriptada.toLowerCase(); 
  
     for (i = 0 ; i < matrizCodigo.length ; i++) { 
         if(stringDescriptada.includes(matrizCodigo[i][1])) { 
             stringDescriptada = stringDescriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]); 
         } 
     } 
  
     return stringDescriptada; 
 } 
  
 function copiarTexto() { 
     inputSaida.select(); 
     inputSaida.setSelectionRange(0, 99999); 
     document.execCommand("copy"); 
 }