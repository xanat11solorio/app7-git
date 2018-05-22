// JavaScript Document

$(document).ready(function(e) {
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft", function(){
			navigator.notification.alert("deslizó hacia la izquierda",function() {"aplicacion 7", "ok"});
		});
		$('#derecha').on("swiperight", function(){
			navigator.notification.alert("¿Que quieres hacer?",function(op) {
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
			},"aplicacion 7", "Beepear,Vibrar,Cancelar");
		}); //cerrar deslizar derecha
	},false); //cerrar deviceready		
}); // cerrar document