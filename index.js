$(function input(){
    $('#js-shopping-list-form').submit(event => {
        event.preventDefault();
        
        let name = $(event.currentTarget).find('#shopping-list-entry').val();
        $('.shopping-list').append('<li><span class="shopping-item"><span id="newName"></span></span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
        $('#newName').html(name);
        console.log(name);
    });
    $('.shopping-item-delete').on('click', function(event){
        event.stopPropagation();
        $(this).closest('li').remove();
        console.log('delete');
    });
    $('.shopping-item-toggle').on('click', function(event){
        //event.stopPropagation();
        $('.shopping-item').toggleClass('shopping-item__checked').closest('.shopping-item');
        console.log('check');
    });
    
        
});
$(input());