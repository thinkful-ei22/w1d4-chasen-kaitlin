/*
let's create fizzbuzz
//divisible by 3 = fizz
//divisible by 5 = buzz
//divisible by 3 or 5 = fizzbuzz
otherwise return the number

*/
'use strict';

// function that evaluates to fizz, buzz, fizzbuzz
const fizzBuzz = function(num) {
  if(num%15 === 0) {
    return 'fizzbuzz';
  } else if(num%5 === 0) {
    return 'buzz';
  }else if(num%3 === 0) {
    return 'fizz';
  } else {
    return num;
  }
};

// console.log(fizzBuzz(2));

//create text to show in the browswer
const fizzBuzzHtml = function(n) { // n = 1,2,String,
  let fizzClass = '';
  if(typeof n === 'string'){
    fizzClass = n;
  }
  return `<div class='fizz-buzz-items ${fizzClass}'><span> ${n} </span></div>`;
};
// console.log(fizzBuzzHtml('fizz'));

const handleSubmit = function() {
  $('#number-chooser').on('submit',event => {
    event.preventDefault();
    const userInput = $('#number-choice').val();

    //once input is taken reset the input box
    $('number-choice').val('');
    //or
    // $(event.target).reset();

    //take user input and evaluate that to Fizz,Buzz...
    const fizzBuzzItems = [];
    for (let i = 1; i < userInput; i++) {
      fizzBuzzItems.push(fizzBuzz(i));
    }
    const html = fizzBuzzItems.map(item => fizzBuzzHtml(item));
    $('.js-results').append(html);
    // console.log(userInput);
  });
};
function main() {
  handleSubmit();
}

$(main);