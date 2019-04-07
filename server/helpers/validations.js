import validator from 'validator';
import user_db from '../models/users';

class validateUser{
	static validatesignup(req,res){
		const allusers=user_db;
		if (typeof req.body.email==='number') {
			throw error("email must be in good format ");
		}
		if(validator.isEmpty(req.body.email)){
			throw error("email is required")
		}
		if(validator.isEmpty(req.body.firstName)){
			throw error("firstName is required");
		}
		if(validator.isEmpty(req.body.lastName)){
			throw error("lastName is required");
		}
		if(!validator.isLength(req.body.password,{min:4,max:250})){
			throw error("password must be at lease 4 characters")
		}
		if(validator.isEmpty(req.body.password)){
			throw error("please confirm your password");
		}
		else{

		}
		return true;

	}

}