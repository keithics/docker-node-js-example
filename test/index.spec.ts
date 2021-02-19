process.env.NODE_ENV = `testing`;
process.env.MONGO_URL = `mongodb+srv://drc_user:lO8VN1cTq26iXWKA@cluster0.c0g0s.mongodb.net/drc_database?retryWrites=true&w=majority`;
import {Request} from './Request';
const chai = require(`chai`);
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should();

describe('Running REST API County test.. ', () => {

    beforeEach(() => {
        // run database seed
    });

    it('/POST /search with key:a, it should return an array for counties that begins with letter `a` in either state or name', (done) => {
        Request
            .post('/search')
            .send({
                key:'a'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                res.body.should.be.an('array')
                done();
            })
            .catch(err => done(err))
    });

    it('/POST /search with key:`this is a fake search key`, it should return an empty array', (done) => {
        Request
            .post('/search')
            .send({
                key:'a'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                res.body.should.be.an('array')
                assert(res.body.length,0)
                done();
            })
            .catch(err => done(err))
    });

    it('/POST /search with no key , it should return 422 error', (done) => {
        Request
            .post('/search')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(422)
            .then(res => {
                done();
            })
            .catch(err => done(err))
    });

    it('/GET /seed it should seed the database if the db is empty', done => {
        Request
            .get('/seed')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

});
