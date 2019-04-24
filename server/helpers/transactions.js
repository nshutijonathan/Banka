import  validator from 'validator';
class validatetransactions{
	static debit_credit(req,res){
		if(validator.isEmpty(req.body.type)){
			throw Error("type is required")
		}
		if(validator.isEmpty(req.body.cashier)){
			throw Error("cashier is required ");
		}
		if(validator.isEmpty(req.body.amount)){
			throw Error("amount is required")
		}
		if(!validator.isNumeric(req.body.amount)){
			throw Error("amount must be in numbers ");
		}
		if(validator.isEmpty(req.body.oldBalance)){
			throw Error("oldBalance is required");
		}
		if(!validator.isNumeric(req.body.oldBalance)){
			throw Error("oldBalance must be in numbers ");
		}
		if(validator.isEmpty(req.body.newBalance)){
			throw Error("newBalance is required");
		}
		if(!validator.isNumeric(req.body.newBalance)){
			throw Error("newBalance must be in numbers ");
		}
		else{

		}
		return true;

	}
}
export default validatetransactions;