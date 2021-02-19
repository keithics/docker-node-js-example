process.env.NODE_ENV = `development`;
import {Request} from './Request';

describe('Running REST API County test.. ', () => {

    beforeEach(() => {
        // run database seed
    });

    it('/POST /search with key:a, it should return an array for counties that begins with `a`', done => {
        Request
            .post('/search')
            .send({
                key:'a'
            })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


});
