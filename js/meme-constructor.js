'use strict';

var meme_list = [];

var Meme = function(meme){
    this.image = product.image;
    this.title = product.title;
    this.category = product.category;
    this.easterEgg = product.easterEgg;
    this.meme_id = product.meme_id;

};
Meme.prototype.toHtml = function(){
    var source = $('#meme-template').text();
    var template = Handlebars.compile(source);
    return template(this);
};

memes.forEach(function(meme){
    meme_list.push(new Meme(meme));
});
meme_list.forEach(function(meme){
    $('#meme-listings').append(meme.toHtml());
});
