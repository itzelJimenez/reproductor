
 document.getElementById('audio').duration;

function reproducir(){
	document.getElementById('audio').play();
}

function pausar(){
	document.getElementById('audio').pause(true);
}

function detener(){
	document.getElementById('audio').load();
}


function volumenMenos() { 
    document.getElementById('audio').volume-=0.1;
} 
function volumenMas() { 
    document.getElementById('audio').volume+=0.1;
} 
function avanzar(){
    document.getElementById('audio').currentTime+=5;
}

function regresar(){
    document.getElementById('audio').currentTime-=5;
}
