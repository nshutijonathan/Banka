import usersarray from '../models/users';
import Users from '../models/users';
class UsersController{
	static getALLusers(req,res){
		return res.status(200).send({
			message:"successfully",
			usersarray
		});
	}
}
export default UsersController;