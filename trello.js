function tarea(){
	//creo div
	var cajaHijo=document.createElement("div");	
	cajaHijo.setAttribute("id","idUno");
	
	//creo input
	var nuevoInput=document.createElement("input");
	nuevoInput.setAttribute("placeholder", "coloca lista");
	nuevoInput.setAttribute("type","text");
	nuevoInput.setAttribute("id","idInput");
	
	//llamo a caja
	var cajaUno=document.getElementById("caja");

	//creo boton guardar
	var btnGuardar=document.createElement("button");
	btnGuardar.setAttribute("class", "btn btn-success");
	btnGuardar.innerHTML="Guardar";
	
	//creo boton cerrar
	var btnCerrar=document.createElement("button");
	btnCerrar.setAttribute("class","btn btn-danger");
	btnCerrar.innerHTML="X";
	
	//les digo a donde van
	cajaUno.appendChild(cajaHijo);
	cajaUno.appendChild(nuevoInput);
	cajaUno.appendChild(btnGuardar);
	cajaUno.appendChild(btnCerrar);

	
	btnGuardar.addEventListener("click", guardarNuevo);
	function guardarNuevo () {
			alert("h");
	}

	//document.getElementById("nuevoInput").value="";
}


/*var eventoButton=document.getElementById("agregaTarea");
	eventoButton=document.addEventListener("click", sumaTarea);
	function sumaTarea(){
	var caja=document.getElementById("caja");
	var lista=document.createElement("li");
	var cajaInput=document.createElement("input"),cajaInput.setAttribute("placeholder","Coloca Texto");
	caja.appendChild(lista);
}*/