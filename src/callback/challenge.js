let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  //Instancia o llamado a una API desde Javascript
let API = "https://rickandmortyapi.com/api/character/";  //API a la cual le vamos a hacer la peticion

function fetchData(url_api, callback) //Funcion que recibe la url api y la funcion callback
{
    let xhttp = new XMLHttpRequest();
    xhttp.open('GET', url_api, true);  //Hacer un llamado a una URL y abrir una conexion
    xhttp.onreadystatechange = function(event) //Escuchar lo que va a hacer esa conexion
    {
        if(xhttp.readyState === 4)  //Garantizar que sea en estado y valor el mismo elemento
        {
            if(xhttp.status === 200)
            {
                callback(null, JSON.parse(xhttp.responseText));
            }
            else
            {
                const error = new Error("Error" + url_api);
                return callback(error, null);
            }
        }
    } 
    xhttp.send();  //Enviar la peticion
}

//Lamados a la API con callbacks

fetchData(API,function(error1, data1)
{
   if(error1) return console.error(error1);
   fetchData(API + data1.results[0].id, function(error2, data2)
   {
     if(error2) return console.error(error2);
        fetchData(data2.origin.url, function(error3, data3)
        {
          if(error3) return console.error(error3);
            console.log(data1.info.count);  //Cuantos personajes existen en la API Rick and Morty
            console.log(data2.name); //Nombre del personaje
            console.log(data3.dimension);  //Dimension en la que se encuentra el personaje
        })   
  }) 
});

