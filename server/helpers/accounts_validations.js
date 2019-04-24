import  validator from 'validator';
import bank_accounts from '../models/create_bank_accounts';

class validateaccounts{
	static accounts_creation(req,res){
		/*if(validator.isEmpty(req.body.accountNumber)){
			throw Error("accountNumber is required")
		}*/
		if(validator.isEmpty(req.body.owner)){
			throw Error("owner is required")
		}
		if(validator.isEmpty(req.body.type)){
			throw Error("type is required");
		}
		if(validator.isEmpty(req.body.openingBalance)){
			throw Error("openingBalance is required");
		}
		/*if(!validator.isNumeric(req.body.openingBalance)){
			throw Error("openingBalance must be in numbers ");
		}*/
		else{

		}
		return true;

	}
}
export default validateaccounts;
