// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos= [];

//funcion mejorada
function agregarAmigoMejorado(){
    let entrada = document.getElementById("amigo");
    let nombreAmigo = entrada.value.trim();
    if (entrada.value == ""){
        alert("por favor ingresa un nombre valido");
    }else{
        listaAmigos.push(nombreAmigo);
        console.log(listaAmigos);
        //limpiar la entrada en el html
        entrada.value = "";
    }

}