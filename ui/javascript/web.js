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
function  staff_sign_up(){
	alert("Successfully signed up as a staff");
}
function credit_users(){
	   var retactivate=confirm("are you sure to credit this bank account?");
	if(retactivate==true){
		alert("User  bank account successfully Creadited!!!");
		return true
	}
	else{
		alert("User bank account is not  Creadited!!!");
		return false;
	}
}
function debit_users(){
	   var retactivate=confirm("are you sure to debit?");
	if(retactivate==true){
		alert("User  bank account successfully Debited!!!");
		return true
	}
	else{
		alert("User bank account is not  debited!!!");
		return false;
	}
}
function delete_account(){
	var retactivate=confirm("are you sure to delete this account?");
	if(retactivate==true){
		alert("Bank Account deleted Successfully");
		return true
	}
	else{
		alert("Bank Account not deleted");
		return false;
	}
}

<<<<<<< HEAD
=======
function personal_accounts(){
	document.getElementById("banka_accounts").style.display = "block";

}
>>>>>>> 08464eeddb073b84051d781c0ac9b7537e3b2eca
