jQuery(document).ready(function($){

    $('form').on('submit', function(event){
        event.preventDefault();
        $('#alert-wrapper').html('');
        console.log('submiited');

        const text= $('#inputtext1').val();
        const text2= $('#inputtext2').val();
        const invalid = [];
        if(!text){
            invalid.push('Text');
        }
        if(!text2){
            invalid.push('Text2');
        }
        if(invalid.length > 0) {
            const alerts = invalid.map(function(example){
                return `<div class="alert alert-danger" role="alert">
                ${example} is invalid!
                </div>`;
            });
            $('#alert-wrapper').append(alerts);
            return;
        }
        $('#alert-wrapper').prepend("<p>The texts have Prepended</p>");


        console.log(text, text2);
    });
 
});
