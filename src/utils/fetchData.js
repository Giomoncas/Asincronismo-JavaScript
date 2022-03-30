let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;  //Instancia o llamado a una API desde Javascript


const fetchData = (url_api) => 
{
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', url_api, true);  //Hacer un llamado a una URL y abrir una conexion
        xhttp.onreadystatechange = (() => {//Escuchar lo que va a hacer esa conexion
            if(xhttp.readyState === 4)  //Garantizar que sea en estado y valor el mismo elemento
            {
                (xhttp.status === 200)  //Garantizar que el estado sea 200
                ? resolve(JSON.parse(xhttp.responseText))  //Si es asi, entonces se resuelve la promesa
                : reject(new Error('Error', url_api));  //Si no, entonces se rechaza la promesa              
            }
        });
        xhttp.send();  //Enviar la peticion
    });
    
}

module.exports = fetchData; //Se utiliza porque estamos manejando node
