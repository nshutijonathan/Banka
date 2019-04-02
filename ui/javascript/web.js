function create_account(){
    alert("Acount created successsfully check you email to proceed");
}
function deactivate(){
	var retactivate=confirm("are you sure to deactivate this account?");
	if(retactivate==true){
		alert("User acount successfully deactivated!!");
		return true;
	}
	else{
		alert("User is still activated")
		return false;
	}
}
function activate(){
	var retactivate=confirm("are you sure to activate this User account?");
	if(retactivate==true){
		alert("User account successfully activated!!!");
		return true
	}
	else{
		alert("User is not activated");
		return false;
	}

}
function sign_up(){
	document.getElementById("panel").style.display = "block";
	document.getElementsByClassName('inputBox')[0].style.visibility = 'hidden';
	
}

