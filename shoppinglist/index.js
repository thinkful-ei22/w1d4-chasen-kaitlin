'use strict';

function main (){

  ///be able to check and uncheck 

  $('.shopping-item-toggle').on('click',  function(){
    console.log('ii');

    // toggle strikethrough
    $( this ).closest( 'li' ).find('.shopping-item').toggleClass('shopping-item__checked'); 
  });
 
  //targeting delete button
  $('ul').on('click', '.shopping-item-delete', function() {

    //delete closest <li> to the button
    $( this ).closest( 'li' ).remove();

  });

  // add new item to shopping list

  $('#js-shopping-list-form').submit(event => {
   
    event.preventDefault();
    const newItem = $('input[type=text][name=shopping-list-entry]').val();

        
    $('.shopping-list').append(
      `<li> 
           <span class="shopping-item">${newItem}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
        </li>`
    );
  });
}

$(main);