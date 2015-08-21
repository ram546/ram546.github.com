function signUp(){
    var v = validation();
    console.log(v);
    if(v == 1)
        window.open("./home.html");
}

var validation = function(){

var re = /^(\+91-|\+91|0)?\d{10}$/;
    // $("#signUpInputUser").on("click", function(){
        if($("#signUpInputUser").val().length === 0){
            $("#signUpInputUser").parent().addClass("has-error");
            $("#emptyError").css({"display":"block"});
        }
    // });
    $("#signUpInputUser").on("keydown", function(){
        if($("#signUpInputUser").parent().hasClass("has-error")){
            $("#signUpInputUser").parent().removeClass("has-error");
            $("#signUpInputUser").parent().addClass("has-success");
            $("#emptyError").css({"display":"none"});
        }
    });

    // $("#signUpInputEmail").on("click", function(){
        if($("#signUpInputEmail").val().length === 0){
            $("#signUpInputEmail").parent().addClass("has-error");
            $("#emptyError1").css({"display":"block"});
        }
    // });
    $("#signUpInputEmail").on("keydown", function(){
        if($("#signUpInputEmail").parent().hasClass("has-error")){
            $("#signUpInputEmail").parent().removeClass("has-error");
            $("#signUpInputEmail").parent().addClass("has-success");
            $("#emptyError1").css({"display":"none"});
        }
    });

    // $("#signUpInputMob").on("click", function(){
        if($("#signUpInputMob").val().length === 0 || re.test($("#signUpInputMob").val()) == false){
            $("#signUpInputMob").parent().addClass("has-error");
            // if(re.test($("#signUpInputMob").val()) == false){
                $("#mobError").css({"display":"block"});
                
            // }
        }
    // });
    $("#signUpInputMob").on("keydown", function(){
        if($("#signUpInputMob").parent().hasClass("has-error")){
            $("#signUpInputMob").parent().removeClass("has-error");
            $("#signUpInputMob").parent().addClass("has-success");
            $("#mobError").css({"display":"none"});
        }
    });

    // $("#signUpInputPassword").on("click", function(){
        if($("#signUpInputPassword").val().length === 0 ){
            $("#signUpInputPassword").parent().addClass("has-error");
            // if($("#signUpInputPassword").val().length <= 6){
                $("#passError").css({"display":"block"});
            // }
        }
    // });
    $("#signUpInputPassword").on("keydown", function(){
        if($("#signUpInputPassword").parent().hasClass("has-error") && $("#signUpInputPassword").val().length >= 7){
            $("#signUpInputPassword").parent().removeClass("has-error");
            $("#signUpInputPassword").parent().addClass("has-success");
            $("#passError").css({"display":"none"});
        }
    });
    // return p * m;
    
}

