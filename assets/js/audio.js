
 var cancion =document.getElementById('audio');
function reproducir(){
	cancion.play();
}

function pausar(){
	cancion.pause(true);
}

function detener(){
	//cancion.load(); Recarga la canción. Nota: Los megas cuestan.
  cancion.pause();
  cancion.currentTime = 0;
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
  barra.max = cancion.duration;

};

function duracionTotal(){
 
 var escribirDuracion = document.getElementById('duration');

 escribirDuracion.innerHTML = cancion.currentTime;
}

function formatoDeTiempo(tiempo){
	
}
//agregar eventos

cancion.addEventListener('tiempoTranscurrido', formatoDeTiempo());

cancion.addEventListener('duration', duracionTotal());