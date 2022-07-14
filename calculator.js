$(".bttn").on("click" , function(){
    $(this).addClass("pressed");
    setTimeout(function(){
        $(".bttn").removeClass("pressed");
    },100)

    if(!$(this).hasClass("not")){

        if(($(".expression").val())==0){
            $(".expression").val($(this).text());
         }
         else{
            $(".expression").val(($(".expression").val())+($(this).text()));        
         }
    }
});

$(".equalto").on("click" , function(){
    var result;
    result = eval($(".expression").val());
    $(".expression").val(result);
})


$(".allclear").on("click" , function(){
    $(".expression").val("0");
    
})

// keyboard

$(document).on("keydown" , function(event){
    pressEfct(event.key);
    if((event.key == "1") || (event.key == "2") || (event.key == "3") || (event.key == "4") || (event.key == "5") || (event.key == "6")||(event.key == "7")||(event.key == "8")||(event.key == "9")||(event.key == "0")||(event.key == "+")||(event.key == "-")||(event.key == "*")|| (event.key == "/")){
        
        
        if(($(".expression").val())==0){
            $(".expression").val(event.key);
         }
         else{
            $(".expression").val(($(".expression").val())+(event.key));        
         }
        
    }
    if((event.key == "Enter")){
            
            var result;
            result = eval($(".expression").val());
            $(".expression").val(result);
        }
    if((event.key == ".")){
        
        $(".expression").val("0");

    }    

});

function pressEfct(keyy){
    if(keyy=="."){
        keyy="AC";
    }
    if(keyy=="/"){
        keyy="divi";
    }
    if(keyy=="+"){
        keyy="plus";
    }
    if(keyy=="*"){
        keyy="multi"
    }
    $("#k"+keyy).addClass("pressed");
    setTimeout(function(){
        $("#k"+keyy).removeClass("pressed");
    },100);

}


