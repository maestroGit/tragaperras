      window.onload=inici;
      var imagenes=["jose.png","grupo-pica.png","jordi.png","javi.png","grupo-ordesa.png","arnau.png","josemaria.png"];
      var cantidad=imagenes.length; 
      var credito=aleatorioCoin();//desde 8 a diez aleatoria
      var v=aleatorioTiles();//de 0 a 6 diez aleatoria
      //var boton=document.getElementById("b0");
      //console.log(boton);
      var mp3;
      tiles=document.getElementsByClassName("ventana");
      // variables cuenta atrás
      var time = 10;
      console.log(time);
      var timeSecons = time;
      console.log(timeSecons);
      var timeMinuts = Math.floor(time/60);
      console.log(timeMinuts);
       

function inici(){        
	       		//eventos tirar - volver a tirar
	       		document.getElementById("lanzar").onclick=tirar;
	       		document.getElementById("b0").onclick=volvertirarb0;
	       		document.getElementById("b1").onclick=volvertirarb1;
	       		document.getElementById("b2").onclick=volvertirarb2;
	       		mp3=document.getElementById("sonido");
	       		document.getElementById("dinero").innerHTML=credito;
	       		document.getElementById("btn_reload").onclick=reload;
	       		//inicio pintando tantas veces como credito aleatorio el moneda.png en el div correspondiente
	       		for(i=0;i<credito;i++){
	       		document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;
	   			}
	   			document.getElementById("cuadro_mensaje").onclick=ocultar;
	   			//cuenta atrás cada segundo
	   			document.getElementById("count").innerHTML=`${timeMinuts}:${timeSecons%60}`;
	   			startCounDown();
}

//inicio cuenta atrás
function startCounDown(){
setInterval(countDown,1000);
}

//Función para la cuenta atrás
function countDown(){
	if(timeSecons>0){
	let minutes = Math.floor(timeSecons/60);
	let secons = timeSecons % 60;
	console.log(minutes);
	console.log(secons);
	document.getElementById("count").innerHTML=`${minutes}:${secons}`;
	timeSecons--;
	}
	else{
		count.innerHTML= `Sin tiempo`;
	}
}

