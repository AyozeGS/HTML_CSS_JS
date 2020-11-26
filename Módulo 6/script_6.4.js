// JavaScript Document
$(function(){ 
	
	localStorage.c = (localStorage.c || "0.0");
    var t, cl = $("#crono");
	var zonatactil = $("#idbody");
	
	function incr(){ 
		localStorage.c = +localStorage.c + 0.01;
	}
    		
	function mostrar()  { 
		if ((+localStorage.c) < 10.00){ 
			cl.html('0'+(+localStorage.c).toFixed(2));
		}
		else 
			cl.html(''+(+localStorage.c).toFixed(2));
	};
	
	function arrancar() {
		t=setInterval(function(){incr(); mostrar()}, 10);};
	
	function parar() { 
		clearInterval(t);  
		t=undefined; 
		$("#aux2").append('<br>'+cl.html()+' segundos');
		localStorage.lista = $("#aux2").html();
	};
	
	function cambiar() {
		if (!t) 
			arrancar(); 
		else 
			parar(); 
	};

	zonatactil.on('tap', cambiar);
	zonatactil.on('swipe', function(){
				if (t === undefined ){
					localStorage.c="00.00";
					$("#aux2").html('<br><h2>MARCAS REGISTRADAS</h2>');
					mostrar();};	
				});
	mostrar();
	localStorage.lista = (localStorage.lista || '<br><h2>MARCAS REGISTRADAS</h2>');
	$("#aux2").html(localStorage.lista);
});