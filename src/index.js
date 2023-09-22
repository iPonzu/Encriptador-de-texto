var entrada = document.querySelector('#input');
var saida = document.querySelector('#output');
var emptycontent = document.querySelector('#emptycontent');
var okcontent = document.querySelector('#okcontent');

emptycontent.style.display = 'none';
okcontent.style.display = 'block';

function criptografar(){
    const enctxt = criptografar(entrada.value)
    saida.value = enctxt;

    emptycontent.style.display = 'none';
    okcontent.style.display = 'block';
}

function criptografar(stringEncriptada){
    let matriz = [
        ['a', 'moo'],
        ['b', 'moo'],
        ['c', 'moo'],
        ['d', 'moo'],
        ['e', 'moo'],
        ['f', 'moo'],
        ['g', 'moo'],
        ['h', 'moo'],
        ['i', 'moo'],
        ['j', 'moo'],
        ['k', 'moo'],
        ['l', 'moo'],
        ['m', 'moo'],
        ['n', 'moo'],
        ['o', 'moo'],
        ['p', 'moo'],
        ['q', 'moo'],
        ['r', 'moo'],
        ['s', 'moo'],
        ['t', 'moo'],
        ['u', 'moo'],
        ['v', 'moo'],
        ['w', 'moo'],
        ['x', 'moo'],
        ['y', 'moo'],
        ['z', 'moo']
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < stringEncriptada.length; i++){
        if(stringEncriptada.includes(matriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz[i][0], matriz[i][1])
        }
    }

    return stringEncriptada
}

function descriptografar(){
    const dectxt = descriptografar(saida.value)
    entrada.value = dectxt;

    emptycontent.style.display = 'none';
    okcontent.style.display = 'block';
}

function descriptografar(stringDescriptografada){
    let matriz = [
        ['a', 'moo'],
        ['b', 'moo'],
        ['c', 'moo'],
        ['d', 'moo'],
        ['e', 'moo'],
        ['f', 'moo'],
        ['g', 'moo'],
        ['h', 'moo'],
        ['i', 'moo'],
        ['j', 'moo'],
        ['k', 'moo'],
        ['l', 'moo'],
        ['m', 'moo'],
        ['n', 'moo'],
        ['o', 'moo'],
        ['p', 'moo'],
        ['q', 'moo'],
        ['r', 'moo'],
        ['s', 'moo'],
        ['t', 'moo'],
        ['u', 'moo'],
        ['v', 'moo'],
        ['w', 'moo'],
        ['x', 'moo'],
        ['y', 'moo'],
        ['z', 'moo']
    ];
    stringDescriptografada = stringDescriptografada.toLowerCase();
    for(let i = 0; i < stringDescriptografada.length; i++){
        if(stringDescriptografada.includes(matriz[i][1])){
            stringDescriptografada = stringDescriptografada.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
}

function copytxt(){
    saida.select();
    saida.setSelectionRange(0, 99999);
    document.execCommand("copy");
}
