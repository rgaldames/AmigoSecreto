// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema

let arrayAmigoSecreto=[];
//================== Referencias al DOM ==================
const inputAmigo = document.getElementById('txt-amigo');        // input de texto
const inputlistaAmigos = document.getElementById('listaAmigos')
const inputresultado = document.getElementById('resultado')

function agregarAmigo(){
    const valor = (inputAmigo.value || '').trim();

    if(!valor){
        alert('Por favor ingrese un nombre válido');
        return;
    }
    arrayAmigoSecreto.push(valor);

    const li = document.createElement('li');
    li.textContent = `${arrayAmigoSecreto.length}. ${valor}`;
    inputlistaAmigos.appendChild(li);

    inputresultado.innerHTML = ''; // Limpiar la lista de resultados

    inputAmigo.focus();
    inputAmigo.select();
}



function sortearAmigo(){
    
    if(arrayAmigoSecreto.length < 2){
        alert('Debe ingresar al menos 2 amigos para realizar el sorteo');
        return;
    }

    const i = Math.floor(Math.random() * arrayAmigoSecreto.length);
    const amigo = "Amigo Secreto Seleccionado: " + arrayAmigoSecreto[i];
    //alert(`El amigo secreto es: ${amigo}`);

    const li = document.createElement('li');
    li.textContent = `${arrayAmigoSecreto.length}. ${amigo}`;
    inputresultado.appendChild(li);
   

    for(let i=0; i<arrayAmigoSecreto.length; i++){
        console.log(arrayAmigoSecreto[i]);
    }


    arrayAmigoSecreto.length=0;
    inputlistaAmigos.innerHTML = ''; // Limpiar la lista de amigos

}