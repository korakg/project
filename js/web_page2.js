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
    var position1 = $("#story_1").attr("left")
    var position2 = $("#story_2").attr("left")
    var position3 = $("#story_3").attr("left")
    $("#pick1").click(function() {

    })
    $("#pick2").click(function() {


    })
    $("#pick3").click(function() {

    })
})