$(function(){
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal >= 380) {
            $("#section_1>div").addClass("in")
            $("#section_1>h1").addClass("word_show")
            $("#section_1>p").addClass("word_show")
            $("#section_1>div").removeClass("out")
            $("#section_1>h1").removeClass("word_hide")
            $("#section_1>p").removeClass("word_hide")
        } else {
            $("#section_1>div").addClass("out")
            $("#section_1>h1").addClass("word_hide")
            $("#section_1>p").addClass("word_hide")
            $("#section_1>div").removeClass("in")
            $("#section_1>h1").removeClass("word_show")
            $("#section_1>p").removeClass("word_show")
        }
    });
})