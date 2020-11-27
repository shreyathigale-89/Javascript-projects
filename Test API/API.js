$(document).ready(function(){

    $('button').click(function(){
        const name = $('#nameid').val();
        
    $('#img').attr('src',`https://joeschmoe.io/api/v1/${name}`);

    });
});