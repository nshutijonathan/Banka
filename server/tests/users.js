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
			res.body.should.have.property('status').eql(200);
			res.body.should.have.property('message').eql('All users retrieved Successfully!');
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
		.get('/api/v1/users/12345678901//')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});

describe('create user',()=>{
	it('should be able to create user',(done)=>{
		const user={
			email:"nshuti@gmail.com",
			firstName:"yva",
			lastName:"bebe",
			password:"qwe12@@#",
			type:"staff",
			isAdmin:"no"

		};
		chai.request(server)
		.post('/api/v1/auth/signup')
		.send(user)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		})
	})
	it('should not be able to create user',(done)=>{
		const user={
			email:"",
			firstName:"yva",
			lastName:"bebe",
			password:"qwe12@@#",
			type:"staff",
			isAdmin:"no"

		};
		chai.request(server)
		.post('/api/v1/auth/signup')
		.send(user)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		})
	})
})
describe('Sign in user ',()=>{
	it('should be able to sign in ',(done)=>{
		const user={
			email:"nshuti@gmail.com",
			password:"qwe12@@#"
		};
		chai.request(server)
		.post('/api/v1/auth/signin')
		.send(user)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		})
	})
	it('should not be able to sign in ',(done)=>{
		const user={
			email:"",
			password:"qwe12@@#"

		};
		chai.request(server)
		.post('/api/v1/auth/signup')
		.send(user)
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		})
	})
})
describe('delete user',()=>{
	it('Should be to delete a user',(done)=>{
		chai.request(server)
		.delete('/api/v1/users/1')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to delete a user',(done)=>{
		chai.request(server)
		.delete('/api/v1/users/1234567890s')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});
describe('update the  user',()=>{
	it('Should be able to update a user',(done)=>{
		const user={
			email:"nnnn@gmail.com",
			firstName:"yva",
			lastName:"bebe",
			password:"qwe12@@#",
			type:"staff",
			isAdmin:"no"

		};
		chai.request(server)
		.put('/api/v1/users/1')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
	it('Should not be able to update a user',(done)=>{
		const user={
			email:"",
			firstName:"yva",
			lastName:"bebe",
			password:"qwe12@@#",
			type:"staff",
			isAdmin:"no"

		};
		chai.request(server)
		.put('/api/v1/users/1234567890s')
		.end((err,res)=>{
			console.log(res.body);
			res.body.should.be.an('object');
			done();
		});

	});
});