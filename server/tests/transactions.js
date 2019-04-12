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