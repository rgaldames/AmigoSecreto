// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema

let arrayAmigoSecreto=[];
//================== Referencias al DOM ==================
const inputAmigo = document.getElementById('txt-amigo');        // input de texto


function agregarAmigo(){
    const valor = (inputAmigo.value || '').trim();

    if(!valor){
        alert('Por favor ingrese un nombre válido');
        return;
    }
    arrayAmigoSecreto.push(valor);
    inputAmigo.focus();
    inputAmigo.select();
}

function sortearAmigo(){
    
    if(arrayAmigoSecreto.length < 2){
        alert('Debe ingresar al menos 2 amigos para realizar el sorteo');
        return;
    }

    const i = Math.floor(Math.random() * arrayAmigoSecreto.length);
    const amigo = arrayAmigoSecreto[i];
    alert(`El amigo secreto es: ${amigo}`);
    

    for(let i=0; i<arrayAmigoSecreto.length; i++){
        console.log(arrayAmigoSecreto[i]);
    }

    
}