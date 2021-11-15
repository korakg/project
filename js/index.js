$(function() {
    $(".btn1").click(function() {
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").removeClass("dog_pic3")
        $("#dog_pic").addClass("dog_pic1")
        $("#storyline_2").addClass("hide")
        $("#storyline_3").addClass("hide")
        $("#storyline_1").removeClass("hide")
    })
    $(".btn2").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic3")
        $("#dog_pic").addClass("dog_pic2")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").addClass("hide")
        $("#storyline_2").removeClass("hide")
    })
    $(".btn3").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn4").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn5").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn6").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn7").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(".btn8").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
        $("#storyline_2").addClass("hide")
        $("#storyline_1").addClass("hide")
        $("#storyline_3").removeClass("hide")
    })
    $(window).scroll(function() {
        var scrollVal = $(this).scrollTop();
        if (scrollVal >= 1700 && scrollVal <= 2500) {
            $("#aside2>p").addClass("in")
            $("#aside2>p").removeClass("out")
        } else {
            $("#aside2>p").removeClass("in")
            $("#aside2>p").addClass("out")
        }
    });

})