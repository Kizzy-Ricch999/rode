function test(x, y, z) {
  const s = Math.pow(x, 3) + Math.pow(y, 2) + z + 1;
  return s;
}
console.log(test(2, 3, 4590));

// let a = 2;
// let b = 5;
// let c = 8;

const squareRoot = (a, b, c) => {
  return Math.sqrt(Math.pow(b, 2)) - 4 * a * c;
};

const quadratic = (a, b, c) => {
  let x1 = (-b + squareRoot(a, b, c)) / (2 * a);
    
  let x2 = (-b - squareRoot(a, b, c)) / (2 * a);

  if (isNaN(x1)) {
    x1 = Number.POSITIVE_INFINITY
  }

  if (isNaN(x2)) {
    x2 = Number.POSITIVE_INFINITY
  }

  if (!Number.isFinite(x1)) {
    x1 = 'undefined'
  }

  

  if (!Number.isFinite(x2)) {
    x2 = 'undefined'
  }

  console.log(`x1: ${x1}, x2: ${x2}`);
  console.log('x1 ', x1, 'x2 ', x2);

return [x1 , x2]

};


console.log(23 / 0)
// invoke the function
const result = quadratic(3, 3, 4);
console.log('Result of Quadratic: ', result)


const isDivisibleByTwo = (number) => number % 2 === 0

console.log(isDivisibleByTwo(51))
