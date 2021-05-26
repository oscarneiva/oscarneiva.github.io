$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);

    var about = 'Computer Science teacher currently working at The British School Rio and as a private mentor, ' +
                'planning lessons and delivering ' +
                'in line with the International Baccalaureate Diploma Programme - IB and the International General ' +
                'Certificate of Secondary Education - IGCSE. ' +
                '<br><br>' +

                'Contact:'+
                '<ul>' +
                '<li><a href="mailto:contact@oscarneiva.com"> Email </a></li>' +
                '<li><a href="https://github.com/oscarneiva"> GitHub </a></li>' +
                '<li><a href="https://www.linkedin.com/in/oscar-neiva-636364b1"> LinkedIn </a></li>' +
                '</ul>' +
                '<br><br>' +

                'oscarneiva:~$'


    type(about);
});

function type(text, new_caption_length) {
    captionLength = new_caption_length || 0;

    $('#caption').html(text.substr(0, captionLength++));
    if(captionLength < text.length+1) {
        setTimeout(function(){
            type(text, captionLength);
        }, 1);
    }
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'medium', 'swing').animate({
        opacity: 1
    }, 'medium', 'swing');
}
