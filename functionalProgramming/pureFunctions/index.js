function add(a, b) {
    return a + b;
  }
  
  console.log(add(3, 5));
  console.log(add(3, 5));



  function square(n) {
    return n * n;
  }
  
  console.log(square(4));
  console.log(square(4));


  function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
  }
  
  console.log(getEvenNumbers([1, 2, 3, 4, 5]));
  console.log(getEvenNumbers([1, 2, 3, 4, 5]));


  function doubleNumbers(numbers) {
    return numbers.map(n => n * 2);
  }
  
  console.log(doubleNumbers([1, 2, 3]));
  console.log(doubleNumbers([1, 2, 3]));


  function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  console.log(sumArray([1, 2, 3, 4]));
  console.log(sumArray([1, 2, 3, 4]));


  function toUpperCase(str) {
    return str.toUpperCase();
  }
  
  console.log(toUpperCase("hello"));
  console.log(toUpperCase("hello"));