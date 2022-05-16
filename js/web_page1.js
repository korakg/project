$(function() {
    $(".btn1").click(function() {
        $("#dogPic").removeClass("dog_pic2")
        $("#dogPic").removeClass("dog_pic3")
        $("#dogPic").addClass("dog_pic1")
        $("#storyline_2").addClass("hide")
        $("#storyline_3").addClass("hide")
        $("#storyline_1").removeClass("hide")
    })
    $(".btn2").click(function() {
        $("#dogPic").removeClass("dog_pic1")
        $("#dogPic").removeClass("dog_pic3")
        $("#dogPic").addClass("dog_pic2")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").addClass("hide")
        $("#storyline_2").removeClass("hide")
    })
    $(".btn3").click(function() {
        $("#dogPic").removeClass("dog_pic1")
        $("#dogPic").removeClass("dog_pic2")
        $("#dogPic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn4").click(function() {
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").addClass("dog_pic4")
        $("#storyline_7").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_4").removeClass("hide")
    })
    $(".btn5").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").addClass("dog_pic5")
        $("#storyline_4").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_5").removeClass("hide")
    })
    $(".btn6").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").addClass("dog_pic6")
        $("#storyline_4").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_6").removeClass("hide")
    })
    $(".btn7").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").addClass("dog_pic7")
        $("#storyline_4").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_7").removeClass("hide")
        $("#page2_btn").addClass("click")
    })

    let act_1=Array.from(document.querySelectorAll("#story>div>a"))
    let act_2=Array.from(document.querySelectorAll("#story2>div>a"))

    $.each(act_1,function(){
        $(act_1).click(function(){
            $("#story>div>a").removeClass("active")
            $(this).addClass("active")
        })
    })
    $.each(act_2,function(){
        $(act_2).click(function(){
            $("#story2>div>a").removeClass("active")
            $(this).addClass("active")
        })
    })

    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal >= 2500 && scrollVal <= 3000) {
            $("#aside2>p").addClass("in")
            $("#aside2>p").removeClass("out")
        } else {
            $("#aside2>p").removeClass("in")
            $("#aside2>p").addClass("out")
        }
        if (scrollVal >= 4100 && scrollVal <= 4600) {
            $("#aside3>p").addClass("in")
            $("#aside3>p").removeClass("out")
        } else {
            $("#aside3>p").removeClass("in")
            $("#aside3>p").addClass("out")
        }
    });
    $("#page2_btn").click(function() {
        $("#black").removeClass("hide")
    })
    $("#back_btn").click(function() {
        $("#black").addClass("hide")
    })
    $("#infopic_1").click(function(){
        $("#info_1").addClass("show")
    })
    $("#infopic_2").click(function(){
        $("#info_2").addClass("show")
    })
    $("#infopic_3").click(function(){
        $("#info_3").addClass("show")
    })
    $("#info_1>a").click(function(){
        $("#info_1").removeClass("show")
    })
    $("#info_2>a").click(function(){
        $("#info_2").removeClass("show")
    })
    $("#info_3>a").click(function(){
        $("#info_3").removeClass("show")
    })
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
