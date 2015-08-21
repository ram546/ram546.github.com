function signIn(){
	var username = $('#signInInputUser').val(),
		password = $("#signInInputPass").val();
		
	if(username == "" && password == ""){
		$("#a").css({"display":"block"});
		$("#b").css({"display":"none"});
		
	}
	else if(username == "mohit" && password == "ram"){
		$("#a").css({"display":"none"});
		$("#b").css({"display":"none"});
		window.open("./home.html");
	}
	else{
		$("#a").css({"display":"none"});
		$("#b").css({"display":"block"});
	}
}