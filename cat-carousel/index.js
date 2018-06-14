'use strict';



// Target tumbnail image with mouse OR keyboard

$('.thumbnail').on('keypress click', function() { 

});
console.log('hello');
// Display image in the full-size image container at the top
  
function main() {

  $('.thumbnail').on('keypress click', function () {

    let loc = $(this).find('img').attr('src');

    // Update Image to clicked image

    $('.hero img').attr('src', loc);

    // Updating image should also update alt attribute

    let altAt = $(this).find('img').attr('alt');
      
    $('.hero img').attr('alt', altAt);

  });

}

$(main);