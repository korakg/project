$(function() {
    $(".btn1").click(function() {
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").removeClass("dog_pic3")
        $("#dog_pic").addClass("dog_pic1")
    })
    $(".btn2").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic3")
        $("#dog_pic").addClass("dog_pic2")
    })
    $(".btn3").click(function() {
        $("#dog_pic").removeClass("dog_pic1")
        $("#dog_pic").removeClass("dog_pic2")
        $("#dog_pic").addClass("dog_pic3")
    })
})