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
        agregarAmigosLista();
    }
}
//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
// Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
function agregarAmigosLista(){
    let lista = document.getElementById("amigosLista");
    //limpimos la lista
    lista.innerHTML = "";
    //recorremos la lista amigos
    for (let i = 0; i < listaAmigos.length; i++){
        console.log(listaAmigos);
        // creamos un elemeto lista
        let elemento = document.createElement ("li");
        elemento.textContent = listaAmigos[i];
        lista.appendChild(elemento);
    }
}

//Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el 
// array lista amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
function sortearAmigo(){
    let indice = Math.floor(Math.random() * listaAmigos.length);
    console.log(listaAmigos[indice]);

    //Actualizar el contenido del elemento de resultado utilizando document.getElementById()  
    // e innerHTML para mostrar el amigo sorteado.
    let resultado = document.getElementById("amigosLista");
    resultado.innerHTML = listaAmigos[indice];
}