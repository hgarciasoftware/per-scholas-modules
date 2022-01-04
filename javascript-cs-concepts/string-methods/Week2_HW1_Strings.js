const prompt = require('prompt-sync')();

// write a program to find if a user entered string is a palindrome or not (for example "racecar" is a palindrome)
console.log('---EXERCISE 1---');

let input = prompt('enter a string (an empty input will skip): ');

if (input === '' || input === null) {
  console.log('EXERCISE 1 SKIPPED');
} else {
  const array = input.split('');
  const reversedArray = array.reverse();
  const reversedInput = reversedArray.join('');

  console.log(`${input} ${input === reversedInput ? 'is' : 'isn\'t'} a palindrome`);
}



// write a program to find how many letters, numbers, and special characters are in a user entered string
console.log('\n---EXERCISE 2---');

input = prompt('enter a string (an empty input will skip): ');

if (input === '' || input === null) {
  console.log('EXERCISE 2 SKIPPED');
} else {
  let numberOfLetters = 0;
  let numberOfNumbers = 0;
  let numberOfSpecialChars = 0;

  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      numberOfLetters++;
    } else if (charCode >= 48 && charCode <= 57) {
      numberOfNumbers++;
    } else {
      numberOfSpecialChars++;
    }
  }

  console.log(`${input} has ${numberOfLetters} letters`);
  console.log(`${input} has ${numberOfNumbers} numbers`);
  console.log(`${input} has ${numberOfSpecialChars} special characters`);
}



// write a program to find how many times a user entered word occurs in given string
console.log('\n---EXERCISE 3---');

input = prompt('enter a string (an empty input will skip): ');

if (input === '' || input === null) {
  console.log('EXERCISE 3 SKIPPED');
} else {
  const substring = prompt('enter a substring (an empty input will skip): ');

  if (substring === '' || substring === null) {
    console.log('EXERCISE 3 SKIPPED');
  } else {
    let numberOfOccurrences = 0;
  
    let i = 0;
    while (i <= input.length - substring.length) {
      if (input.slice(i, i + substring.length) === substring) {
        numberOfOccurrences++;
        i += substring.length;
      } else {
        i++;
      }
    }

    console.log(`${substring} occurs ${numberOfOccurrences} times in ${input}`);
  }
}



// make a calculator using switch/case and take a user input to perform any calculation
// if user enters any value other than 1-5, display a message 'invalid option' and end the program
console.log('\n---EXERCISE 4---');
console.log('1. add' + '\n2. subtract' + '\n3. multiply' + '\n4. divide' + '\n5. exit\n');

input = prompt('enter your choice [1-5]: ');

switch (input) {
case '1': {
  console.log('\naddition');

  let firstNumber = prompt('enter the first number: ');
  let secondNumber = prompt('enter the second number: ');

  if (
    firstNumber === '' || firstNumber === null || isNaN(firstNumber) ||
    secondNumber === '' || secondNumber === null || isNaN(secondNumber)
  ) {
    console.log('invalid');
    break;
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);

  break;
}
case '2': {
  console.log('\nsubtraction');

  let firstNumber = prompt('enter the first number: ');
  let secondNumber = prompt('enter the second number: ');

  if (
    firstNumber === '' || firstNumber === null || isNaN(firstNumber) ||
    secondNumber === '' || secondNumber === null || isNaN(secondNumber)
  ) {
    console.log('invalid');
    break;
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);

  break;
}
case '3': {
  console.log('\nmultiplication');

  let firstNumber = prompt('enter the first number: ');
  let secondNumber = prompt('enter the second number: ');

  if (
    firstNumber === '' || firstNumber === null || isNaN(firstNumber) ||
    secondNumber === '' || secondNumber === null || isNaN(secondNumber)
  ) {
    console.log('invalid');
    break;
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);

  break;
}
case '4': {
  console.log('\ndivision');

  let firstNumber = prompt('enter the first number: ');
  let secondNumber = prompt('enter the second number: ');

  if (
    firstNumber === '' || firstNumber === null || isNaN(firstNumber) ||
    secondNumber === '' || secondNumber === null || isNaN(secondNumber)
  ) {
    console.log('invalid');
    break;
  }

  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  console.log(`${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);

  break;
}
case '5':
  console.log('exit');
  break;
default:
  console.log('invalid');
}



// capitalize the first letter of each word in a given string (or user entered string/sentence)
console.log('\n---BONUS EXERCISE---');

input = prompt('enter a string (an empty input will skip): ');

if (input === '' || input === null) {
  console.log('BONUS EXERCISE SKIPPED');
} else {
    let output = input;

    for (let i = 0; i < output.length; i++) {
      if (i === 0 || output.charAt(i - 1) === ' ') {
        output = output.slice(0, i) + output.charAt(i).toUpperCase() + output.slice(i + 1);
      }
    }

    console.log(`${input} >> ${output}`);
}
