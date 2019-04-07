import validator from 'validator';
import user_db from '../models/users';
class validateUser{
	static validatesignup(req,res){
		const allusers=user_db;
		if (typeof req.body.email==='number') {
			throw Error("email must be in good format ");
		}
		if(validator.isEmpty(req.body.email)){
			throw Error("email is required")
		}
		if(!validator.isEmail(req.body.email)){
			throw Error("your email must look like  this ex:andela@gmail.com");
		}
		if(validator.isEmpty(req.body.firstName)){
			throw Error("firstName is required");
		}
		if(!validator.isAlphanumeric(req.body.firstName)){
			throw Error("firstName must not contain special characters!")
		}
		if(validator.isEmpty(req.body.lastName)){
			throw Error("lastName is required");
		}
		if(!validator.isAlphanumeric(req.body.lastName)){
			throw Error("lastName must not contain special characters!")
		}
		if(!validator.isLength(req.body.password,{min:4,max:250})){
			throw Error("password must be at lease 4 characters")
		}
		if(validator.isEmpty(req.body.password)){
			throw Error("please confirm your password");
		}
		if(validator.isEmpty(req.body.type)){
			throw Error("type is required")
		}
		if (validator.isEmpty(req.body.isAdmin)) {
			throw Error("the row isAdmin is required")
		}
		else{

		}
		return true;

	}

}
export default validateUser;