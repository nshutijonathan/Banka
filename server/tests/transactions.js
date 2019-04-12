import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();
const date=new Date();
describe('get all transactions',()=>{
	it('Should be able to get all transactions',(done)=>{
		chai.request(server)
		.get('/api/v1/transactions')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			res.body.should.have.property('status').eql(200);
			done();
		});

	});
	it('Should not be able to get all transactions',(done)=>{
		chai.request(server)
		.get('/api/v1/account/12345')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('debit a bank account',()=>{
	it('Should be able to debit a bank account',(done)=>{
		const transactions={
			createdOn:date,
			type:date,
			accountNumber:"18299900",
			amount:"2222",
			oldBalance:"1222233",
			newBalance:"3000000",

		};
		 chai.request(server)
		.post('/api/v1/transactions/debit/:112345678')
		.send(transactions)
		.end((err,res)=>{
			console.log(res.body);

			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not able to debit a bank account',(done)=>{
		const transactions={
			createdOn:date,
			type:date,
			accountNumber:"",
			amount:"2222",
			oldBalance:"1222233",
			newBalance:"3000000",

		};
		 chai.request(server)
		.post('/api/v1/transactions/debit/:112345678')
		.send(transactions)
		.end((err,res)=>{
			console.log(res.body);

			res.body.should.be.an('object');
			done();
		});

	});
});
describe('Credit a bank account',()=>{
	it('Should be able to credit a bank account',(done)=>{
		const transactions={
			createdOn:date,
			type:date,
			accountNumber:"18299900",
			amount:"2222",
			oldBalance:"1222233",
			newBalance:"3000000",

		};
		 chai.request(server)
		.post('/api/v1/transactions/credit/123456')
		.send(transactions)
		.end((err,res)=>{
			console.log(res.body);

			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not able to credit a bank account',(done)=>{
		const transactions={
			createdOn:date,
			type:date,
			accountNumber:"56789",
			amount:"2222",
			oldBalance:"1222233",
			newBalance:"3000000",

		};
		 chai.request(server)
		.post('/api/v1/transactions/credit/1234')
		.send(transactions)
		.end((err,res)=>{
			console.log(res.body);

			res.body.should.be.an('object');
			done();
		});

	});
});
	

	
