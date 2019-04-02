function create_account(){
    alert("check you email we sent you a link to proceed");
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