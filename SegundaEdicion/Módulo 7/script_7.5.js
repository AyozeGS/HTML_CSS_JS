// JavaScript Document// JavaScript Document

function x2(n,i,x1,r) {return x1 + r*Math.sin(2*Math.PI*n/i);};
function y2(n,i,y1,r) {return y1 - r*Math.cos(2*Math.PI*n/i);};

function myLine(ctx,x1,y1,x2,y2,width,color) {
	ctx.beginPath();           // comenzar nueva linea
	ctx.moveTo(x1,y1);         // Comienzo de linea
	ctx.lineTo(x2,y2);         // Final de linea
	ctx.strokeStyle = color;   // color de lÃ­nea
	ctx.lineWidth = width;     // anchura de linea:  5 puntos
	ctx.stroke();              // dibujar linea
};

function myCircle(ctx,x,y,r,width,color) {
	ctx.beginPath();             // comenzar figura
	 // aÃ±adir arco (circulo completo):
	ctx.arc(x,y,r,0,2*Math.PI);  //     ctx.arc(x, y, r, start, stop)
	ctx.strokeStyle = color;     // color de la lÃ­nea del circulo
	ctx.lineWidth = width;       // anchura de la lÃ­nea del circulo
	ctx.stroke();                // dibujar circulo
};

function mostrar_hora(ctx) {
	var d = new Date();
	var h = d.getHours();
	if (h<10) h = '0' + h; else h = h.toString();
	var m = d.getMinutes();
	if (m<10) m = '0' + m; else m = m.toString();
	var s = d.getSeconds();
	if (s<10) s = '0' + s; else s = s.toString();
	var ds = d.getMilliseconds(); //sacamos milisegundos para hallar las decimas de segundo	
	// Calculamos las decimas de segundo a partir de las milesimas de segundo
	ds = Math.floor(ds / 100)
	ds = ds.toString();
	
	var aux = [h, m, s, ds];
	
	h = (60*(h%12)) + parseInt(m);		
	m = (60*m) + parseInt(s);
	s = parseInt(s + ds);
	 
	
	ctx.clearRect(0,0,1000,1000)  // borrar CANVAS
	
	
	var img = new Image(1000,1000);
	img.src = "esfera.jpg";
	ctx.drawImage(img, -10, 0, 1000, 1000);
	myCircle(ctx,500,500,470,20,"rgba(215,155,68,1.00)");
	ctx.fillStyle = "rgba(136,119,73,1.00)";
	myCircle(ctx,500,650,50,100,"rgba(136,119,73,1.00)");
	myCircle(ctx,500,650,100,10,"rgba(215,155,68,1.00)");
	ctx.fillStyle = "rgba(215,155,68,1.00)";
	ctx.fillRect(290,315,420,120);
	ctx.fillStyle = "rgba(136,119,73,1.00)";
	ctx.fillRect(300,325,400,100);
	ctx.fillStyle = "black";
	ctx.font = "82px Digital-7";
	ctx.fillText(aux[0] + ":" + aux[1] + ":" + aux[2] + ":" + aux[3], 315,401,370);
	
	myLine(ctx,500,650,x2(ds,10,500,90),y2(ds,10,650,90),10,"black"); //decimas de segundo
	/*myCircle(ctx,500,650,100,20,"rgba(129,129,129,1)");*/
	myCircle(ctx,500,500,30,10,"rgba(77,77,77,1)");
	myLine(ctx,500,500,x2(h,720,500,290),y2(h,720,500,290),50,"rgba(77,77,77,1)"); //horas externa
	myLine(ctx,x2(h,720,500,50),y2(h,720,500,50),x2(h,720,500,240),y2(h,720,500,240),30,"rgba(215,155,68,1.00)"); //horas interna
	myCircle(ctx,500,500,20,10,"rgba(129,129,129,1");
	myLine(ctx,500,500,x2(parseInt(m),3600,500,390),y2(parseInt(m),3600,500,390),30,"rgba(129,129,129,1)"); //minutos externa
	myLine(ctx,x2(parseInt(m),3600,500,50),y2(parseInt(m),3600,500,50),x2(parseInt(m),3600,500,340),y2(parseInt(m),3600,500,340),20,"rgba(215,155,68,1.00)"); //minutos interna
	myCircle(ctx,500,500,10,10,"black");	
	ctx.fillRect(495,495,10,10);
	myLine(ctx,500,500,x2(s,600,500,450),y2(s,600,500,450),10,"black"); //segundos

}

$(function(){
	
	var c=document.getElementById("myCanvas"); // obtiene CANVAS
	if (c.getContext) {                     // CANVAS soportado?
		var ctx = c.getContext("2d");         // define contexto 2D
		mostrar_hora(ctx);
		setInterval(function(){mostrar_hora(ctx);}, 10);
	}
	
});