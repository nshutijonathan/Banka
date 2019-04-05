import moment from 'moment';
import uuid from 'uuid';
const usersarray=[
{
	email:"nshuti@gmail.com",
	firstName:"bla",
	lastName:"sdfg",
	password:"wert",
	type:"asdf",
	isAdmin:"werty"

},
{
	id:1,
	email:"nshuti@gmail.com",
	firstName:"bla",
	lastName:"sdfg",
	password:"wert",
	type:"asdf",
	isAdmin:"werty"

}
]

class Users{
	constructor({
		id,
		email,
		firstName,
		lastName,
		password,
		type,
		isAdmin
	})
	{
		this.id=uuid.v4(),
		this.email=email,
		this.firstName=firstName,
		this.lastName=lastName,
		this.password=password,
		this.type=type,
		this.isAdmin=isAdmin

	}
}
export default {Users,usersarray}; 