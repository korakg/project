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
        if (scrollVal >= 880) {
            $("#section_2>div").addClass("in")
            $("#section_2>h1").addClass("word_show")
            $("#section_2>p").addClass("word_show")
            $("#section_2>div").removeClass("out")
            $("#section_2>h1").removeClass("word_hide")
            $("#section_2>p").removeClass("word_hide")
        } else {
            $("#section_2>div").addClass("out")
            $("#section_2>h1").addClass("word_hide")
            $("#section_2>p").addClass("word_hide")
            $("#section_2>div").removeClass("in")
            $("#section_2>h1").removeClass("word_show")
            $("#section_2>p").removeClass("word_show")
        }
        if (scrollVal >= 1380) {
            $("#section_3>div").addClass("in")
            $("#section_3>h1").addClass("word_show")
            $("#section_3>p").addClass("word_show")
            $("#section_3>div").removeClass("out")
            $("#section_3>h1").removeClass("word_hide")
            $("#section_3>p").removeClass("word_hide")
        } else {
            $("#section_3>div").addClass("out")
            $("#section_3>h1").addClass("word_hide")
            $("#section_3>p").addClass("word_hide")
            $("#section_3>div").removeClass("in")
            $("#section_3>h1").removeClass("word_show")
            $("#section_3>p").removeClass("word_show")
        }
        if (scrollVal >= 1880) {
            $("#section_4>div").addClass("in")
            $("#section_4>h1").addClass("word_show")
            $("#section_4>p").addClass("word_show")
            $("#section_4>div").removeClass("out")
            $("#section_4>h1").removeClass("word_hide")
            $("#section_4>p").removeClass("word_hide")
        } else {
            $("#section_4>div").addClass("out")
            $("#section_4>h1").addClass("word_hide")
            $("#section_4>p").addClass("word_hide")
            $("#section_4>div").removeClass("in")
            $("#section_4>h1").removeClass("word_show")
            $("#section_4>p").removeClass("word_show")
        }
        if (scrollVal >= 2300) {
            $("#section_5>div").addClass("in")
            $("#section_5>h1").addClass("word_show")
            $("#section_5>p").addClass("word_show")
            $("#section_5>div").removeClass("out")
            $("#section_5>h1").removeClass("word_hide")
            $("#section_5>p").removeClass("word_hide")
        } else {
            $("#section_5>div").addClass("out")
            $("#section_5>h1").addClass("word_hide")
            $("#section_5>p").addClass("word_hide")
            $("#section_5>div").removeClass("in")
            $("#section_5>h1").removeClass("word_show")
            $("#section_5>p").removeClass("word_show")
        }
    });
    $("#about_btn").click(function(){
        $("#aboutUs").removeClass("about_hide")
    })
    $("#aboutUs>a.esc_btn").click(function(){
        $("#aboutUs").addClass("about_hide")
    })
    $("#aboutUs>a.switch_btn1").click(function(){
        $("#member1").addClass("about_hide")
        $("#member2").addClass("about_hide")
        $("#member3").addClass("about_hide")
        $("#member4").addClass("about_hide")
        $("#aboutUs>div>h1").addClass("about_hide")
        $("#aboutUs>div>.txt_left").removeClass("about_hide")
        $("#aboutUs>div>.txt_right").removeClass("about_hide")
        $("#aboutUs>a.switch_btn1").addClass("about_hide")
        $("#aboutUs>a.switch_btn2").removeClass("about_hide")
    })
    $("#aboutUs>a.switch_btn2").click(function(){
        $("#member1").removeClass("about_hide")
        $("#member2").removeClass("about_hide")
        $("#member3").removeClass("about_hide")
        $("#member4").removeClass("about_hide")
        $("#aboutUs>div>h1").removeClass("about_hide")
        $("#aboutUs>div>.txt_left").addClass("about_hide")
        $("#aboutUs>div>.txt_right").addClass("about_hide")
        $("#aboutUs>a.switch_btn2").addClass("about_hide")
        $("#aboutUs>a.switch_btn1").removeClass("about_hide")
    })
})