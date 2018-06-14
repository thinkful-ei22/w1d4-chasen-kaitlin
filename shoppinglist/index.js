function main (){
    ///addd item to list

    $('.shopping-item-toggle').on('click', function(event){
        // console.log('ii');
         $('shopping-item-toggle' ).closest( "span" ).toggleClass("shopping-item__checked");  
    });


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
        ///be able to check and uncheck 
        
        


        ////and delete items


    })





}

$(main);