//Acción del botón tirar: Si hay crédito Genera imagenes - resta monedas  y verifica premio
function tirar(){	
				if (credito>0 && timeSecons>0){
				// tiene que haber crédito div id="dinero"si credito es 0 no va
				//tres imagenes al azar
				//si son iguales las 3 premio aleatorio nºmonedas con musica.
				//al cerrar la ventana del premio se suman al total de creditos.div id="dinero"
				sonar();
				credito--
				document.getElementById("dinero").innerHTML=credito;
				// borro el div pintado con moneda.png corresponeiente al valor del credito anterior
				document.getElementById("monedas").innerHTML=``;
				//pintando tantas veces moneda.png como credito tengo en el  en el div correspondiente
				for(i=0;i<credito;i++){
     			document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				aleatorioTiles();
				tiles[0].innerHTML=``;
				tiles[0].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				aleatorioTiles();
				tiles[1].innerHTML=``;
				tiles[1].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				tiles[2].innerHTML=``;
				aleatorioTiles();
				tiles[2].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				//check premio
				checkPremio();
				}
				else{
					sonar3();
					document.getElementById("dinero").innerHTML=credito;
					//mostrar botton reload
					document.getElementById("reload").style.display="flex";
				}
}

	function volvertirarb0(){
					if (credito>0 && timeSecons>0){
					sonar2();
					credito--
					document.getElementById("dinero").innerHTML=credito;
					// borro el div pintado con moneda.png corresponeiente al valor del credito anterior
					document.getElementById("monedas").innerHTML=``;
					//pintando tantas veces moneda.png como credito tengo en el  en el div correspondiente
					for(i=0;i<credito;i++){
		     			document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
						//document.getElementById("monedas").innerHTML=``;
						tiles[0].innerHTML=``;
						tiles[0].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
						//check premio
						checkPremio();
					}
					else{
						sonar3();
						document.getElementById("dinero").innerHTML=credito;
						//mostrar botton reload
						document.getElementById("reload").style.display="flex";
						}
	}	

	function volvertirarb1(){
					if (credito>0 && timeSecons>0){
					sonar2();
					credito--
					document.getElementById("dinero").innerHTML=credito;
					// borro el div pintado con moneda.png corresponeiente al valor del credito anterior
					document.getElementById("monedas").innerHTML=``;
					//pintando tantas veces moneda.png como credito tengo en el  en el div correspondiente
					for(i=0;i<credito;i++){
	     			document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
					tiles[1].innerHTML=``;
					tiles[1].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
					
					//check premio
					checkPremio();
					
					}
					else{
					sonar3();
					document.getElementById("dinero").innerHTML=credito;
					//mostrar botton reload
					document.getElementById("reload").style.display="flex";
					}
	}	

function volvertirarb2(){
				if (credito>0 && timeSecons>0){
				sonar2();
				credito--
				document.getElementById("dinero").innerHTML=credito;
				// borro el div pintado con moneda.png corresponeiente al valor del credito anterior
				document.getElementById("monedas").innerHTML=``;
				//pintando tantas veces moneda.png como credito tengo en el  en el div correspondiente
				for(i=0;i<credito;i++){
	     		document.getElementById("monedas").innerHTML+=`<img src="img/moneda.png">`;}
				tiles[2].innerHTML=``;
				tiles[2].innerHTML+=`<img src="img/${imagenes[aleatorioTiles()]}">`;
				// tiles[2].innerHTML+=`<img src="img/${imagenes[v]}">`;
				//check premio
				//issue - detecta la == antes de mostrar las img
				checkPremio();
				}
				else{
				sonar3();
				document.getElementById("dinero").innerHTML=credito;
				//mostrar botton reload
				document.getElementById("reload").style.display="flex";
				}
}	

//Ejecutan los archivos sonoros
function sonar(){
				mp3.src="audios/lanzar.mp3";
				mp3.play();
}

function sonar2(){
				mp3.src="audios/otra.wav";
				mp3.play();

}	

function sonar3(){
				mp3.src="audios/final.mp3";
				mp3.play();
}	
//calcula un nº aleatorio entre 10 y 8
function aleatorioCoin(){
  						return Math.round(Math.random() * (10 - 8) + 8);
					  //La función Math.round() retorna el valor de un número redondeado al entero más cercano.
					  //Math.random() devuelve un número aleatorio de 0 a 0.999
}

//calcula un nº aleatorio entre 0 y 5
function aleatorioTiles(){
  						return Math.round(Math.random() * (10 - 4) + 0);
  						//La función Math.round() retorna el valor de un número redondeado al entero más cercano.
}

//verifica que existan tres imagenes iguales y da premio sumándolo al crédito disponible
function checkPremio(){
					//he tenido que pasar con innerHTML el contenido los slot 1-2-3 a variables para poder evaluar el if
					slot1=document.getElementsByClassName('ventana')[0];
					slot2=document.getElementsByClassName('ventana')[1];
					slot3=document.getElementsByClassName('ventana')[2];
					var j=slot1.innerHTML;
					var k=slot2.innerHTML;
					var y=slot3.innerHTML;
					if(j==k && y==k){
						premio=aleatorioCoin();
						credito=credito+premio; 
						mp3.src="audios/ganar.mp3";
						mp3.play();
						mensaje();
					}
}

//Muestra mensaje en pantalla
function mensaje(){
					document.getElementById("dinero").innerHTML=credito;
					document.getElementById("velo").style.display="none";
					document.getElementById("cuadro_mensaje").style.display="block";
					document.getElementById("cuadro_mensaje").innerHTML="Has ganado "+premio+" monedas extras ";
					for(i=0;i<premio;i++){
					document.getElementById("velo").style.display="block";
					document.getElementById("cuadro_mensaje").innerHTML+=`<img src="img/moneda.png">`;
					}	
					document.getElementById("cuadro_mensaje").innerHTML+=`<img class='borrar'src="img/cruz.svg">`;		
}

//Oculta elementos en pantalla
function ocultar(){
					document.getElementById("cuadro_mensaje").style.display="none";
					document.getElementById("velo").style.display="none";
}

function reload(){
					location.reload();

}




