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
            $("#p1").addClass("hide")
            $("#p2").removeClass("hide")
        }
        if(b==2){
            $("#v1").removeClass("switch1 switch2 switch4")
            $("#v2").removeClass("switch2 switch3 switch4")
            $("#v1").addClass("switch3")
            $("#v2").addClass("switch1")
            $("#p2").addClass("hide")
            $("#p1").removeClass("hide")
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
            $("#p1").addClass("hide")
            $("#p2").removeClass("hide")
        }
        if(b==2){
            $("#v1").removeClass("switch1 switch3 switch4")
            $("#v2").removeClass("switch1 switch2 switch3")
            $("#v1").addClass("switch2")
            $("#v2").addClass("switch4")
            $("#p2").addClass("hide")
            $("#p1").removeClass("hide")
        }
    })

    $(window).scroll(function(){
        var scrollVal=$(this).scrollTop();
        if(scrollVal>=800){
            $("#interview_txt").addClass("show")
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
    $("#info1 a").click(function(){
        $("#info1").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info2 a").click(function(){
        $("#info2").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info3 a").click(function(){
        $("#info3").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info4 a").click(function(){
        $("#info4").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info5 a").click(function(){
        $("#info5").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info6 a").click(function(){
        $("#info6").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info7 a").click(function(){
        $("#info7").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info8 a").click(function(){
        $("#info8").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#info9 a").click(function(){
        $("#info9").addClass("hide")
        $("#infobox").addClass("hide")
    })
    $("#about_btn").click(function(){
        $("#aboutUs").removeClass("about_hide")
    })
    $("#aboutUs>a").click(function(){
        $("#aboutUs").addClass("about_hide")
    })
})