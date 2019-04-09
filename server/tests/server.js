import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();

describe('get welcome message',()=>{
	it('should return welcome message',(done)=>{
		chai.request(server)
		.get('/')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('get error welcome message',()=>{
	it('should not return welcome message',(done)=>{
		chai.request(server)
		.get('/3456')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('get all users ',()=>{
	it('should retrieve all users',(done)=>{
		chai.request(server)
		.get('/api/v1/users')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('get all users ',()=>{
	it('should not retrieve all users',(done)=>{
		chai.request(server)
		.get('/api/v1/users/ertyu')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('Creating users',()=>{
	it('should create a user ',(done)=>{
		chai.request(server)
		.post('/api/v1/auth/signup')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});