$(document).ready(function () {

    var skills = $('#skills');
    
    setTimeout(animateSkills('.skill-lan'), 1000);

    if (screen.width < 992) {
        $(window).on('scroll', function () {
            var winT = $(window).scrollTop(),
                winH = $(window).height(),
                skillsT = skills.offset().top;

            if (winT + winH > skillsT) {
                animateSkills('.skill');
            }
        });
    }else{
        setTimeout(animateSkills('.skill'), 1000);
    }

    function animateSkills(skill){
        $(skill).each(function () {
            var self = $(this),
                width = self.data('percent');
            self.find('.skill-bar').css('width', width);
        });
    }
});