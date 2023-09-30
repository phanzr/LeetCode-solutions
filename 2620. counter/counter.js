//EXE1 Runtime 47ms Beats 74.18% Memory 42.3MB
function createCounter(n) {
  return function() {
    // console.log(n);
    //n++;
    //console.log(n);
    return n++;
  };
}

function performCalls(n, calls) {
  const result = [];
  const count = counter(n);

  for (const call of calls) {
    if (call === "call") {
      result.push(count());
    }
  }
  return result;
}
const counter = createCounter(10) //waiting for next function calls: counter();
//Al ejecutar la variable q almacena la funcion, recien se ejecutara la funcion interna del closure
counter() // 10
counter() // 11
counter() // 12