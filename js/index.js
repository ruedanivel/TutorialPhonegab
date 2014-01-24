

var rt= 'primera';

function Inicio()
{

	if ( rt == 'primera' ){

		$('#IMG > .a').css("display", "none");
		$('#IMG > .b').css("display", "none"); 

		CargarIMG('primera');

		rt = 'a'


	}else if ( rt == 'a'){

		$('#IMG > .primera').css("display", "none");
		$('#IMG > .b').css("display", "none"); 

		$('#IMG > .' + rt).css("display", "block"); // mostrar

		CargarIMG('b');

		rt = 'b'

	
	}else if ( rt == 'b'){

		$('#IMG > .primera').css("display", "none"); 
		$('#IMG > .a').css("display", "none");

		$('#IMG > .' + rt).css("display", "block"); // mostrar

		CargarIMG('a');

		rt = 'a'


		
	}


}

function CargarIMG(rr)
{

	$('#load > .load').attr('src','images/cargando.gif'); // Circulo

	$.ajax({
		url:'http://regalopeliculas.16mb.com/app/lanzaGato.php',
		type:'post',
		success:  function (response) {
		
			$('#IMG > .' + rr ).attr('src',response);
 
		}
	});

}

function ImgOnload(rr)
{

	$('#IMG > .' + rr).css("display", "block"); // mostrar
	$('#load > .load').css("display", "none"); // Quitar load

	CargarIMG('a');

}


