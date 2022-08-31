//querySelector
const heading = document.querySelector('h2') // retorna 0 o 1 elementos
console.log(heading)

//querySelectorAll
const enlace = document.querySelectorAll('.navegacion a')// retorna de 0 a todos los elementos disponibles
console.log(enlace) 

//getElementById
const heading2 = document.getElementById('heading')
console.log(heading2)



//Generar un nuevo enlace 
const nuevo_enlace = document.createElement('A')

// Agregar atributos
nuevo_enlace.href = 'nuevo-enlace.html';


// Agregar el texto
nuevo_enlace.textContent = 'holaaaa'


// Agregar la clase
nuevo_enlace.classList = 'enlace-2'
 


      