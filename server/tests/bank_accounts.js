import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all bank accounts',()=>{
	it('Should be able to get all bank accounts',(done)=>{
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
