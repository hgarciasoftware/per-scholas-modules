const prompt = require('prompt-sync')();

const numberArray = Array.from({length: 10}, () => Math.floor(Math.random() * 30));
const stringArray = Array.from({length: 10}, () => {
  const randomLength = Math.floor(Math.random() * 15 + 1);
  const randomCharCode = Math.floor(Math.random() * (123 - 97) + 97);
  return String.fromCharCode(randomCharCode).repeat(randomLength);
});

console.log(`for exercises 1 and 2, our random array is ${JSON.stringify(numberArray)}`);
console.log(`for exercise 3, our random array is ${JSON.stringify(stringArray)}`);



// write a program to add up all the elements of a number array
console.log('\n---EXERCISE 1---');

const calculateSum = array => {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum;
};

const sum = calculateSum(numberArray);

console.log(`the sum of all the numbers is ${sum}`);



// write a program to look for the user input in an array
// when it finds the first occurrence, display the value and the index of that value
console.log('\n---EXERCISE 2---');

const input = prompt('enter a number: ');

if (input === '' || input === null) {
  console.log('EXERCISE 2 SKIPPED');
} else {
  const index = numberArray.indexOf(Number(input));

  if (index === -1) {
    console.log(`the array does not include ${input}`);
  } else {
    console.log(`the first occurrence of ${input} is at index ${index}`);
  }
}



// write a program to find the longest element in a string array
console.log('\n---EXERCISE 3---');

const findLongestElement = array => {
  let longestElement = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestElement.length) {
      longestElement = array[i];
    }
  }

  return longestElement;
};

const longestElement = findLongestElement(stringArray);

console.log(`longest element is ${longestElement}, with length ${longestElement.length}`);
