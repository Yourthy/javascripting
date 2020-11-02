//created an annonymous function with parameter num
const isOdd = function(num){      
  return num % 2 !== 0;   //return value produces boolean value for if a number divided by 2 gives a remainder (notice !== statement)
}
console.log("3 is odd: " + isOdd(3));   //example 1
console.log("8 is odd: " + isOdd(8));   //example 2