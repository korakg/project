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
})