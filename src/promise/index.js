const somethingWillHappen = () => {  //Funcion que retorna una promesa
    return new Promise((resolve, reject) => { //Funcion que crea una nueva promesa y valida si se ejecuta o se rechaza
    if(true)  //Si el valor es verdadero la promesa se resuelve, si el valor es falso la promesa se rechaza
    {
        resolve('Promesa se resuelve!');
    } 
    else
    {
        reject('Promesa se rechaza!');
    }
    
    });
};

somethingWillHappen()
    .then(response => console.log(response)) //Funcion que se ejecuta cuando se resuelve la promesa
    .catch(error => console.error(error)); //Funcion que se ejecuta cuando se rechaza la promesa 

//Otra funcion promesa

const somethingWillHappen2 = () => {  //Funcion que retorna una promesa
    return new Promise((resolve, reject) => { //Funcion que crea una nueva promesa y valida si se ejecuta o se rechaza
        if(true)
        {
            setTimeout(() => {  //Funcion que permite que la ejecucion de esta tarea se haga en un tiempo determinado, en este caso son 2 segundos
                resolve("True");
            }, 2000);
        }
        else
        {
            const error = new Error('Error');  //Muestra la informacion detallada del error
            reject(error);
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response)) //Funcion que se ejecuta cuando se resuelve la promesa
    .catch(error => console.error(error)); //Funcion que se ejecuta cuando se rechaza la promesa

//Correr varias promesas al tiempo o encadenadas (Promise.all())

Promise.all([somethingWillHappen(), somethingWillHappen2()])  //Funcion que permite ejecutar varias promesas al tiempo
    .then(response => {
        console.log("Array de promesas resueltas", response);
    })
    .catch(error => {
        console.error(error);
    });