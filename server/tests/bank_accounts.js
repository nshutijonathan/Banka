import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();
const date=new Date();
describe('get all bank accounts',()=>{
	it('Should be able to get all Bank accounts',(done)=>{
		chai.request(server)
		.get('/api/v1/accounts')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to get all bank accounts',(done)=>{
		chai.request(server)
		.get('/api/v1/account')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');

			done();
		});

	});
});
describe('create bank account',()=>{
	it('Should be able to create bank account',(done)=>{
		const accounts={
			accountNumber:"123456",
			createdOn:date,
			owner:"1",
			type:"saving",
			status:"activated",
			openingBalance:"300",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should return bank account is required',(done)=>{
		const accounts={
			accountNumber:"",
			createdOn:date,
			owner:"1",
			type:"saving",
			status:"activated",
			openingBalance:"300",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should return owner is required',(done)=>{
		const accounts={
			accountNumber:"123456",
			createdOn:date,
			owner:"",
			type:"saving",
			status:"activated",
			openingBalance:"300",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should return type is required',(done)=>{
		const accounts={
			accountNumber:"",
			createdOn:date,
			owner:"1",
			type:"",
			status:"activated",
			openingBalance:"300",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should return status  is required',(done)=>{
		const accounts={
			accountNumber:"",
			createdOn:date,
			owner:"1",
			type:"saving",
			status:"",
			openingBalance:"300",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should retur opening balance is required',(done)=>{
		const accounts={
			accountNumber:"",
			createdOn:date,
			owner:"1",
			type:"saving",
			status:"activated",
			openingBalance:"",

		};
		 chai.request(server)
		.post('/api/v1/accounts')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to create bank account',(done)=>{
		const accounts={
			accountNumber:"",
			createdOn:date,
			owner:"",
			type:"saving",
			status:"activated",
			openingBalance:"300",

		};
		chai.request(server)
		.post('/api/v1/account')
		.send(accounts)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('delete a bank account',()=>{
	it('Should be to delete a bank account',(done)=>{
		chai.request(server)
		.delete('/api/v1/accounts/2')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to delete a bank account',(done)=>{
		chai.request(server)
		.delete('/api/v1/accounts/123456789ugfds')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property("status").eql(404);
			done();
		});

	});
});
describe('deactivate the bank account  ',()=>{
	it('Should be able to deactivate the bank account',(done)=>{
		const account={
			accountNumber:"12345",
			owner:"yva",
			type:"staff",
			status:"deactivated",
			openingBalance:"2000",

		};
		chai.request(server)
		.put('/api/v1/accounts/12345')
		.send(account)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to update a user',(done)=>{
		const account={
			accountNumber:"",
			owner:"yva",
			type:"staff",
			status:"deactivated",
			openingBalance:"2000",

		};
		chai.request(server)
		.put('/api/v1/accounts/12345')
		.send(account)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});

