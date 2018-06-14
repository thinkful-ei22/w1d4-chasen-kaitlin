'use strict';

function main() {

  // Target tumbnail image with mouse OR keyboard

  $('.thumbnail').on('click', function() {

    // Display image in the full-size image container at the top
   
    $('.thumbnail img').click(function () {
      let loc = $(this).attr('src');

      // Update Image to clicked image

      $('.hero img').attr('src', loc);

      // Updating image should also update alt attribute

      let altAt = $(this).attr('alt');
      
      $('.hero img').attr('alt', altAt);

    });

  });

}

$(main);