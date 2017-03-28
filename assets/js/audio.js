
 var cancion =document.getElementById('audio');
function reproducir(){
	cancion.play();
}

function pausar(){
	cancion.pause(true);
}

function detener(){
	cancion.load();
}


function volumenMenos() { 
    cancion.volume-=0.1;
} 
function volumenMas() { 
    cancion.volume+=0.1;
} 
function avanzar(){
    cancion.currentTime+=5;
}

function regresar(){
    cancion.currentTime-=5;
}

 function mostrarAvance() {

   var barra = document.getElementById("barra");

  barra.value = cancion.currentTime;

};

function duracionTotal(){
 
 var escribirDuracion = document.getElementById('duration')
 var duracion = document.getElementById("audio").duration;
 escribirDuracion.innerHTML = duracion;
}

function formatoDeTiempo(tiempo){
	
}
//agregar eventos

cancion.addEventListener('tiempoTranscurrido', formatoDeTiempo());

cancion.addEventListener('duration', duracionTotal());