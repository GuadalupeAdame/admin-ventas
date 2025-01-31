
import {productos,entradas,salidas,ventas } from './ciudades.js'
let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

enlaces.forEach(function(enlace){
    enlace.addEventListener('click',function(){
         //REMOVER ACTIVO
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregar la clase  'active' al enlace actual
        this.classList.add('active')
        //Obtener el contenido correspondiente segun el enlace
        let contenido= obtenerContenido(this.textContent)

        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
    });
    //AGREGAR ACTIVE AL QUE CORRESPONDA    
});
//FUNCION PARA TRAER LA INFORMACION CORRECTA DESDE CIUDADES.JS
function obtenerContenido(enlance){
    let contenido ={
        'Productos': productos,
        'Entradas': entradas,
        'Salidas': salidas,
        'Ventas': ventas,
    };
    return contenido[enlance];

}