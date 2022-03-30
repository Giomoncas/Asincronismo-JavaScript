const fetchData = require('../utils/fetchData');  //Convertimos la funcion de promesas a una peticion que pueda ser ultilizada en el proyecto
const API = 'https://rickandmortyapi.com/api/character/';  //Recurso que estanos utilizando

fetchData(API)
    .then(data => {  //Se hace el primer llamado
        console.log(data.info.count); //Se ,muestra en consola
        return fetchData(`${API}${data.results[0].id}`);  //Hacemos el return de la peticion de esa estructura
    })
    .then(data => {
    console.log(data.name);
    return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));  //Nos permite mostrar el error en caso de que haya uno

