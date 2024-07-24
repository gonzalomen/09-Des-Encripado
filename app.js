const textInput = document.querySelector('#frase');
const textInputEncriptada = document.querySelector('#frase-encriptada');

const sugerencia =document.querySelector('.formulario__encriptar__aviso');
const desencriptarmsg = document.querySelector('.seccion__desencriptar__mensaje');
const desencriptarResultado =document.querySelector('.desencriptar__resultado');

const botonEncriptar = document.querySelector('#boton-encriptar');
const botonDesencriptar= document.querySelector('#boton-desencriptar');
const botonCopiar=document.querySelector('#boton-copiar');

const rgxInput = /^[a-z0-9 ]*$/;

let mensaje= true;
let resultado=false;

function encriptarFrase(){
    if (!rgxInput.test(textInput.value) || textInput.value.length ===0 ){
        sugerencia.style.display="flex";

        mensaje=true;
        mostrarMensaje();
        resultado=false;
        mostrarResultado();
    } else{
        sugerencia.style.diplay="none";
        let fraseEncriptada =textInput.value.
                                            replaceAll("a","ai").
                                            replaceAll("e","enter").
                                            replaceAll("i","imes").
                                            replaceAll("o","ober").
                                            replaceAll("u","ufat");
        textInputEncriptada.value=fraseEncriptada
        
        mensaje=false;
        mostrarMensaje();
        resultado=true;
        mostrarResultado();
        textInput.value='';
    }
}
botonEncriptar.addEventListener('click', encriptarFrase);

async function copy(){
    /* textInputEncriptada.select();
    document.execCommand("copy"); */

    try {
        // Copiar el contenido del textarea al portapapeles
        await navigator.clipboard.writeText(textInputEncriptada.value);
        
        // Deshabilitar el textarea y limpiar su contenido
        textInputEncriptada.setAttribute('disabled', true);
        textInputEncriptada.value = '';
        
        alert("El texto ha sido copiado");
      } catch (err) {
        console.error("Error al copiar el texto: ", err);
      }
}
botonCopiar.addEventListener('click', copy);

function desencriptarFrase(){
    let fraseDesencriptada =textInput.value.
                                            replaceAll("ufat","u"). 
                                            replaceAll("ober","o"). 
                                            replaceAll("imes","i").
                                            replaceAll("enter","e").
                                            replaceAll("ai","a");   
    textInputEncriptada.value=fraseDesencriptada;

    mensaje=false;
    mostrarMensaje();
    resultado=true;
    mostrarResultado();

    textInput.value='';
}
botonDesencriptar.addEventListener('click', desencriptarFrase);

function mostrarMensaje(){
    if(mensaje){
        desencriptarmsg.style.display="flex";
    }else{
        desencriptarmsg.style.display="none";
    }
}

function mostrarResultado(){
    if(resultado){
        desencriptarResultado.style.display ="flex";
    }else{
        desencriptarResultado.style.display="none";
    }
}