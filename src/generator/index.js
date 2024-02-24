//Declaración de la función del Generador
function* gen(){
	yield 1;
	yield 2;
	yield 3;
}

//Expresión de la función Generadora
const g = gen();

//Llamada del método next en el objeto del Generador
console.log(g.next()); //Imprime el primer yield: {value: 1, done: false} 

//Llamada del método next en el objeto del Generador
console.log(g.next().value); //Imprime el primer yield: 1
console.log(g.next().value); //Imprime el segundo yield: 2
console.log(g.next().value); 
console.log(g.next().value); //Si se coloca un cuarto console, la consola indica "Undefined"

//Declaración de la función del Generador pasando un argumento
function* iterate(array){
  for(let value of array){ //El loop del for revisa cada elemento del array
      yield value; //value es asignado en cada ciclo
  }
}

const it = iterate(['Oscar', 'Omar', 'Ana', 'Lucia', 'Juan']);

// Utilizar el generator en un bucle while
let resultado = it.next();
while (!resultado.done) {
  console.log(resultado.value);
  resultado = it.next();
}


