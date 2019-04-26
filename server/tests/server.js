import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
chai.use(chaiHttp);
chai.should();
let token = '';
//home route testes
describe('get welcome message', () => {
    it('should return welcome message', (done) => {
        chai.request(server).get('/').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            res.body.should.have.property('status').eql(200);
            res.body.should.have.property("message").eql("Welcome to Banka!!");
            done();
        });
    });
});
describe('get error welcome message', () => {
    it('should not return welcome message', (done) => {
        chai.request(server).get('/3456').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});
describe('User sign up', () => {
    it('should be able to sign up', (done) => {
        chai.request(server).post('/api/v2/auth/signup').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
    it('should not  be able to sign up', (done) => {
        chai.request(server).post('/api/v2/auth/signup//').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});
describe('User sign in', () => {
    it('should be able to sign in', (done) => {
        chai.request(server).post('/api/v2/auth/signin').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
    it('should not  be able to sign in', (done) => {
        chai.request(server).post('/api/v2/auth/signin/').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});
describe('should retrieve all users', () => {
    it('should not be able to retrieve all users', (done) => {
        chai.request(server).get('/api/v2/users').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
    it('should not be able to retrieve all users', (done) => {
        chai.request(server).get('/api/v2/users//').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});
describe('should retrieve specific user', () => {
    it('should not be able to retrieve specific user', (done) => {
        chai.request(server).get('/api/v2/users/1').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
    it('should  be able to retrieve specific user', (done) => {
        chai.request(server).get('/api/v2/users/:300000').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});
describe('should delete specific user', () => {
    it('should not be delete specific user', (done) => {
        chai.request(server).delete('/api/v2/users/2').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
    it('should not be able to delete specific user', (done) => {
        chai.request(server).delete('/api/v2/users/300000').end((err, res) => {
            console.log(res.body);
            res.body.should.be.an('object');
            done();
        });
    });
});