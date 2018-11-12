'use strict';

var meme_list = [];

var Meme = function(meme){
    this.image = meme.image;
    this.title = meme.title;
    this.category = meme.category;
    this.easterEgg = meme.easterEgg;
    this.meme_id = meme.meme_id;
    this.stars = meme.stars;
};

Meme.prototype.toHtml = function(){
    var source = $('#meme-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

Handlebars.registerHelper('star-icons', function(stars){
    stars = parseInt(stars);
    var result = '';
    switch(stars) {
        case 5: 
            result += '&#9733;';
        case 4:
            result += '&#9733;';
        case 3:
            result += '&#9733;';
        case 2:
            result += '&#9733;';
        default:
            result += '&#9733;';
    }
    switch(stars) {
        case 1:
            result += '&#9734;';
        case 2:
            result += '&#9734;';
        case 3:
            result += '&#9734;';
        case 4: 
            result += '&#9734;';
    }
    return result;
});

memes.forEach(function(meme){
    meme_list.push(new Meme(meme));
});
meme_list.forEach(function(meme){
    $('#Meme-listings').append(meme.toHtml());
});
