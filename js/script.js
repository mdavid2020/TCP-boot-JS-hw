$(".changeBtn1").click(function(){
    console.log("click is working Btn1")
    ;
    $(".firstDiv").addClass("firstDivNew")
    ;
})

$(".changeBtn2").click(function(){
    console.log("click is working Btn2")
    ;
    $(".secondDiv").css("background","yellow");
    $(".secondDiv").css("border-color","blue");
})

$(".changeBtn3").click(function(){
    console.log("click is working Btn3")
    ;
    $(".thirdDiv").css("background","teal");
    $(".thirdDiv").css("border-color","hotpink");
})

$(".changeAllBtn").click(function(){
    console.log("click is working Change All")
    ;
    $(".firstDiv").addClass("changeAllColors");
    $(".secondDiv").addClass("firstDivNew");
    $(".thirdDiv").css("background","orange");
    $(".thirdDiv").css("border-color","yellow");
})

$(".hideBtn1").click(function(){
    $(".firstDiv").hide();
})

$(".hideBtn2").click(function(){
    $(".secondDiv").hide();
})

$(".hideBtn3").click(function(){
    $(".thirdDiv").hide();
})

$(".hideAllBtn").click(function(){
    $(".firstDiv,.secondDiv,.thirdDiv").hide();
})

$(".showAllBtn").click(function(){
    $(".firstDiv,.secondDiv,.thirdDiv").show();
})

$(".resetColorsBtn").click(function(){
    console.log("click is working Change All")
    ;
    $(".firstDiv").css("background","red");
    $(".firstDiv").css("border-color","black");
    $(".secondDiv").css("background","blue");
    $(".secondDiv").css("border-color","yellow");
    $(".thirdDiv").css("background","green");
    $(".thirdDiv").css("border-color","purple");
})


