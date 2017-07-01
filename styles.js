$(document).ready(function(){
    $('img').click(function(){
          var something = $(this).attr('src');
          $(this).attr('src', $(this).attr('data-alt-src'));
    });
});
