$(document).ready(function() {
    setInterval ('cursorAnimation()', 600);

    var about = 'Computer Science teacher at The British School Rio de Janeiro. <br><br>' +
                'Graduate in Information and Communication Technology from FAETERJ institute of technology. <br><br>' +
                'Worked as a software developer in C++ language at the SIRLab (robotics laboratory). <br><br>' +
                'Worked as an intern at the LNCC (scientific computing laboratory) in the area of control and simulation of stochastic systems. <br><br>' +
                'Always participating in workshops, courses, and competitions in the technology area. <br><br>' +
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
    type(contact);
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