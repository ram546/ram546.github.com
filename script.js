function myfun(){
	var uname = $("#username").val();
	var passwd = $("#password").val();
	if(uname == "" && passwd == ""){
		$("#ac").css({"display": "block"});
		$("#ab").css({"display": "none"});
	}
	else if(uname == "mohit" && passwd == "ram"){
		window.open("./home.html");
	}	
	else{
		$("#ac").css({"display": "none"});
		$("#ab").css({"display": "block"});
	}
		
}