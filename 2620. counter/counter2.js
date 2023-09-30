//EXE1: base w/conditionals
function createCounter(n) {
  return function() {
    // console.log(n);
    if(-1000 <= n <= 1000){
      return n++;
      //console.log(n);
    }
  };
}

function performCalls(n, calls) {
const result = [];
const count = counter(n);

  if (0 <= calls.length <= 1000) {
    for (const call of calls) {
      if (call === "call") {
        result.push(count());
      }
    }
    console.log(result);
    return result;
  }
}

const counter = createCounter(10) //waiting for next function calls: counter();
//Al ejecutar la variable q almacena la funcion, recien se ejecutara la funcion interna del closure
counter() // 10
counter() // 11
counter() // 12