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
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property("message").eql("Welcome to Banka!!");
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
