// JavaScript Document

function x2(n,i,x1,r) {return x1 + r*Math.sin(2*Math.PI*n/i);};
function y2(n,i,y1,r) {return y1 - r*Math.cos(2*Math.PI*n/i);};

$(function(){
	function mostrar_hora( ) {
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
		$('#mytext').text(h + ":" + m + ":" + s + ":" + ds);
		
		h = (60*(h%12)) + parseInt(m);		
		m = (60*m) + parseInt(s);
		s = parseInt(s + ds);
		 
		
		$('#dec').attr('x2', x2(ds,10,50,9)).attr('y2', y2(ds,10,65,9));
		$('#seg').attr('x2', x2(s,600,50,45)).attr('y2', y2(s,600,50,45));
		
		$('#minext').attr('x2', x2(parseInt(m),3600,50,39)).attr('y2', y2(parseInt(m),3600,50,39));
		var aux = $('#minext').attr()[0].x1.animVal.value;
		$('#minint').attr('x1', x2(parseInt(m),3600,aux,5)).attr('y1', y2(m,3600,aux,5));
		$('#minint').attr('x2', x2(parseInt(m),3600,aux,34)).attr('y2', y2(m,3600,aux,34));
		
		$('#horext').attr('x2', x2(h,720,50,29)).attr('y2', y2(h,720,50,29));
		var aux = $('#horext').attr()[0].x1.animVal.value;
		$('#horint').attr('x1', x2(h,720,aux,5)).attr('y1', y2(h,720,aux,5));
		$('#horint').attr('x2', x2(h,720,aux,24)).attr('y2', y2(h,720,aux,24));
		//redibujamos la aguja para las decimas de segundo
		
		
		
	}
	setInterval(function(){mostrar_hora();}, 100);
	mostrar_hora();
})