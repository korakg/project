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
        $("#dogPic2").removeClass("dog_pic8")
        $("#dogPic2").addClass("dog_pic4")
        $("#storyline_8").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_4").removeClass("hide")
    })
    $(".btn5").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").removeClass("dog_pic8")
        $("#dogPic2").addClass("dog_pic5")
        $("#storyline_4").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_8").addClass("hide")
        $("#storyline_5").removeClass("hide")
    })
    $(".btn6").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").removeClass("dog_pic8")
        $("#dogPic2").addClass("dog_pic6")
        $("#storyline_4").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_8").addClass("hide")
        $("#storyline_6").removeClass("hide")
    })
    $(".btn7").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").removeClass("dog_pic8")
        $("#dogPic2").addClass("dog_pic7")
        $("#storyline_4").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_8").addClass("hide")
        $("#storyline_7").removeClass("hide")
    })
    $(".btn8").click(function() {
        $("#dogPic2").removeClass("dog_pic4")
        $("#dogPic2").removeClass("dog_pic5")
        $("#dogPic2").removeClass("dog_pic6")
        $("#dogPic2").removeClass("dog_pic7")
        $("#dogPic2").addClass("dog_pic8")
        $("#storyline_4").addClass("hide")
        $("#storyline_5").addClass("hide")
        $("#storyline_6").addClass("hide")
        $("#storyline_7").addClass("hide")
        $("#storyline_8").removeClass("hide")
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
        if (scrollVal >= 2700 && scrollVal <= 3500) {
            $("#aside2>p").addClass("in")
            $("#aside2>p").removeClass("out")
        } else {
            $("#aside2>p").removeClass("in")
            $("#aside2>p").addClass("out")
        }
        if (scrollVal >= 4200 && scrollVal <= 4600) {
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
})
