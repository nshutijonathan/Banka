import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get all users',()=>{
	it('Should be able to get all the users',(done)=>{
		chai.request(server)
		.get('/api/v1/users')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('get a specific user ',()=>{
	it('Should be able to get specific user ',(done)=>{
		chai.request(server)
		.get('/api/v1/users/1')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to get specific user ',(done)=>{
		chai.request(server)
		.get('/api/v1/users/12345678901')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});