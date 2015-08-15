function myfun(){
	var uname = document.getElementById('username'),
		passwd =document.getElementById("password");
	// $("#ab").hide();
	if(uname.value == "" && passwd.value == ""){
		document.getElementById("ac").style.display = "block";
	}
	else if(uname.value == "mohit" && passwd.value == "ram"){
		window.open("./home.html");
	}	
	else{
		document.getElementById("ab").style.display = "block";
	}
		
}