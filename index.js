fetch("coches.json")
.then(respuesta => respuesta.json())
.then(data => {
    console.log(data.coches);
    let container = document.getElementById("cuadro");
    data.coches.forEach(linea => {

        //Agregamos la foto
        let cuadro_foto = document.createElement("div");
        cuadro_foto.className = "celda";
        let foto = document.createElement("img"); 
        foto.className = "foto";
        foto.alt = linea.id; 
        foto.src = 'imagenes/'+linea.fichero;
        cuadro_foto.appendChild(foto)
        container.appendChild(cuadro_foto);

        //Agregamos el id
        let id = document.createElement("div"); 
        id.className = "celda"; 
        id.innerText = linea.id;
        container.appendChild(id); 

        //Agregamos la marca
        let marca = document.createElement("div"); 
        marca.className = "celda"; 
        marca.innerText = linea.marca;
        container.appendChild(marca); 

        //Agregamos la modelo
        let modelo = document.createElement("div"); 
        modelo.className = "celda"; 
        modelo.innerText = linea.modelo;
        container.appendChild(modelo); 

        //Agregamos la kms
        let km = document.createElement("div"); 
        km.classList.add("celda"); 
        km.classList.add("oculta"); 
        km.innerText = linea.kilometraje;
        container.appendChild(km); 

        //Agregamos combustible
        let combustible = document.createElement("div"); 
        combustible.classList.add("celda"); 
        combustible.classList.add("oculta"); 
        combustible.innerText = linea.combustible;
        container.appendChild(combustible);
        
        //Agregamos la precio
        let precio = document.createElement("div"); 
        precio.className = "celda"; 
        precio.innerText = linea.precio;
        container.appendChild(precio);
    }) 
});
