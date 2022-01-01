$(function(){
    var a,b
    $("#up_btn").click(function(){
        a=$("#v1").css("z-index")
        b=$("#v2").css("z-index")
        if(a==2){
            $("#v1").removeClass("switch2 switch3 switch4")
            $("#v2").removeClass("switch1 switch2 switch4")
            $("#v1").addClass("switch1")
            $("#v2").addClass("switch3")
        }
        if(b==2){
            $("#v1").removeClass("switch1 switch2 switch4")
            $("#v2").removeClass("switch2 switch3 switch4")
            $("#v1").addClass("switch3")
            $("#v2").addClass("switch1")
        }
    })
    $("#down_btn").click(function(){
        a=$("#v1").css("z-index")
        b=$("#v2").css("z-index")
        if(a==2){
            $("#v1").removeClass("switch1 switch2 switch3")
            $("#v2").removeClass("switch1 switch3 switch4")
            $("#v1").addClass("switch4")
            $("#v2").addClass("switch2")
        }
        if(b==2){
            $("#v1").removeClass("switch1 switch3 switch4")
            $("#v2").removeClass("switch1 switch2 switch3")
            $("#v1").addClass("switch2")
            $("#v2").addClass("switch4")
        }
    })
    $("#wall-1 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info1").removeClass("hide")
    })
    $("#wall-2 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info2").removeClass("hide")
    })
    $("#wall-3 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info3").removeClass("hide")
    })
    $("#wall-4 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info4").removeClass("hide")
    })
    $("#wall-5 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info5").removeClass("hide")
    })
    $("#wall-6 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info6").removeClass("hide")
    })
    $("#wall-7 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info7").removeClass("hide")
    })
    $("#wall-8 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info8").removeClass("hide")
    })
    $("#wall-9 a").click(function(){
        $("#infobox").removeClass("hide")
        $("#info9").removeClass("hide")
    })
    $("#infobox").click(function(){
        $("#infobox").addClass("hide")
        $("#info1").addClass("hide")
        $("#info2").addClass("hide")
        $("#info3").addClass("hide")
        $("#info4").addClass("hide")
        $("#info5").addClass("hide")
        $("#info6").addClass("hide")
        $("#info7").addClass("hide")
        $("#info8").addClass("hide")
        $("#info9").addClass("hide")
    })
})