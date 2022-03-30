//Callbacks: funcion que llama a otra funcion

//Ejercicio 1; Sumar dos numeros

function sum(num1,num2)  //Funcion que suma dos valores 
{  
  return num1+num2;
}

function calc(num1,num2,callback) //Funcion que suma dos valores y llama a la funcion callback 
{  
  return callback(num1,num2);
}

console.log(calc(2,15,sum));  //Forma de llamar a la funcion que suma los valores y enviarles los argumentos

//Ejercicio 2

function date(callback) //Primer funcion 
{
   console.log(new Date);  //Asi se muestra la fecha actual
   setTimeout(function()  //Esta es la funcion que espera cierto tiempo para ejecutar un llamado, en este caso el callback
   {
       let date = new Date();
       callback(date);
   },3000)  //Espera 3 segundos
}

function printDate(dateNow) 
{
    console.log(dateNow);
}

date(printDate);  //Llamada a la funcion que imprime la fecha actual


