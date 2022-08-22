var llave = "b5tAkNv29Mp2eDI2zGG5RcSahL4xb29AwNvIByhJ";

async function traerDatos(maquina){
    var urlMarte= `https://api.nasa.gov/mars-photos/api/v1/rovers/${maquina}/photos?sol=1000&page=1&api_key=${llave}`;
    var respuestaAPI = await fetch(urlMarte);
    var respuestaAPIJson = await respuestaAPI.json();
    var lista = respuestaAPIJson.photos;
    var contenedor = document.getElementById("contenedorCartas");
    contenedor.classList.add("margen")
    console.log(lista)
   
    lista.forEach((elemento,indice,arreglo)=>{
        contenedor.innerHTML += `<div class="card mb-2 col-sm-12 col-md-6 col-lg-4">
        <img src=${elemento.img_src} class="card-img-top" style="height: 100%" alt=${elemento.id}>
        <div class="card-body">
          <h5 class="card-title">${elemento.camera.full_name}</h5>
          <p class="card-text">${elemento.earth_date} </p>
        </div>
      </div>`
    });
    
}

 function Buscar(){
    var opcion = document.getElementById("robot");
    var maquina = opcion.value;
    console.log(maquina);
    traerDatos(maquina);
}

