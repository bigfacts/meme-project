'use strict';

function setUpCategoryFilter() {
    var categories;
    var categoryList = [];
    $('.product').each(function() {
        categories = $(this).attr('data-categories').split(',');
        categories.forEach(function(category) {
            if(categoryList.indexOf(category) < 0) {
                categoryList.push(category);
            }
        });
    });
    categoryList.sort();
    categoryList.forEach(function(category) {
        var optionTag = `<option value="${category}">${category}</option>`;
        $('#category-filter').append(optionTag);
    });
};

setUpCategoryFilter();

function handleCategoryFilter() {
    $('#category-filter').on('change', function() {
        if($(this).val()) {
            $('.meme').hide();
            $(`.meme[data-categories*="${$(this).val()}"]`).fadeIn();
        }
        else {
            $('.meme').fadeIn();
        }
    });
};

handleCategoryFilter();