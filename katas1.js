function oneThroughTwenty() {
  let numeros = []
  for (let i = 1; i <= 20; i++) {
    console.log(numeros + i)
  }
  return numeros
}
console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {
  let pares = 2
  while (pares < 20) {
    console.log(pares)
    pares += 2
  }
  return pares
}
console.log(evensToTwenty())
//call function evensToTwenty

function oddsToTwenty() {
  let impares = 1
  while (impares < 19) {
    console.log(impares)
    impares += 2
  }
  return impares
}
console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
  let multiplo = 5
  while (multiplo < 100) {
    console.log(multiplo)
    multiplo += 5
  }
  return multiplo
}

//call function multiplesOfFive

function squareNumbers() {
  let quadrado = []
  for (let i = 0; i < quadrado.length; i++) {
    console.log(quadrado + i)
    quadrado = i * i 
  }
  return quadrado
}
console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
  let numVolta = []
  for (count = 20; count >= 1; count--) {
    console.log(numVolta + count)
  }
  return numVolta
}
console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
  let parVolta = 20
  while (parVolta > 2) {
    console.log(parVolta)
    parVolta -= 2
  }
  return parVolta
}
console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  let imparVolta = 19
  while (imparVolta > 1) {
    console.log(imparVolta)
    imparVolta -= 2
  }
  return imparVolta
}
console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  let multiploVolta = 100
  while (multiploVolta > 5) {
    console.log(multiploVolta)
    multiploVolta -= 5
  }
  return multiploVolta
}
console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  let quadradoVolta = []
  for (let index = 0; index < quadradoVolta.length; index++) {
    const element = quadradoVolta[index];
  }
  return quadradoVolta
}
console.log(squareNumbersBackwards())
//call function squareNumbersBackwards
