'use strict';

$('#search').on('submit', function(event) {
    
    event.preventDefault();
    $('.meme').hide();
    var lookup = $('#lookup').val().toLowerCase();
    meme_list.forEach(function(meme) {
        if(meme.title.toLowerCase().indexOf(lookup) >= 0) {
            $(`.meme[data-id="${meme.meme_id}"]`).fadeIn();
        }
    });
});
console.log('hi');